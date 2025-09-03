import { AuthenticationProvider, DocumentSchema } from "../..";
import { Model } from "../model";
export type User = {
    naming: {
        first: string;
        middle?: string;
        last: string;
    };
    email: string;
    eid?: string;
    isNewUser?: boolean | null;
    roles: {
        vendor?: boolean | null;
        administrator?: boolean | null;
        consumer?: boolean | null;
    };
    photoUrl: string | null | undefined;
    phone: string | null | undefined;
    security: {
        emailVerified: boolean;
        phoneVerified: boolean;
        provider?: AuthenticationProvider;
    };
} & DocumentSchema;
export declare class UserModel extends Model<User> {
    get accountIsValid(): boolean;
    get fullname(): string;
}
