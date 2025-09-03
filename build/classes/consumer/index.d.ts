import { DomainType, BusinessType, DocumentSchema, VerificationStatus, DashboardRoles } from "../..";
import { Model } from "../model";
export declare type Consumer = {
    name: string;
    image?: string;
    slug: string;
    information?: {
        legalName: string;
        domain: string;
        rcNumber: string;
        type: BusinessType;
        vat?: string;
        description: string;
        email: string;
        address: string;
        country: string;
        industry: string;
        status: VerificationStatus;
    };
    apis?: {
        live: string;
        test: string;
    };
    usage?: number;
    contact: {
        email: string;
        phone?: string;
    };
    keys?: {
        public: string;
        private?: string | null;
    };
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
        };
        test: {
            /**
             * Monthly eSign count
            */
            mec: number;
            /**
             * Monthly auth count
             */
            mac: number;
        };
    };
    owner: string;
    members: {
        [key: string]: {
            role: DashboardRoles;
            uid: string;
        };
    };
    terms: {
        mandatory: boolean;
        marketing: boolean;
    };
} & DocumentSchema;
export declare class ConsumerModel extends Model<Consumer> {
    hasApiKeys(): boolean;
    static initiateDetails(): Consumer['information'];
    userRole(uid: string): DashboardRoles | undefined;
    findApiKey(env: DomainType): string;
}
