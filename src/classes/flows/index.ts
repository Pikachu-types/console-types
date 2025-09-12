export type FlowRequest = {
  id: string;
  created: number;
  expires: number;
  onsess: boolean;
  request: string;
  signed: boolean;
  sourceApp: string;
  destination: string,
  pkce?: string; // for OAuth flows
  to: string; // no National identity may be attached at inital point but there are edge cases where the "to" object actually has data reference to the nin user if the request is directed from the onset
  mode: string;
  cancelled: boolean;
}

export type IdentificationRequest = {
  id: string;
  consumer: string;
  app: string;
  mode: "identification" | "signature";
  action: string;
  payload: string;
  iat: number;
  exp: number;
  user: string;
  ip: string;
  useragent: string;
  name: string;
  sandbox: boolean;
  acquireClaims: string[];
  signedAt: number | undefined;
  signed: boolean;
  details?: Record<string, unknown>;
  signature: string;
  signatureIP: string;
}