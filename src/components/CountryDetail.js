import React from 'react'
import { useParams,useNavigate } from "react-router-dom";
import UseFetch from '../UseFetchCountry';

export default function CountryDetail() {

    const {countryData} = UseFetch();
    const { id } = useParams();
    const navigate = useNavigate();
    
    const goBackToCards = () => {
        navigate("/") 
    };

  return (
    <div>
            { countryData.filter((country) => country.name.common === id).map((country) => {
                    return (
                        <div key={country.name.common} className="detail-container">
                            <div className='detail-name-container'>
                                <h1 className='first-letter'>{country.name.common.slice(0,1)}</h1>
                                <h2>{country.name.common}</h2>                                
                            </div>

                            <a style={{margin: '10px'}} href={country.maps.googleMaps}>Location on google maps</a>
                            <p style={{margin: '10px'}}>The country belongs {country.region} region and {country.subregion} sub-region. Located at the {country.latlng[1]} &#176;N and {country.latlng[0]} &#176;W, this country has population of {country.population} and it has gained the independent, according to the CIA World Factbook.</p>
                            <button className='detail-btn' onClick={goBackToCards}>Go Back</button>
                        </div>
                    );
                })
            }
        </div>
  )
}
