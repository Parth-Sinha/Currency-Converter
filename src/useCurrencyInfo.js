import React, { useEffect, useState } from 'react'

function useCurrencyInfo(fcurrency) {
  const [data, setData] = useState({})
  const api = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fcurrency}.json`
  useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fcurrency}.json`)
    .then((res)=>res.json())
    .then((res)=> setData(res[fcurrency]))
  },[fcurrency])
  return data
}

export default useCurrencyInfo
