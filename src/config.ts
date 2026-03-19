import { z } from "zod";

const ConfigSchema = z.object({
  PORT: z.coerce.number().default(3600),
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  SVC_NAME: z.string().default("filip-inna"),
  SHOPIFY_API_VERSION: z.string().default("2024-10"),
  // Analytics — set automatically by Listo at deploy time
  LISTO_API_KEY: z.string().optional(),
  LISTO_API_URL: z.string().optional(),
});

export type Config = z.infer<typeof ConfigSchema>;

export const config = ConfigSchema.parse(process.env);
