`POST /profiles/upload-cv` now extracts real PDF text with the configured AI provider and saves the validated candidate profile, skills and education in one transaction. This replaces the previous mock extraction and rejects malformed provider output before writing records.

- Add OpenRouter, OpenAI-compatible, Anthropic and Gemini adapters with server-side configuration, request timeouts and sanitized errors.
- Require a strict applicant JSON schema and compatible endpoints on OpenRouter, preventing free safety classifiers from returning labels as profiles. OpenRouter routing remains limited to free models.
- Add a data-preserving migration for missing timestamps and skill description, aligning the committed SQLite migrations with the current Prisma schema.
- Add an example PDF and authenticated integration coverage for login, multipart upload, persistence, retrieval and failure without partial writes. Test databases are isolated from development data.

Validation: 44 unit tests and 4 integration tests passed; lint and the Node 24 Nest build passed; Prisma reports no remaining schema drift.

Manual validation used the real configured OpenRouter provider through the running HTTP API: upload returned 201, subsequent GET returned 200, and SQLite confirmed the fictional candidate's name, summary, 15 skills and one education record. One free-model request timed out at 60 seconds; the successful validation ran with a temporary 180-second timeout. Development database contents and credentials are excluded from this PR.

Profiles represent candidates and remain separate from authenticated recruiter accounts, following the existing domain model.
