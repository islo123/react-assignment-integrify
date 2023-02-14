import React, { useState } from 'react'
import UseFetch from '../UseFetchCountry';
import { useNavigate } from "react-router-dom";
import { FcNext, FcPrevious} from "react-icons/fc";

export default function Countries() {

  const { countryData } = UseFetch();
  const [ nextPage, setNextPage] = useState(5);

  const navigate = useNavigate();


  const handleDetail = (id) => {
      navigate(`/country-detail/${id}`) 
  };

  const prev = () => {

    if (nextPage === 5) {
      setNextPage(5)
    } else {
      setNextPage(nextPage - 5)
    }

  }

  const next = () => {

    if (nextPage === countryData.length) {
      setNextPage(countryData.length)
    } else {
      setNextPage(nextPage + 5)
    }

  }

  return (
    <div className='container-list'>
        <div className='table'>
          <h3 className='item'>Flag</h3>
          <h3 className='item'>Name</h3>
          <h3 className='item'>Region</h3>
          <h3 className='item'>Population</h3>
        </div>
        {
            countryData.map((country, index) => {
                return (
                index < nextPage && index >= nextPage - 5 && <div onClick={() => handleDetail(country.name.common)} className='table-hover'  key={country.name.common}>
                    <div className='table table-nth'>
                      <img alt={country.name.common + "flag"} src={country.flags.png}/>
                      <h3 className='country-item'>{country.name.common}</h3>
                      <h3 className='country-item'>{country.region}</h3>
                      <h3 className='country-item'>{country.population}</h3>
                    </div>
                  </div>
                )
            })
        }
        <div style={{textAlign: "center"}}>
          <button className='prev-btn' onClick={prev}><FcPrevious/></button>
          <button className='next-btn' onClick={next}><FcNext/></button>          
        </div>


    </div>
  )
}
