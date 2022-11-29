import * as React from 'react';
import Cards from '../Utils/Cards';
import Cards3 from '../Utils/Cards3';
import Grid from '@mui/material/Grid';
import Title from '../Utils/Title';
import SecondaryTitle from '../Utils/SecondaryTitle';
import CursosIndex from './CursosIndex';
import axios from 'axios';
import EditButton from '../Utils/EditButton';
import { useUserContext } from '../contexts/UserContext';

function Cursos() {
    const { user } = useUserContext();
    const role = user.roles.find((item) => {
        return item === "admin";
    });
    const [ cursos, setCursos ] = React.useState([]);

    //Effect para cargar todos los cursos 1 vez
    React.useEffect(()=>{
        fetchCursos();
    }, []);

    //Fetch para obtener cursos de la base
    const fetchCursos = async () => {
        try {


            const { data } = await axios.get('/curso');
            setCursos(data.cursos);

        } catch (error) {
            console.log('Error inesperado!');
        }
    }

    //Mapeo de las cards con base a los cursos obtenidos de la base
    const mappedTarjetas = cursos.map(curso => {
        return(
            <Cards key={curso._id} title={curso.title} image_l={curso.image} courseid={curso._id} />
        )
    });

    return(
        <div> 
            <Title text="Cursos disponibles"/>
            <Grid 
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"     
                justifyContent="center"  
                style={{marginBottom:"55px"}}         
            >
                {mappedTarjetas} 
            </Grid>

            <SecondaryTitle text="Próximamente disponible"/>
            <Grid 
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"     
                justifyContent="center" 
                style={{marginBottom:"55px"}}          
            >
                <Cards3 key={1} title="Bases de datos" img="img2"/>
                <Cards3 key={2} title="Física I" img="img3"/>
                <Cards3 key={3} title="Programación web" img="img4"/>                
            </Grid>
            { role === undefined ?
                <> 
                <div></div>
                </>:
                <><EditButton />
                </>
            }
        </div> 
    );
}
  
export default Cursos;