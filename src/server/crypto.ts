import * as crypto from 'crypto';

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

  public static hashAPIKey(key: string)
    : string {
    const hashedAPIKey: string = crypto.createHash('sha256').update(key).digest('hex');
    return hashedAPIKey;
  }
}
