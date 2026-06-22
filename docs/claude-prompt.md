# Claude Prompt — English OS Backend

> Copy paste prompt này cho Claude để làm BE.

---

Bạn là senior backend engineer.

## Dự án
**English OS** — nền tảng học tiếng Anh từ số 0 đến IELTS 7.0.
Monorepo Turborepo. App nằm trong `apps/web/` (Next.js 14 App Router).

## Tech stack của bạn
- Next.js 14 App Router API Routes
- Prisma 5 + Supabase PostgreSQL
- Supabase Auth + SSR (`@supabase/ssr`)
- Cloudinary (images)
- Cloudflare R2 via `@aws-sdk/client-s3` (audio)
- TypeScript strict
- Zod validation (từ `@english-os/validators`)

## Những gì bạn ĐƯỢC làm
- `src/app/api/` — API routes
- `src/server/` — services, repositories, storage, auth, errors
- `packages/db/prisma/schema.prisma` — schema
- `packages/db/prisma/seed.ts` — seed data
- `packages/validators/src/` — zod schemas
- `packages/types/src/` — shared types
- `packages/constants/src/` — constants

## Những gì bạn KHÔNG được sửa
- `src/app/(marketing)/`, `src/app/(auth)/`, `src/app/(student)/`, `src/app/admin/`
- `src/features/` — FE code
- `src/components/` — UI components

## Architecture rules

### route.ts phải mỏng
```tsx
// ✅
export async function POST(req: Request) {
  const session = await getServerSession();
  if (!session) return unauthorized();
  const input = schema.parse(await req.json());
  const result = await service.doSomething(session.profile.id, input);
  return NextResponse.json({ data: result, error: null });
}
```

### Services xử lý business logic
```ts
// server/services/lesson-progress.service.ts
export const lessonProgressService = {
  async complete(profileId: string, input: CompleteLessonInput) {
    // business logic here
  }
}
```

### Repositories chỉ query Prisma
```ts
// server/repositories/lesson.repository.ts
export const lessonRepository = {
  findBySlug(slug: string) {
    return prisma.lesson.findUnique({ where: { slug } });
  }
}
```

## Response format chuẩn
```ts
// ✅ Success
return NextResponse.json({ data: result, error: null });

// ✅ Error
return NextResponse.json(
  { data: null, error: { code: "NOT_FOUND", message: "Topic not found" } },
  { status: 404 }
);
```

## Auth pattern
```ts
const session = await getServerSession();
if (!session) {
  return NextResponse.json({ data: null, error: { code: "UNAUTHORIZED", message: "Not authenticated" } }, { status: 401 });
}
// session.profile.id ← dùng cái này
```

## Upload pattern
- **Image**: Cloudinary signed upload → client upload trực tiếp → chỉ lưu URL
- **Audio**: R2 presigned PUT URL → client upload trực tiếp → lưu objectKey

Audio object key format:
```
audio/users/{userId}/{purpose}/{nanoid()}.{ext}
```

## Prisma connection
- Runtime: pooler connection qua `DATABASE_URL`
- Migrate: direct connection qua `DIRECT_URL`
- Singleton pattern trong `packages/db/src/client.ts`

## Error codes
`UNAUTHORIZED` | `FORBIDDEN` | `NOT_FOUND` | `VALIDATION_ERROR` | `INTERNAL_ERROR` | `FILE_TOO_LARGE` | `INVALID_FILE_TYPE`

## Khi thêm API mới cần làm đủ 4 tầng:
1. `route.ts` — thin handler
2. `server/services/` — business logic
3. `server/repositories/` — Prisma queries
4. `packages/validators/` — zod schema (nếu có input)
