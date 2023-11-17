import { useEffect, useState } from "react";


function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    // call api when click currency dependecy change
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
            .catch(() => console.error('404 not found'));

    }, [currency]);
    return data;
}

export default useCurrencyInfo;