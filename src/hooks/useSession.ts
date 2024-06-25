import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useEffect } from 'react';
import { useLogout } from './useLogout';

const useSession = () => {
    // const isAuthenticated = useSelector((state: RootState) => state.login.isAuthenticated);
    const isAuthenticated = true;
    const session = useSelector((state: RootState) => state.login.user?.session);
    const { performLogout } = useLogout();

    useEffect(() => {
        if (!isAuthenticated) {
            performLogout();
        }

        if (session && session.expiresOn) {
            const now = new Date().getTime();
            const expiresOn = new Date(session.expiresOn).getTime();

            if (now >= expiresOn) {
                performLogout();
            }
        }
    }, []);

    return session;
};

export default useSession;
