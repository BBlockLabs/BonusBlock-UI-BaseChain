class CustomMintNoAuthError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "NoAccountsError";
    }
}

export default CustomMintNoAuthError;