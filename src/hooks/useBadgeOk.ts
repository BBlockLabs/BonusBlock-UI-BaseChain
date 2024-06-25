import {useAxios} from "../hooks/useAxios.ts";
import {useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../store/store.ts";

export const useBadgeOk = () => {
    const { fetchData, loading } = useAxios();
    const [success, setSuccess] = useState<boolean>(false);

    const token = useSelector((state: RootState) => state.login.user?.session.token || 'invalid');

    const badgeOk = async () => {
        try {
            const response = await fetchData({
                url: '/faculty/mint/ok',
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "X-Auth-Token": token,
                },
            });

            if (response.success) {
                setSuccess(true);
                return response.payload;
            } else {
                setSuccess(false);
                console.error('Failed to ok badge:', response.errors);
            }
        } catch (error) {
            setSuccess(false);
            console.error('Error ok badge:', error);
        }
    }

    return { badgeOk, loading, success };
}