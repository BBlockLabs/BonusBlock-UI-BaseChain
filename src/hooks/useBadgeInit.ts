import {useAxios} from "../hooks/useAxios.ts";
import {useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../store/store.ts";
import CustomMintRequest from "../common/bonusblock_api/CustomMintRequest.ts";

export const useBadgeInit = () => {
    const { fetchData, loading } = useAxios();
    const [success, setSuccess] = useState<boolean>(false);

    const token = useSelector((state: RootState) => state.login.user?.session.token || 'invalid');

    const badgeInit = async (customMintRequest: CustomMintRequest) => {
        try {
            const response = await fetchData({
                url: '/faculty/mint/init',
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
                console.error('Failed to init badge:', response.errors);
            }
        } catch (error) {
            setSuccess(false);
            console.error('Error init badge:', error);
        }
    }

    return { badgeInit, loading, success };
}