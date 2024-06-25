export default class CustomMintRequest {
    nft: string;
    nonce: string;
    sender: string;

    constructor(nft: string, nonce: string, wallet: string) {
        this.nft = nft;
        this.nonce = nonce;
        this.sender = wallet;
    }
}