import * as React from "react";
import Divider from '@mui/material/Divider';

export default function Title(props) {
  return (
    <div>
      <h1> {props.text} {props.nombre}</h1>
      <Divider style={{marginBottom:"30px"}}/>
    </div>
  );
}