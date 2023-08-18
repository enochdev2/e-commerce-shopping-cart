import React from 'react'

const ProductsData = ({data, setData}) => {
  return (
<div className="wrapper">

  
    {data.map((item)=>{
        const{id, title, image, price, description}= item;
        return (
        <div className="single-tem" key={id}>
            <img src={image} alt="image" />
        <div className="text">
        <div className="header">
            <h3>{title}</h3>
            <h3>${price}</h3>
        </div>
        <p className="desc"> 
        {description}
        </p>
        </div>
        </div>
        );
    })}

</div>
  )
}

export default ProductsData
