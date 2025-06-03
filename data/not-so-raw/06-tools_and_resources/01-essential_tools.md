# Essential Tools

## Development & Collaboration
- **Visual Studio Code**  
  - Primary code editor for all projects (Meta, Microsoft, personal).  
  - Key extensions:  
    - ESLint & Prettier for consistent formatting.  
    - GitLens for in-editor Git history and annotations.  
    - Python, C/C++, and C# language support for multi‐stack work.

- **Git (via pnpm/Node tooling)**  
  - Version control for every codebase: microservices, data pipelines, and blog source.  
  - Uses GitHub for private repositories (work and personal) and GitLab for some side projects.  
  - Common workflows:  
    - Feature branches → Pull Requests (with CI checks) → Code review → Merge.  
    - Semantic commit messages to keep history clear (e.g., feat(meta): optimize ARDS locking).

- **pnpm & Node.js**  
  - Package manager (pnpm) preferred over npm/yarn for deterministic installs and disk efficiency.  
  - Node.js runtime for:  
    - Tedditory’s Takeaways (Next.js framework).  
    - Local RAG-chatbot development (Next.js + API routes).  
    - Supporting scripts (e.g., ingestion CLI for markdown → embeddings).

## Data Engineering & Infrastructure
- **Databricks (Apache Spark)**  
  - Development environment for streaming ETL (Microsoft pipelines).  
  - Notebook experiments (Python/Scala) to prototype transformations.  
  - Production jobs scheduled via Databricks Workflows in Azure.

- **Presto & Hive**  
  - Interactive querying of data lakes (Azure Data Lake, AWS S3).  
  - Used in Meta for extracting features into the Feature Serving Service (FSS).  
  - Frequent ad hoc queries during root-cause analysis (on-call, incidents).

- **Azure Data Factory & Event Hubs**  
  - Orchestration platform for Microsoft’s real-time ETL workloads.  
  - Event Hubs for ingesting streaming telemetry; Data Factory pipelines trigger Databricks jobs.

- **Kubernetes & Docker**  
  - Containerization: packages microservices (e.g., ARDS sidecar, blog preview server).  
  - Kubernetes clusters (Meta infra for ARDS, Azure for Microsoft PoCs).  
  - Helm charts and Terraform scripts to version infrastructure configurations.

- **RocksDB & Custom In‐Memory KV Stores**  
  - Core storage engine for ARDS at Meta.  
  - Ted’s focus: tuning RocksDB options (memtable sizes, bloom filters) and custom allocators.

## Monitoring & CI/CD
- **Sapienz & Dangerbot**  
  - Meta’s internal CI: automated test runners and static-check bots.  
  - Dangerbot posts annotations on PRs to ensure style/lint rules are met.

- **Daedalus & Grafana**  
  - Alerting and dashboarding for service SLIs/SLOs (ARD SLO dashboards).  
  - Grafana for Microsoft pipelines metrics (ETL job duration, failure rates).

- **Phabricator & GitHub Actions**  
  - Phabricator used occasionally at Meta for design docs and code reviews.  
  - GitHub Actions for TEDditory blog CI (build, lint, deploy to Vercel).

## Knowledge Retrieval & RAG Stack
- **PostgreSQL & pgvector**  
  - Stores RAG embeddings for Tedditory chatbot.  
  - Custom ingestion scripts parse markdown, extract front-matter, and compute embeddings.

- **OpenAI Models (o4-mini, GPT-4o)**  
  - o4-mini used as the primary reasoning engine in Ted’s personal RAG chatbot.  
  - GPT-4o occasionally leveraged for high‐level analysis or image understanding tasks.

- **LangChain & Custom Prompts**  
  - LangChain framework for orchestrating LLM calls, context windows, and retrieval.  
  - Custom “RAG prompts” that:  
    1. Check knowledge base first.  
    2. Cite evidence from Ted’s documents.  
    3. Respond in Ted’s preferred tone (concise, Vietnamese when needed).

## Productivity & Organization
- **Notion & Google Calendar**  
  - Notion for project tracking:  
    - “IC5 Google Prep” board (system‐design topics, coding questions).  
    - “Real Estate Pipeline” (property research, Airbnb tasks).  
  - Google Calendar for scheduling:  
    - Coursera class deadlines.  
    - Weekly “Learning Sprint” sessions.  
    - Mentor 1:1 slots with junior engineers.

- **Strava & Garmin**  
  - Tracking running sessions (mileage, pace, elevation).  
  - Set monthly mileage goals and share activity with friends.

- **Pocket & Goodreads**  
  - Pocket to save finance or leadership articles (Yahoo Finance, CNN).  
  - Goodreads to maintain “To-Read” list and rate books post‐completion.

## Communication
- **Slack (Work & VN Tech Diaspora)**  
  - Meta and Microsoft workspace channels for team collaboration, incident response, and code‐review feedback.  
  - VN Tech Diaspora Slack for community discussions, event announcements, and mentorship requests.

- **Zoom & Google Meet**  
  - Weekly 1:1s (e.g., with manager Cem for leadership feedback).  
  - Virtual meetups with Vietnamese diaspora groups and hackathons.