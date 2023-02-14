import React, { useMemo, useState } from 'react'
import UseFetch from '../UseFetchCountry';
import { useNavigate } from "react-router-dom";

export default function SearchCountry() {
    
    const {countryData} = UseFetch();
    const [query, setQuery] = useState("");

    const filterData = useMemo(() => { return query && countryData.filter((item) => {
        return item.name.common.toLowerCase().includes(query.toLowerCase())
        })
    }, [query, countryData])

    const navigate = useNavigate(); 
    
    const navigateToDetailCard = (id) => {
        navigate(`/country-detail/${id}`) 
    };


  return (
    <div>
    <input type="search" placeholder='Search by country name' value={query} onChange={e => setQuery(e.target.value)}/>
        {
            filterData.length !== 0 && (
                <div className='search-country-result'>
                    {
                        filterData.map((country) => {
                            return (
                                <div key={country.name.common} className='search-country' onClick={() => navigateToDetailCard(country.name.common)}>
                                    <h5>{country.name.common}</h5>
                                </div>
                            )
                        })
                    } 
                </div>
            )
        }
</div>
  )
}
