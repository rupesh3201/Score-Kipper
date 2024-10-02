import React, { useEffect, useState } from 'react'
// componnent created
// importing  img
import Burger from  './burger.png'
import './App.css'
import imgadd from './add.png';
import imgminius from './minus.png';


const ScoreCard =()=>{

  const BurgerPrice = 100;
  const [ Total_Bill , SetBill] = useState( BurgerPrice);
  const [Quantity , SetQuantity ] = useState(1);
  const  UpdateQuantity=(type)=>{
    if(type === "minus" && Quantity >1 ) 
    {
      SetQuantity(Quantity-1);
    }
    else if (type === "plus"  )
    {
      SetQuantity(Quantity+1);
    }

    // Bill
    
  
   
  
  }
  useEffect(()=> {
    if (Quantity <10 )
    {
      SetBill(BurgerPrice*Quantity);
    }
    else if ( Quantity > 10 && Quantity < 20)
    {
      const Total = BurgerPrice*Quantity;
      SetBill (Total-50);
    }
  },[Quantity])
  



 
  return (
    <>
    <div className='Holebody' > 
   
    <div className='Card'>
      <img src={Burger} className='Product_image' />
      <h1 className='Product_title'> Burgur</h1>      
      <div className='action_Btns'>
     
      <img src={imgminius} className='Action_btn' alt='imgminus' onClick={()=> UpdateQuantity("minus")}/>

      <img src={imgadd} className='Action_btn' alt='imgplus' onClick={()=> UpdateQuantity("plus")} />
      </div>

      <button className='Buybtn'>Order Now</button>
    
    </div>
    </div>
    </>

  )

  
}

function App() {
  return(
 <div className='Scorecard-Container'>
  <ScoreCard/>
  <ScoreCard/>
 </div>
  )
}

export default App