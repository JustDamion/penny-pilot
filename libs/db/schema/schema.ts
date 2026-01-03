import { pgTable, uuid, varchar, text, timestamp } from "drizzle-orm/pg-core"
import { accountTypeEnum, userStatusEnum } from "./enums";

export const userTable = pgTable('user_profile', {
  id: uuid('id').defaultRandom().primaryKey(),
  accountType: accountTypeEnum('account_type').notNull(),
  firstName: varchar('first_name', { length: 255 }),
  lastName: varchar('last_name', { length: 255 }),
  email: varchar('email', { length: 255 }).notNull().unique(),
  passwordHash: text('password_hash').notNull(),
  status: userStatusEnum('status').notNull(),
  emailVerifiedAt: timestamp('email_verified_at', { withTimezone: true }),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow()
});