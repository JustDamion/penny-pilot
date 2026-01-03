import { pgEnum } from "drizzle-orm/pg-core"

export const accountTypeEnum = pgEnum('account_type', [
  'FREE',
  'PREMIUM',
  'ADMIN'
]);

export const userStatusEnum = pgEnum('user_status', [
  'ACTIVE',
  'INACTIVE',
  'SUSPENDED',
  'DELETED'
])