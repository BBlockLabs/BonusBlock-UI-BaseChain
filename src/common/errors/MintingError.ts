class MintingError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "MintingError";
    }
}

export default MintingError;
