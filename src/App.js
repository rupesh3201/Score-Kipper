import React, { useEffect, useState } from 'react';

import './App.css';
import rcbimg from './pngwing.com (7).png';
import cskimg from './PngItem_1270691.png';



const ScoreCard = ({ TeamNmae, img, TeamDis , ChangeScore , Changewikit}) => {

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
 
useEffect (()=>{ChangeScore(Score)},[Score]);
useEffect (()=>{Changewikit(Wickets)},[Wickets]);
  

  
  

 

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
// Winner Component
const Winner = ({score1,score2
}) => {
  if(score1===score2)
    return "Its Tie"
  return <div> {
    score1 > score2 ? "Rcb Won" : "Csk Won"
  }</div>
  

}


function App() {
  const [Team1Score, Set1Score] = useState (0);
  const [ Team2Score, Set2Score] = useState (0);
  const [Team1wikit, Set1wikit] = useState (0);
  const [ Team2wikit, Set2wikit] = useState (0);
  const [WinnerTeam, setShowWinner] = useState (false)
  return ( 
   
    <div>
    <div className='Scorecard-Container'>
      <ScoreCard
        TeamNmae='RCB'
        img={rcbimg}
        TeamDis='Royal Challengers Bangalore (RCB) is a professional cricket team that plays in the Indian Premier League (IPL).'
        ChangeScore = {Set1Score}
        Changewikit = {Set1wikit}
      />
      <ScoreCard
        TeamNmae='CSK'
        img={cskimg}
        TeamDis='Chennai Super Kings (CSK) is an Indian professional cricket franchise based in Chennai, Tamil Nadu.'
        ChangeScore = {Set2Score}
        Changewikit = {Set2wikit}
      /> 
    </div>
    <div className='Teamsscorediv'>
    <h1 className='team'>RCB : {Team1Score} / {Team1wikit}</h1>
    <h1 className='team'>CSK : {Team2Score} /  {Team2wikit}</h1>
  
    </div>
    <button onClick={() => setShowWinner(true)} className="statusBtn">Who Won?</button>
      <div className='Winner'>
      {WinnerTeam ?  <Winner score1={Team1Score} score2={Team2Score} /> : null}      </div>
   
 
    </div>
   
  );
}

export default App;
