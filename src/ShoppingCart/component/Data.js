import React, {useState, useEffect} from 'react';



const Data = () => {
  const [data, setData] = useState();
  const [infos, setInfos] = useState([]);
  
const url = 'https://fakestoreapi.com/products?limit=20';


  const fetchData = async () => {
    try {
        const res = await fetch(url);
        const info = await res.json();
        console.log(info);
       setData(info);
       setInfos(info);  
       console.log(data);
       console.log(infos);
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(()=>{
    fetchData();
  }, [])

  
 
  return (
    <div className='container'>
      {/* <div className="menu-heading">
        <h1 className='h1'>Our Menu</h1>
        <ProductCategory categori={categori} filterData={filterData} />
      </div>
      <ProductsData data={data} setData={setData}/> */}
    </div>
  )
}

export default Data;
