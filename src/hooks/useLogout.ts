import { logout } from "../store/loginSlice";
import { persistor } from "../store/store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const performLogout = async () => {
        dispatch(logout());
        await persistor.purge();
        navigate('/');
    };

    return { performLogout };
};

