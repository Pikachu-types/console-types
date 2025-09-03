export type DocumentSchema = {
  id: string; // Unique identifier metadata
  iat: Date | null | string | number;
  created?: Date | null | string | number;
  lut?: Date | null | string | number; // Timestamp for last update
}


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
    exp_month: string
    exp_year: string;
    last4: string;
    reusable: boolean
  },
  keep: string; // authorization code which we will encrypt
}

