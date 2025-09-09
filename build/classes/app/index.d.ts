import { ClientScope, ConsumptionType, DocumentSchema, DomainType, TechnologyType, VerificationStatus } from "../..";
import { Consumer } from "../consumer";
import { Model } from "../model";
export interface SecretSchema {
    created: number;
    id: string;
    lut?: number;
    revoked: boolean;
    secret: string;
}
export type App = {
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
    secrets?: SecretSchema[];
    keys?: Consumer['keys'];
} & DocumentSchema;
export declare class AppModel extends Model<App> {
    assignScopes(): void;
    static findApp(list: App[], id: string): App | null;
}
