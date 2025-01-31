
import Card from '../Card'
import axios from "axios";
import React, { useEffect, useState } from "react";


const Scoops = () => {

  const [data,setData] = useState([]);  
  const [basket,setBasket] = useState([]);           
  useEffect(() => {
    axios
    .get("http://localhost:4040/scoops") //
    .then((res) => setData(res.data));
  },[]);
  
const addToBasket = (item)=>{

setBasket([...basket,item])


}

const clearFromBasket = (delete_id)=>{


const filtred = basket.filter((i) => i.id !== delete_id);
setBasket(filtred);

}











  return (
    <div>
      <h1>Dondurma Çeşitleri</h1>

      <p>Tanesi<span className='text-success'>  20</span></p>


      <h3>Çeşitler Ücreti <span  data-testid="total" className='text-success'>{basket.length * 20}</span></h3>

<div className='row gap-5 justify-content-between mt-4'>
{data.map((i)=>(
  <Card key={i.id} item={i} addToBasket={addToBasket}

  clearFromBasket={clearFromBasket}

  amount={basket.filter((basket_i)=> basket_i.id === i.id).length}
  />
))}
</div>
    
    
    </div>
  )
}

export default Scoops
