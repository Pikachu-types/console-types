export interface CipherType {
    iv: string;
    content: string;
}
export declare class CryptoUtils {
    /**
     * Encrypt function
     * @param {string} text content you want to encrypt
     * @param {string} key provide a secret key for encryption process
     * @return {CipherType} returns cipher.
     */
    static encrypt(text: string, key: string): CipherType;
    /**
     * Decrypt function
     * @param {CipherType} hash content you want to decrypt
     * @param {string} key provide a secret key for encryption process
     * @return {string} returns content.
     */
    static decrypt(hash: CipherType, key: string): string;
    static decryptSeverMessage(id: string, data: string): string;
    static hashAPIKey(key: string): string;
}
