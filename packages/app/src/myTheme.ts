import { lightTheme, createTheme } from '@backstage/theme';
import { pageTheme } from './pageTheme';


export const myTheme = createTheme({
    palette: lightTheme.palette,
    defaultPageTheme: 'home',
    pageTheme,
  });