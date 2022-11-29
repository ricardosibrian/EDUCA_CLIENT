import * as React from 'react';
import Title from '../Utils/Title';
import SecondaryTitle from '../Utils/SecondaryTitle';
import LeccionesList from '../Utils/LeccionesList';
import { useLocation } from 'react-router-dom';
import AddLection from '../Utils/AddLection';
import { useUserContext } from '../contexts/UserContext';

function CardDetails(props) {
    const { user } = useUserContext();
    const role = user.roles.find((item) => {
        return item === "admin";
    });

    const location = useLocation();
    const { courseid } = location.state;
    const { title } = location.state;
    const { videoLink } = location.state;

    return(
        <div> 
            <Title text={title}/>
            <SecondaryTitle text="Lecciones:"/>
            <LeccionesList courseid={courseid} videoLink={videoLink}/>
            { role === undefined ?
                <> 
                <div></div>
                </>:
                <><AddLection courseid={courseid}/>
                </>
            }
        </div> 
    );
}
  
export default CardDetails;