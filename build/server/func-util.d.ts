import { Consumer } from "../classes";
import { CipherType } from ".";
export declare class FunctionUtility {
    static generateConsumerApiKeys(consumer: Consumer, args: {
        cipher: string;
    }): Consumer;
    static bankidCipherString(cipherKey: string, source: string): string;
    /**
   * Revert CipherType model string to readable string
   * long function
   * @param {string} cipherKey secret key
   * @param {string} source content
   * @return {string} returns value.
   */
    static bankidCipherToString(cipherKey: string, source: string): string;
    static createCipherString(source: CipherType): string;
    /**
     * Create a proper string from the CipherType model
     * @param {CipherType} source content to string from
     * @return {string} returns value.
     */
    static changeCipherStringToModel(source: string): CipherType;
}
