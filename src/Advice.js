import React, { useState } from 'react';
import dice from './icon-dice.svg';
import dvidor from './pattern-divider-desktop.svg';
import './Master.css';

const Advice = () => {
  const [advice, setAdvice] = useState('Click dice to get advice!');
  const [adviceId, setAdviceId] = useState('');

  const fetchAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then((data) => {
        const id = data.slip.id;
        const adviceText = data.slip.advice;
        setAdviceId(`Advice #${id}`);
        setAdvice(`"${adviceText}"`);
      })
      .catch((error) => console.error('Error fetching advice:', error));
  };

  return (
    <div className="container w-[170px] md:w-[300px] xl:w-[500px]">
      <div id="advice-box">
        <h3 id="id">{adviceId}</h3>
        <h1 id="advice">{advice}</h1>
        <div id="bottom">
        <img src={dvidor} id='dvidimg' className='w-[150px] md:w-[250px] xl:w-[350px]'/>
      <button id="dice" className='mt-[6%] lg:mt-[4%] 'onClick={fetchAdvice}><img src={dice}className='w-[15px] h-[10px] lg:w-[20px] lg:h-[15px]' /></button></div>
      </div>
    </div>
  );
};

export default Advice;
