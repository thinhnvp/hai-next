'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { memo } from 'react';
import type { UseChatHelpers } from '@ai-sdk/react';
import type { VisibilityType } from './visibility-selector';

interface SuggestedActionsProps {
  chatId: string;
  append: UseChatHelpers['append'];
  selectedVisibilityType: VisibilityType;
}

function PureSuggestedActions({
  chatId,
  append,
  selectedVisibilityType,
}: SuggestedActionsProps) {
  const suggestedActions = [
    {
      title: 'Hit me with Ted’s career highlights!',
      label: 'Quick, fun overview of where he’s been',
      action:
        'Hit me with Ted’s career highlights! Quick, fun overview of where he’s been',
    },
    {
      title: 'Cho tôi biết sơ qua hành trình sự nghiệp của Ted!',
      label: 'Tóm tắt vui vẻ các cột mốc đáng chú ý',
      action:
        'Cho tôi biết sơ qua hành trình sự nghiệp của Ted! Tóm tắt vui vẻ các cột mốc đáng chú ý',
    },
    {
      title: 'What keeps Ted going?',
      label: 'Tell me his life principles and passions',
      action: 'What keeps Ted going? Tell me his life principles and passions',
    },
    {
      title: 'Ted có những giá trị gì?',
      label: 'Chia sẻ triết lý sống và điều thôi thúc Ted',
      action:
        'Ted có những giá trị gì? Chia sẻ triết lý sống và điều thôi thúc Ted',
    },
  ];

  return (
    <div
      data-testid="suggested-actions"
      className="grid sm:grid-cols-2 gap-2 w-full"
    >
      {suggestedActions.map((suggestedAction, index) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.05 * index }}
          key={`suggested-action-${suggestedAction.title}-${index}`}
          className={index > 1 ? 'hidden sm:block' : 'block'}
        >
          <Button
            variant="ghost"
            onClick={async () => {
              window.history.replaceState({}, '', `/chat/${chatId}`);

              append({
                role: 'user',
                content: suggestedAction.action,
              });
            }}
            className="text-left border rounded-xl px-4 py-3.5 text-sm flex-1 gap-1 sm:flex-col w-full h-auto justify-start items-start"
          >
            <span className="font-medium">{suggestedAction.title}</span>
            <span className="text-muted-foreground">
              {suggestedAction.label}
            </span>
          </Button>
        </motion.div>
      ))}
    </div>
  );
}

export const SuggestedActions = memo(
  PureSuggestedActions,
  (prevProps, nextProps) => {
    if (prevProps.chatId !== nextProps.chatId) return false;
    if (prevProps.selectedVisibilityType !== nextProps.selectedVisibilityType)
      return false;

    return true;
  },
);
