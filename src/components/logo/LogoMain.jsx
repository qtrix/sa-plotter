// material-ui
import { useTheme } from '@mui/material/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 
 *
 */

// ==============================|| LOGO SVG ||============================== //
 import logo from 'assets/images/logo.svg';
const Logo = () => {
  const theme = useTheme();

  return (
    <>
    <img src={logo} alt="Mantis" width="50" />
    </>
  );
};

export default Logo;
