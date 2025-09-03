import { ClientScope } from "..";

export const BASIC_CLIENT_SCOPE: ClientScope[] = ["flow:cancel", "flow:ping", "flow:poll"];
export const AUTH_CLIENT_SCOPE: ClientScope[] = ["identification:wildcard", "identification:same", "session:host", "session:shake", "session:validate"];
export const SIGN_CLIENT_SCOPE: ClientScope[] = ["signing:wildcard", "signing:same"];