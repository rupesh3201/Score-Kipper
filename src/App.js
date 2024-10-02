import React, { useState } from 'react';

import './App.css';
import rcbimg from './pngwing.com (7).png';
import cskimg from './PngItem_1270691.png';



const ScoreCard = ({ TeamNmae, img, TeamDis }) => {

  const [Score,SetScore] = useState(0);
  const UpdateScore = (type) => {
    if (type === "one" ) {
      SetScore(Score + 1);
      
    }
    else if (type === "two")
    {
      SetScore( Score + 2);
    }
    else if (type === "three")
      {
        SetScore( Score + 3);
      }
    else if (type === "four")
    {
      SetScore( Score + 4);
    }
    else if ( type === "five")
    {
      SetScore (Score +5)
    }
    else if ( type === "six")
    {
      SetScore (Score +6)
    }

   
  };
  const [Wickets,SetWickets] = useState(0);
  const UpdateWikits = (type) => {
    if (type === "W" &&  Wickets < 11 ) {
      SetWickets(Wickets + 1);
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
            <p className='Score_Result'> Score : { Score} </p>
            <p className='Score_Result'> wickets: {Wickets}</p>
            </div>
          </div>  
         
          <p className='Matchresult'>
          
          {Wickets > 10 ? `${TeamNmae} Scores: ${ Score} / ${Wickets} `  : null}
    
          </p>
          <h1 className='Final_score'>ScoreBoard</h1>
          <h4 className='status'>Click What Hppend on Last Ball</h4>
          <div className='Buttons'>
            <button className='Runs' onClick={()=> UpdateScore("zero") } >0</button>
             <button className='Runs' onClick={()=> UpdateScore("one")}>1</button>
             <button className='Runs' onClick={()=> UpdateScore("two")}>2</button>
             <button className='Runs' onClick={()=> UpdateScore("three")}>3</button>
             <button className='Runs' onClick={()=> UpdateScore("four")}>4</button>
             <button className='Runs' onClick={()=> UpdateScore("five")} >5</button>
             <button className='Runs'onClick={()=> UpdateScore("six")}>6</button>
             <button className='Runs' onClick={()=>UpdateWikits("W")} >w</button>
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
