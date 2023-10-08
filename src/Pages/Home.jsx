import React from 'react';
import Homearea1 from '../Components/Homearea1';
import Homearea2 from '../Components/Homearea2';
import Homearea3 from '../Components/Homearea3';
import HomeHeader from '../Components/HomeHeader';
import Review from '../Components/Review';

export default function Home() {
  return (
    <div>
        <HomeHeader/>
        <Homearea1/>
        <Homearea2/>
        <Homearea3/>
        <Review/>
    </div>
  )
}

