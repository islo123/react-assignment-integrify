import React, { useState } from 'react'
import UseFetch from '../UseFetchCountry';
import { useNavigate } from "react-router-dom";
import { FcNext, FcPrevious} from "react-icons/fc";

export default function Countries() {

  const { countryData } = UseFetch();
  const [ pageNumber, setPageNumber ] = useState(5);
  const [ page, setPage ] = useState(1)
  const navigate = useNavigate();


  const handleDetail = (id) => {
      navigate(`/country-detail/${id}`) 
  };

  const prev = () => {

    if (pageNumber === 5) {
      setPageNumber(5)
    } else {
      setPageNumber(pageNumber - 5)
      setPage(page - 1)
    }  
  }

  const next = () => {

    if (pageNumber === countryData.length) {
      setPageNumber(countryData.length)
    } else {
      setPageNumber(pageNumber + 5)
      setPage(page + 1)
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
                index < pageNumber && index >= pageNumber - 5 && <div onClick={() => handleDetail(country.name.common)} className='table-nth'  key={country.name.common}>
                    <div className='table table-hover'>
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
          {page}/{countryData.length / 5}
          <button className='next-btn' onClick={next}><FcNext/></button>          
        </div>


    </div>
  )
}
