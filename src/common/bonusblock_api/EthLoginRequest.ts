export interface EthLoginRequest {
    blockchainName: string;
    signedMessage: string;
    nonce: string;
    referralId?: string;
}
