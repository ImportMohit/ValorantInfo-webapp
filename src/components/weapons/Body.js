
import React from 'react'
import { useState,useEffect } from 'react';
import ShimmerUI from '../common/ShimmerUI';
import WeaponCard from './WeaponCard';
const WeaponBody = () => {
    
const [weapons,setWeapons] = useState();

useEffect(() => {
    getWeaponDetail();
  }, []);

  async function getWeaponDetail() {
    const data = await fetch(
        "https://valorant-api.com/v1/weapons"
      );
      const json = await data?.json();
      
      setWeapons(json?.data);
      
  }
  return (!weapons)?<ShimmerUI/>:(
    <div className='cardlist'>
        {
            
            weapons.map((weapon) => (
           
           <WeaponCard weapon={weapon}   key={weapon.uuid}/>
         
       ))
        }
    </div>
  )
}

export default WeaponBody;