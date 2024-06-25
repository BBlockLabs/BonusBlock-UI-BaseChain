import Wallet from "@/types/Wallet.ts";

export interface LoginResponse {
    userXp: number;
    doneMissions: string;
    account: {
        userId: string;
        createdOn: string;
        modifiedOn: string;
        invitedCount: number;
        twitter: string;
        discord: string;
        github: string | null;
        telegram: string;
        reddit: string | null;
        email: string | null;
        metadata: {
            [key: string]: string;
        };
        wallets: Wallet[];
    };
    session: {
        expiresOn: string;
        token: string;
    };
}
