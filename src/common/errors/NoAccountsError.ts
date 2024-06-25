class NoAccountsError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "NoAccountsError";
    }
}

export default NoAccountsError;