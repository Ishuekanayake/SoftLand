import React from 'react';
import Featuresareas from '../Components/Featuresareas';
import img1 from '../Components/Images/features.PNG';

export default function Features() {
  return (
    <div>
        <img className='im' src={img1} alt='image1'/>
        <Featuresareas/>
    </div>
  )
}
