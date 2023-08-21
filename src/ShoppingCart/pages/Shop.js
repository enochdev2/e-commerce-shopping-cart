import React,{useContext} from 'react'
import {AppContext} from  '../component/ContextProvider';
import {Link} from 'react-router-dom';
import {FaShopify} from  'react-icons/fa'
import ProductDetails from './ProductDetails';



const Shop = ({datas, setSideBar}) => {

  const information = useContext(AppContext);
  const {dispatch} = information
  // console.log(dispatch);
  return (
    <>
     <div className="titled">
      <h2> <FaShopify/> Enoch Shopping Store</h2>
     </div>
  <div className="shopping-product" onClick={()=> setSideBar(false)} >
    {datas.map((item)=>{
      const {id, price, image, title, description } = item;
       item.quantity = 1;
      return(
        
        <div className="single-produc" key={id}>
          <Link to={`/ProductDetails/${id}`} element={<ProductDetails />} className='single-product'>
          <div className="product-image" >
            <img src={image} alt='image' />
          </div>
          <div className="heading">
           <h2 className="title">{title}</h2>
            <h2 className="price">${price}</h2>
          </div>
          <p className="desc">
            {description.substring(0, 100)}
            <button type="button" className='readmore'>readmore</button>
            </p>
          </Link>
         <button className='click' type="button" onClick={()=>dispatch({type:'Add',payload: item})} >Add to Cart</button>
        </div>
      )
    })}
  </div>
  </>
  )
}

export default Shop
