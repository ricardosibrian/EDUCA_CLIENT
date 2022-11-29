import * as React from 'react';
import Title from '../Utils/Title';
import banner from '../../assets/images/bienvenido-banner.jpg';
import {useUserContext} from '../contexts/UserContext';

const Inicio = () => {
   
  const {user} = useUserContext();
  console.log(user);
    return (
        <div>     
          <h1></h1>
          <Title text="Bienvenido," nombre={user.username}/>
          <img src={banner} alt="banner" width="100%" height="auto" ></img>
        </div>  
      );
};

export default Inicio;