import React, { useEffect, useState } from 'react'
import Card from './Card';

function Countries() {
    const url = "https://restcountries.com/v3.1/all"
    const [countries,setCountries] = useState([]);
    const[searchQuery,setSearchQuery] = useState("");
    const handlesearch = (e) => {
        setSearchQuery(e.target.value);    
    }
    const filteredCountries = countries.filter(country =>
        country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const fetchcountries = async() => {
        try {
            let response = await fetch(url);
            let data = await response.json()
            console.log(data);
            setCountries(data);            
        } catch (error) {
            console.error(error,"Error")
        }
    }
    useEffect(()=>{
        fetchcountries()
    },[]);
    
  return (
    <div>
        <input 
        type="text" 
        placeholder="Search for countries..." 
        value={searchQuery}
        onChange={handlesearch}
        style={{
          margin:"20px",
          width:"50vw"
        }}
      />
    <div 
    className='Cardbody'
    style={{
        display:"flex",
        flexWrap:"wrap",
        textAlign:'center',
        gap:"10px",
        justifyContent:"center"
    }}
    
    >
      {filteredCountries.map((country)=> <Card name={country.name.common} img={country.flags.png} key={country.flag}/>)}
    </div>
    </div>
  )
}
export default Countries
