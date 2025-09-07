import { ClientScope, ConsumptionType, DocumentSchema, DomainType, TechnologyType, VerificationStatus } from "../..";
import { AUTH_CLIENT_SCOPE, SIGN_CLIENT_SCOPE } from "../../utils/constants";
import { Consumer } from "../consumer";
import { Model } from "../model";

export interface SecretSchema {
  created: number;
  id: string;
  lut ?: number;
  revoked: boolean,
    secret: string;
}

export type App = {
  owner: string;
  technology: {
    type: TechnologyType,
    framework: string;
  },
  verificationStatus: VerificationStatus;
  appName: string;
  createdBy: string;
  displayName: string;
  image?: string;
  type: DomainType;
  consumption: ConsumptionType;
  information?: {
    description: string,
    category?: string,
    regulated?: boolean,
    verified: boolean,
    requestsCount?: string,
  };
  scopes?: ClientScope[];
  urls: string[];
  secrets?: SecretSchema[],
  keys?: Consumer['keys'];
} & DocumentSchema;


export class AppModel extends Model<App> {

  public assignScopes() {
    if (this.schema.scopes) return;

    // Initialize scopes array if it doesn't exist
    if (!this.schema.scopes) {
      this.schema.scopes = [];
    }

    if (this.schema.consumption === "sign") {
      this.schema.scopes = this.schema.scopes.concat(SIGN_CLIENT_SCOPE);
    } else if (this.schema.consumption === "auth") {
      this.schema.scopes = this.schema.scopes.concat(AUTH_CLIENT_SCOPE);
    } else if (this.schema.consumption === "all") {
      this.schema.scopes = this.schema.scopes.concat(AUTH_CLIENT_SCOPE);
      this.schema.scopes = this.schema.scopes.concat(SIGN_CLIENT_SCOPE);
    }

    if (this.schema.type === 'test' && this.schema.consumption === "sign") {
      this.schema.scopes.push("document:sign");
    }
  }
}