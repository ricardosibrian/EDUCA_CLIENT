import * as React from 'react';
import Grid from '@mui/material/Grid';

export default function YTplayer(props) {
  return (
    <div>
     <iframe src={'https://www.youtube.com/embed/'+props.url.substring(32)} frameborder="0" width="500px" height="400px" allowFullScreen></iframe> 
    </div>
        
  );
}

