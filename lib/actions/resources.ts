'use server';

import {
  type NewResourceParams,
  insertResourceSchema,
  resources,
} from '@/lib/db/schema';
import { db } from '../db';
import { generateEmbeddings } from '../ai/embedding';
import { embeddings as embeddingsTable } from '../db/schema';
import { eq } from 'drizzle-orm';

export const createResource = async (input: NewResourceParams) => {
  try {
    const { content, category, sub, topic } = insertResourceSchema.parse(input);
    // const meta = input.meta || null;
    if (topic == null) {
      throw new Error('Topic must not be null');
    }
    const existing = await db
      .select()
      .from(resources)
      .where(eq(resources.topic, topic));
    if (existing.length > 0) return existing[0];

    const [resource] = await db
      .insert(resources)
      .values({ content, category, sub, topic })
      .returning();

    const embeddings = await generateEmbeddings(content);
    // console.log(
    //   '>>> embeddings trả về cho resource',
    //   resource.id,
    //   ':',
    //   embeddings,
    // );
    await db.insert(embeddingsTable).values(
      embeddings.map((embedding) => ({
        resourceId: resource.id,
        ...embedding,
      })),
    );

    return 'Resource successfully created and embedded.';
  } catch (error) {
    return error instanceof Error && error.message.length > 0
      ? error.message
      : 'Error, please try again.';
  }
};
