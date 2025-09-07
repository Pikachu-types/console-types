import * as crypto from 'crypto';
import { removeAllIdentifiers } from '../utils/system';

export interface CipherType {
  iv: string;
  content: string;
}

export class CryptoUtils {
  /**
   * Encrypt function
   * @param {string} text content you want to encrypt
   * @param {string} key provide a secret key for encryption process
   * @return {CipherType} returns cipher.
   */
  public static encrypt(text: string, key: string): CipherType {
    const iv = crypto.randomBytes(16);

    const cipher = crypto.createCipheriv("aes-256-ctr", key, iv);

    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

    return {
      iv: iv.toString("hex"),
      content: encrypted.toString("hex"),
    };
  }

  /**
   * Decrypt function
   * @param {CipherType} hash content you want to decrypt
   * @param {string} key provide a secret key for encryption process
   * @return {string} returns content.
   */
  public static decrypt(hash: CipherType, key: string): string {
    const decipher = crypto.createDecipheriv("aes-256-ctr",
      key, Buffer.from(hash.iv, "hex"));

    const decrypted = Buffer.concat([decipher.update(
      Buffer.from(hash.content, "hex")),
    decipher.final()]);

    return decrypted.toString();
  }

  public static decryptSeverMessage(id: string, data: string) {
    const revertToType = (source: string) => {
      const cipher = source.split("-vi");

      if (cipher.length != 2) {
        return;
      }

      return {
        iv: cipher[1].replace("(", "").replace(")", ""),
        content: cipher[0],
      };
    }

    const hash = revertToType(data);
    if (!hash) return "";
    const key = removeAllIdentifiers(id).replace(/-/g, "");
    const decipher = crypto.createDecipheriv("aes-256-ctr",
      key, Buffer.from(hash.iv, "hex"));
    const decrypted = Buffer.
      concat([decipher.update(
        Buffer.from(hash.content, "hex")),
      decipher.final()]);
    return decrypted.toString();
  }

  public static hashAPIKey(key: string)
    : string {
    const hashedAPIKey: string = crypto.createHash('sha256').update(key).digest('hex');
    return hashedAPIKey;
  }
}
