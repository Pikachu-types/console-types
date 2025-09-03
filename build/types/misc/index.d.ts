export type DocumentSchema = {
    id: string;
    iat: Date | null | string | number;
    created?: Date | null | string | number;
    lut?: Date | null | string | number;
};
export interface Authorization {
    customer: {
        test?: string;
        live?: string;
    };
    map: {
        card_type: string;
        channel: string;
        brand: string;
        country_code: string;
        exp_month: string;
        exp_year: string;
        last4: string;
        reusable: boolean;
    };
    keep: string;
}
