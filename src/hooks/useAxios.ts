import { useState } from 'react';
import axiosInstance from "../common/api/axiosInstance.ts";

export const useAxios = <T = any, E = any>() => {
    const [response, setResponse] = useState<T | null>(null);
    const [error, setError] = useState<E | null>(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async (options: {
        url: string;
        method: 'GET' | 'POST' | 'DELETE' | 'PUT';
        data?: any;
        params?: any;
        headers?: Record<string, string>;
    }) => {
        setLoading(true);
        try {
            const result = await axiosInstance({
                url: options.url,
                method: options.method,
                data: options.data,
                params: options.params,
                headers: options.headers,
            });
            setResponse(result.data);
            return result.data;
        } catch (err: any) {
            setError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { response, error, loading, fetchData };
};
