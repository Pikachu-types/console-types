import { Consumer, DocumentSchema } from "../..";
export type OrgRequest = {
    org: string;
    uid: string;
} & DocumentSchema;
export type Organization = Consumer;
