import { Consumer, DocumentSchema } from "../..";

export type OrgRequest = {
  org: string;
  uid: string; // authenticated user
} & DocumentSchema;


export type Organization = Consumer; // consumer & vendor