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
