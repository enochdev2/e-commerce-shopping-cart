import React,{ useEffect, useState} from 'react'

import NavBar from './NavBar';
import ContextProvider from './ContextProvider';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import SideBar from './SideBar';
import ProductDetails from '../pages/ProductDetails';
import About from '../pages/About';
// import Data from './Data';


const HomePage = () => {
   
   const [datas, setdatas] = useState([]);
  const [sideBar, setSideBar] = useState(false);

 const url = 'https://fakestoreapi.com/products?limit=20';

  const fetchData = () =>{

    fetch(url)
    .then(response => {
      return response.json()
    })
    .then(data => {
      setdatas(data)
    })
  }

useEffect(() => {
  fetchData()
}, [])

const hideSideBar =(e)=>{

  if(sideBar){
    setSideBar(false)
  }
}

// console.log(datas);
  return (
<ContextProvider>
<BrowserRouter>
    <div className='container'  onClick={hideSideBar}>
      <NavBar sideBar={sideBar} setSideBar={setSideBar}/>
      <SideBar sideBar={sideBar} />
    </div>
<Routes>
    <Route path='/' exact element={<Shop datas={datas} setSideBar={setSideBar} />}/>
    <Route path='/Cart' exact element={<Cart datas={datas}/>}/>
    <Route path='/ProductDetails' element={ <ProductDetails/> }>
    <Route path=':ProductDetailsId' element={ <ProductDetails/> }/>
    </Route>
    <Route path="/About" element={ <About/> }/>
</Routes>
</BrowserRouter>
</ContextProvider>
  )
}

export default HomePage
