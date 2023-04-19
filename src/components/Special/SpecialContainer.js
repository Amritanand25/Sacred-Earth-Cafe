import React from 'react';
import {special} from '../../data/special';
import '../../styles/special.css';
import CardContainer from './CardContainer';
import Toggler from '../Toggler';

const {home, products} = special;

const Component = () => {
  return (<CardContainer products={products} />);
}

const SpecialContainer = () => {
  return (
    <div className='p-normal special-container'>
      <div className='flex justify-center items-center home-img-container'>
         <img width="100%" src={home[0].src} alt={home[0].title} />
         <div className='home-title'>
         <p>{home[0].title.split(' ').filter((item, i) => i <= 1).join(' ')}</p>
         <p>{home[0].title.split(' ').filter((item, i) => i > 1).join(' ')}</p>
         </div>
      </div>
      <Toggler isOpen={true} Component={Component} title={"Today’s Special"}  />
    </div>
  )
}

export default SpecialContainer