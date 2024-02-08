import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css'; 
import Card from './Card';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';





function App() {
  const [data,setdata]=useState([]);


  useEffect(()=>{

    fetch('https://fakestoreapi.com/products').then(result=>result.json()).then((resp)=>{
      console.log(resp)
      setdata(resp)
    })

  })


  return (
    <>
      <Navbar/>
      <Card data={data}/>

    </>
  );
}

export default App;
