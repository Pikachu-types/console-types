import { DomainType, BusinessType, DocumentSchema, VerificationStatus, DashboardRoles } from "../..";
import { Model } from "../model";

export type Consumer = {
  name: string;
  image?: string;
  slug: string;
  information?: {
    legalName: string,
    domain: string,
    rcNumber: string,
    type: BusinessType,
    vat?: string,
    description: string,
    email: string,
    address: string,
    country: string,
    industry: string,
    status: VerificationStatus,
  };
  apis?: {
    live: string;
    test: string;
  },
  usage?: number;
  contact: {
    email: string;
    phone?: string;
  },
  keys?: {
    public: string;
    private?: string | null;
  },
  stats?: {
    production: {
      /**
       * Monthly eSign count
       */
      mec: number;
      /**
       * Monthly auth count
       */
      mac: number;
    },
    test: {
      /**
       * Monthly eSign count
      */
      mec: number;
      /**
       * Monthly auth count
       */
      mac: number;
    }
  },
  owner: string;
  members: {
    [key: string]: {
      role: DashboardRoles;
      uid: string;
    },
  };
  terms: {
    mandatory: boolean;
    marketing: boolean;
  };
} & DocumentSchema;

export class ConsumerModel extends Model<Consumer> {


  public hasApiKeys(): boolean {
    return (this.schema.apis?.live.length ?? 0) > 1 && (this.schema.apis?.test.length ?? 0) > 1;
  }

  public static initiateDetails(): Consumer['information'] {
    return {
      legalName: "",
      domain: "",
      rcNumber: "",
      vat: "",
      type: 'llc',
      description: "",
      email: "",
      address: "",
      country: "",
      industry: "",
      status: 'stale',
    }
  }

  public userRole(uid: string): DashboardRoles | undefined {
    return this.schema.members[uid].role;
  }


  public findApiKey(env: DomainType)
    : string {
    if (env === 'production' && this.schema.apis) {
      return this.schema.apis.live;
    } else if (env === 'test' && this.schema.apis) {
      return this.schema.apis.test;
    } else {
      return ""
    }
  }
}