import React,{useEffect,useState, useContext} from 'react'
import './ProductDetails.css';
import {AppContext} from  '../component/ContextProvider';

import { useParams } from 'react-router-dom'



const ProductDetails = () => {
  const information = useContext(AppContext);
  const {dispatch} = information
  const params = useParams();
  
  const url= `https://fakestoreapi.com/products/${params.ProductDetailsId}`;
useEffect(() => {
  fetch(url)
  .then((response)=> response.json())
  .then((data)=> setProductDetail(data))
  .catch(err => console.log(err))
}, [])


const [ProductDetail, setProductDetail] = useState({})

console.log(ProductDetail);
  return (
    <div className='details-page'>
    <img src={ProductDetail.image} alt='productDetails'/>
    <div className="top">
    <h2>
      {ProductDetail.title}
      </h2>
    <h2>
      ${ProductDetail.price}
      </h2>
    </div>
    
    <h2 className='category'>
      {ProductDetail.category}
      </h2>
    <h5>
      {ProductDetail.description}
      </h5>
      <button className='click' type="button" onClick={()=>dispatch({type:'Add',payload: ProductDetail})} >Add to Cart</button>
        
    </div>
  )
}

export default ProductDetails