import React, { useEffect, useState } from 'react';
import Burger from './burger.png';
import './App.css';
import rcbimg from './pngwing.com (7).png';
import cskimg from './PngItem_1270691.png';
import imgminius from './minus.png';
import imgadd from './add.png';

const ScoreCard = ({ TeamNmae, img, TeamDis }) => {
  const BurgerPrice = 100;
  
  const [Score,SetScore] = useState(0);

  const UpdateScore = (type) => {
    if (type === 'minus' && Score > 0) {
      SetScore(Score - 1);
    } else if (type === 'plus' && Score <10) {
      SetScore(Score + 1);
    }
  };

 

  return (
    <>
      <div className='Holebody'>
        <div className='Card'>
          <img src={img} className='Product_image' alt={`${TeamNmae} logo`} />
          <h1 className='Product_title'>{TeamNmae}</h1>
          <p className='disc'>{TeamDis}</p>
          <div className='action_Btns'>
            <div className='Scorediv'>
            <p className='Score_Result'> Score :0 </p>
            <p className='Score_Result'> wickets : {Score}</p>
            </div>
          </div>  
          <h1 className='Final_score'>Final Score</h1>
          <h4 className='status'>Click What Hppend on Last Ball</h4>
          <div className='Buttons'>
            <button className='Runs' >0</button>
             <button className='Runs'>1</button>
             <button className='Runs'>2</button>
             <button className='Runs'>3</button>
             <button className='Runs'>4</button>
             <button className='Runs'>5</button>
             <button className='Runs'>6</button>
             <button className='Runs'>w</button>
          </div>
        
          
        </div>
      </div>
    </>
  );
};

function App() {
  return (
    <div className='Scorecard-Container'>
      <ScoreCard
        TeamNmae='RCB'
        img={rcbimg}
        TeamDis='Royal Challengers Bangalore (RCB) is a professional cricket team that plays in the Indian Premier League (IPL).'
      />
      <ScoreCard
        TeamNmae='CSK'
        img={cskimg}
        TeamDis='Chennai Super Kings (CSK) is an Indian professional cricket franchise based in Chennai, Tamil Nadu.'
      />
    </div>
  );
}

export default App;
