import {  useEffect, useState } from 'react';


const useData = (API) => {
  const [data, setData] = useState({ 
    preguntas: [],
    correct: 0,
    show:false
  });

useEffect(() => {
  fetch(API)
  .then(response => response.json())
  .then(data => setData(data))
},[]);
return data;

}


export default useData;