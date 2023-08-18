import React from 'react'

const ProductCategory = ({categori, filterData}) => {
  return (
    <>
       <div className="button-wrapper">
        {/* {categori.map((categor,index)=>{
            return (<button type='button' key={index}>{categor}</button>)
        })} */}
          <button type="button" onClick={()=> filterData('all')}>All</button>
          <button type="button" onClick={()=> filterData("jewelery")}> jewelery </button>
          <button type="button" onClick={()=> filterData("men's clothing")}>
            men's clothing</button>
          <button type="button" onClick={()=> filterData('electronics')}>electionics</button>
        </div>
    </>
  )
}

export default ProductCategory;
