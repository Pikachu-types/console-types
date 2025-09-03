import { DocumentSchema } from "../..";
export type Log = {
    event: string;
    description?: string;
    actor: string;
    metadata?: Record<string, unknown>;
} & DocumentSchema;
