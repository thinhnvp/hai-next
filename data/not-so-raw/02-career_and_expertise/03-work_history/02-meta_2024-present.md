**Position**: IC4 Software Engineer  
**Company**: Meta (since June 2024)  
**Team**: AD RANKING DATA SERVICE (ARDS)

## Responsibilities
- Design, develop, and maintain ARDS, a key-value storage service supporting ads delivery at Meta Ads.
- Ensure ultra-low latency and high QPS (queries per second) for feature fetches used by ranking systems.
- Collaborate with cross-functional teams (Data Science, Ads Infrastructure, Product) to define service SLAs and feature requirements.
- Drive performance optimizations and capacity planning to keep ARDS as the top-ranked service for QPS and network bandwidth at Meta.
- Build and own the pipelines that feed real-time embeddings and feature data into the ranking stack.
- Mentor new joiners in the team’s best practices for distributed systems, scaling, and reliability.
- Participate actively in on-call rotations to troubleshoot Sev-1/Sev-2 incidents.

## Tech Stack & Tools
- **Languages**: C++, Python, SQL
- **Storage**: Custom in-memory key-value store, hive, Scuba, Manifold
- **Databases & Pipelines**: Presto, Hive, Dataswarm, internal Streaming frameworks
- **Infrastructure**: Tupperware, SMC
- **CI/CD & Monitoring**: UniDash, Conveyor, ODS

## Key Metrics & Impact
- **High QPS**: ARDS handles over 2 billions QPS during peak hours, accounting for >80TB/s of network bandwidth.
- **SLI/SLO Compliance**: Maintained 99.9% availability with sub-milisecond P99 server latency.