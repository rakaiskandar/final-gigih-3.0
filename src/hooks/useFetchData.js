import { useEffect, useState } from "react"

const useFetchData = (url) => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getData = async () => {
        try {
            const data = await fetch(url);
            const response = await data.json();

            setItem(response);
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            getData();
        }, 500)
    }, [url]);

    return { item, loading, error, getData }
}

export default useFetchData;