# Nestjs Nextjs Supabase starter template

This is an opiniated starter template for a NestJS application with Supabase as the database.

### _**-->Please read the links on the bottom of this readme first<--**_

- pnpm
- Nestjs API backend
- Fastify as the server
- Caching with Redis (KeyDB or Dragonfly as open source drop-in replacements)
- Rate limiting with Fastify rate limit
- Logging with Pino
- queue with BullMQ and/or Memphis.dev (Kafka alternative)
- Swagger for API documentation
- Drizzleorm as the ORM
- Supabase as the database
- Nextauth for authentication with Supabase RLS
- Nextjs frontend
- Tailwindcss for styling
- Shadcn for the UI components

## Todo

- [ ] migrate to monorepo
- [ ] add auth for backend and frontend (JWT with refresh tokens?)
- [ ] add rate limiting
- [ ] add caching
- [ ] add queue
- [ ] move shared types and utils to a shared package
- [ ] create a basic API user model
- [ ] create a basic dashboard layout as starting point
- [ ] create a simple todo app to demo functionality

## Demo model:

- users
- todos

## Inspiration & credits to

- [Rokas Dam](https://github.com/devRokas)
- [Rokas Dam nestjs starter - Nestjs + Supabase (no fastify, no drizzle, no auth)](https://github.com/devRokas/supabase-nestjs-rest-api-starter-kit)
- [Sakura Dev - video 1: Nestjs with Prisma and Nextauth](https://www.youtube.com/watch?v=khNwrFJ-Xqs)
- [Sakura Dev - Video 2: refactoring Nestjs with Drizzle](https://www.youtube.com/watch?v=l1DGXmmgZ9w)
- [NestJS](https://nestjs.com/)
- [Fastify](https://www.fastify.io/)
- [Pino](https://getpino.io/)
- [BullMQ](https://docs.bullmq.io/)
- [Memphis.dev](https://memphis.dev/)
- [KeyDB](https://keydb.dev/)
- [Dragonfly](https://dragonflydb.com/)
- [Supabase](https://supabase.io/)
- [Nextauth](https://next-auth.js.org/)
- [Nextjs](https://nextjs.org/)
- [Tailwindcss](https://tailwindcss.com/)
- [Shadcn](https://shadcn.com/)
- [Drizzleorm](https://drizzleorm.com/)
- [pnpm](https://pnpm.io/)

## Schema

```mermaid
graph TD;
  subgraph "Frontend"
    A[Next.js Frontend] --> B[Login Page]
    A --> C[Signup Page]
    A --> D[Dashboard]
    style B,C,D fill:#0b6b00,stroke:#0b6b00,stroke-width:4px
  end
  subgraph "Backend"
    E[NestJS with Fastify API Backend] --> F[Authentication & Authorization]
    E --> G[CRUD Operations for Tasks]
    F --> H[JWT Tokens]
    G --> I[Supabase Database]
    style F,H,G fill:#85007c,stroke:#85007c,stroke-width:4px
  end
  subgraph "Database"
    I[Supabase Database] --> J[Users Table]
    I --> K[Tasks Table]
    style J,K fill:#00328f,stroke:#00328f,stroke-width:4px
  end
  subgraph "Auth with JWT Refresh Tokens"
    F --> L[Token Generation & Refresh]
    style L fill:#f00,stroke:#f00,stroke-width:4px
  end
  subgraph "Security Considerations"
    B --> M[Secure Storage]
    E --> N[Input Validation & Sanitization]
    N --> O[HTTPS Communication]
    style M,N,O fill:#bd6202,stroke:#bd6202,stroke-width:4px
  end

```
