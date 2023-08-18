import React, {useState, useEffect} from 'react'
import ProductsData from './ProductsData';
import './product.css';
import ProductCategory from './ProductCategory';


const ProductsApp = () => {
  const [data, setData] = useState([]);
  const [info, setInfos] = useState([]);
  
  const newCategory =  info.map((item)=> item.category);
  console.log(newCategory);
  const [categori, setCategori] = useState(newCategory);

const url = 'https://fakestoreapi.com/products?limit=20';


  const fetchData = async () => {
    try {
        const res = await fetch(url);
        const info = await res.json();
       setData(info);
       setInfos(info);
        
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(()=>{
    fetchData();
  }, [])

  
  const filterData = (category)=> {
    if(category === 'all'){
      setData(info)
      return;
    }
    const newItem = info.filter((item) => item.category === category);
    setData(newItem);
  }

 
  return (
    <div className='container'>
      <div className="menu-heading">
        <h1 className='h1'>Our Menu</h1>
        <ProductCategory categori={categori} filterData={filterData} />
      </div>
      <ProductsData data={data} setData={setData}/>
    </div>
  )
}

export default ProductsApp
