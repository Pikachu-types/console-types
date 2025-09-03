export function strEnum<T extends string>(o: Array<T>): { [K in T]: K } {
  return o.reduce((res, key) => {
    res[key] = key;
    return res;
  }, Object.create(null));
}

/**
 * Random string generator helper
 * @param {number} length
 * @return {string} value
 */
export function generateRandomAlphaNumeric(length: number): string {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}


export function unixTimeStampNow(): number {
  const now = new Date();
  return Math.floor(now.getTime() / 1000);
}


export function makeAKeyFromIdentity(id: string) {
  if (!id.includes("_")) throw new Error("Identity is not recognised: missing signature element.");
  const key = id.split("_")[1];
  if (key.length !== 36) throw new Error("Invalid identity provided");
  return key.replace(/-/g, "");
}