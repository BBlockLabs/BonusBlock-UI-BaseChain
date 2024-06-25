import { useAxios } from "../hooks/useAxios.ts";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store.ts";
import CustomMintRequest from "../common/bonusblock_api/CustomMintRequest.ts";
import {useState} from "react";
import CustomMintNoAuthError from "../common/errors/CustomMintNoAuthError.ts";

export const useMintCustomInit = () => {
    const { fetchData, loading } = useAxios();
    const [success, setSuccess] = useState<boolean>(false);

    const token = useSelector((state: RootState) => state.login.user?.session.token || 'invalid');

    const getSignature = async (customMintRequest: CustomMintRequest) => {
        try {
            const response = await fetchData({
                url: '/faculty/mint-custom/init',
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "X-Auth-Token": token,
                },
                data: JSON.stringify(customMintRequest),
            });

            if (response.success) {
                setSuccess(true);
                return response.payload;
            } else {
                setSuccess(false);
                console.error('Failed to mint:', response.errors);
                throw new CustomMintNoAuthError('Failed to mint');
            }
        } catch (error) {
            setSuccess(false);
            console.error('Error minting:', error);
            throw new CustomMintNoAuthError('Error minting');
        }
    };

    return { getSignature, loading, success };
}