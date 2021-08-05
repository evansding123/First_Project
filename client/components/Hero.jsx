import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import IndividualCharacter from './IndividualCharacter.jsx';
//import alpha from '../pictures/alpha.png';
import stickman from '../pictures/stickman.jpeg';
import knight from '../pictures/knight.png'
import archer from '../pictures/archer.png'
import alzy from '../pictures/alzy.png'
import cyclops from '../pictures/cyclops.png'
import demon from '../pictures/demon.gif'
import priest from '../pictures/priest.png'
import vampire from '../pictures/vampire.png'
import mysteriousMan from '../pictures/mysteriousman.png'



const Hero = (props) => {

  const [hero, setHero] = useState(0);
  const [heroList, generateList] = useState({});

  useEffect(() => {
    setHero(props.number);

  })

  useEffect(() => {
    generateList(heroObject);
  }, [])



  //maybe its better to use an array for this
  let heroObject = {
    0: '',
    1: <IndividualCharacter
        values = {{
          level : 1,
          exp : 0,
          mana : 5,
          health : 10,
          picture : stickman,
          name : 'Stickman',
          index : 1,
          range  : 1,
          attack : 5,
          defense : 5,
          speed : 10,
          width : '10%',
          height : '10vh',
          initial : true,
        }}

      />,
    2: <IndividualCharacter
        values = {{
          level : 1,
          exp : 0,
          mana : 5,
          health : 10,
          picture : knight,
          name : 'Knight',
          index : 1,
          range  : 1,
          attack : 5,
          defense : 5,
          speed : 10,
          color : '#FFFF0080',
          initial : true,
        }}

      />,
    3: <IndividualCharacter
        values = {{
          level : 1,
          exp : 0,
          mana : 5,
          health : 10,
          picture : archer,
          name : 'Archer',
          index : 1,
          range  : 2,
          attack : 5,
          defense : 5,
          speed : 10,
          color : '#CC660080',
          initial : true,
      }}

      />,
    4: <IndividualCharacter
        values = {{
          level : 1,
          exp : 0,
          mana : 5,
          health : 10,
          picture : alzy,
          name : 'Alzy',
          index : 1,
          range  : 1,
          attack : 5,
          defense : 5,
          speed : 10,
          color : '#CC660080',
          initial : true,
      }}


      />,
    5: <IndividualCharacter
        values = {{
          level : 1,
          exp : 0,
          mana : 5,
          health : 10,
          picture : cyclops,
          name : 'Cyclops',
          index : 1,
          range  : 1,
          attack : 5,
          defense : 5,
          speed : 10,
          color : '#00CCCC80',
          initial : true,
      }}
      />,
    6: <IndividualCharacter
        values = {{
          level : 1,
          exp : 0,
          mana : 5,
          health : 10,
          picture : mysteriousMan,
          name : 'Mysterious Man',
          index : 1,
          range  : 1,
          attack : 5,
          defense : 5,
          speed : 10,
          color : '#7F00FF80',
          initial : true,
      }}
      />,
    7: <IndividualCharacter
        values = {{
          level : 1,
          exp : 0,
          mana : 5,
          health : 10,
          picture : priest,
          name : 'Priest',
          index : 1,
          range  : 1,
          attack : 5,
          defense : 5,
          speed : 10,
          color : '#FFFF0080',
          initial : true,
        }}
      />,
    8: <IndividualCharacter
        values = {{
          level : 1,
          exp : 0,
          mana : 5,
          health : 10,
          picture : vampire,
          name : 'Vampire',
          index : 1,
          range  : 1,
          attack : 5,
          defense : 5,
          speed : 10,
          color : '#9933FF80',
          initial : true,
        }}
    />,
  }

  // if(props.number === 1) {
  //   hero = 'one jpg';
  // }

  return(
    <div>{heroList[hero]}</div>
  )


}


export default Hero;