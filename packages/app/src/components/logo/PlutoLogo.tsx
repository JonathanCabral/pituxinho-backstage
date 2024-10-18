import React from 'react';
import { makeStyles } from '@material-ui/core';
import PITUXINHO_BANNER_SVG from './PLUTOS-BANNER.png';
import PITUXINHO_LOGOTIPO from './pluto_logo_resized_64x64.png';

const useLogoStyles = makeStyles({
  logo: {
    width: '20rem',
    height: '7rem',
    marginTop: '-55px',
    marginBottom: '0px',
  },
  logoTipo: {
    width: '45px',
    height: '45px',
  }
});

export default  function PlutoLogo() {
  const classes = useLogoStyles();

  return (
    <img src={PITUXINHO_BANNER_SVG} alt="Pluto's Portal" className={classes.logo}/>
  );
}

export function LogoTipo() {
  const classes = useLogoStyles();

  return (
    <img src={PITUXINHO_LOGOTIPO} alt="Pluto's Portal" className={classes.logoTipo}/>
  );
}