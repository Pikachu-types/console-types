import generateApiKey from "generate-api-key";
import { Consumer } from "../classes";
import { ApiKeyPrefix, CipherType } from ".";
import { CryptoUtils } from "./crypto";

export class FunctionUtility {
  public static generateConsumerApiKeys(consumer: Consumer, args: { cipher: string }) {
    var key = generateApiKey({ method: 'string', min: 32, max: 32, batch: 2 });
    consumer.apis = {
      live: `${ApiKeyPrefix.live}${key[0]}`,
      test: `${ApiKeyPrefix.test}${key[1]}`,
    };
    consumer.apis = {
      live: this.bankidCipherString(args.cipher, consumer.apis.live),
      test: this.bankidCipherString(args.cipher, consumer.apis.test),
    }

    return consumer;
  }


  public static bankidCipherString(cipherKey: string,
    source: string): string {
    return this.
      createCipherString(CryptoUtils.encrypt(source, cipherKey));
  }

  /**
 * Revert CipherType model string to readable string
 * long function
 * @param {string} cipherKey secret key
 * @param {string} source content
 * @return {string} returns value.
 */
  public static bankidCipherToString(cipherKey: string,
    source: string): string {
    const signature = this.
      changeCipherStringToModel(source);
    return CryptoUtils.decrypt(signature, cipherKey);
  }

  public static createCipherString(source: CipherType): string {
    return `${source.content}-vi(${source.iv})`;
  }


  /**
   * Create a proper string from the CipherType model
   * @param {CipherType} source content to string from
   * @return {string} returns value.
   */
  public static changeCipherStringToModel(source: string): CipherType {
    const cipher = source.split("-vi");

    if (cipher.length != 2) {
      throw new Error("Invalid source string");
    }

    return {
      iv: cipher[1].replace("(", "").replace(")", ""),
      content: cipher[0],
    };
  }

}