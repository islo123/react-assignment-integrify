import {useState, useEffect} from "react";

const url = 'https://restcountries.com/v3.1/all';

export default function UseFetch() {
    const [countryData, setCountryData] = useState([]);

    useEffect(() => {

        const getData = async () => {
            const response = await fetch(url)
            const countries = await response.json()
            setCountryData(countries);
        }

        getData()

    }, [countryData])

    return {countryData}
}