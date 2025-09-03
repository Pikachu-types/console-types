import { ClientScope, ConsumptionType, DocumentSchema, DomainType, TechnologyType, VerificationStatus } from "../..";
import { Consumer } from "../consumer";
import { Model } from "../model";
export declare type App = {
    owner: string;
    technology: {
        type: TechnologyType;
        framework: string;
    };
    verificationStatus: VerificationStatus;
    appName: string;
    createdBy: string;
    displayName: string;
    image?: string;
    type: DomainType;
    consumption: ConsumptionType;
    information?: {
        description: string;
        category?: string;
        regulated?: boolean;
        verified: boolean;
        requestsCount?: string;
    };
    scopes?: ClientScope[];
    urls: string[];
    keys?: Consumer['keys'];
} & DocumentSchema;
export declare class AppModel extends Model<App> {
    assignScopes(): void;
}
