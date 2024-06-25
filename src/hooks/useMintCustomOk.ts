import { useAxios } from "../hooks/useAxios.ts";
import { useSelector } from "react-redux";
import { RootState } from "../store/store.ts";
import { useState } from "react";

export const useMintCustomOk= () => {
    const { fetchData, loading } = useAxios();
    const [success, setSuccess] = useState<boolean>(false);

    const token = useSelector((state: RootState) => state.login.user?.session.token || 'invalid');

    const customMintOk = async (req: string) => {
        try {
            const response = await fetchData({
                url: '/faculty/mint-custom/ok',
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "X-Auth-Token": token,
                },
                data: req,
            });

            if (response.success) {
                setSuccess(true);
                return response.payload;
            } else {
                setSuccess(false);
                throw response.errors;
            }
        } catch (error) {
            setSuccess(false);
            throw error;
        }
    };

    return { customMintOk, loading, success };
}