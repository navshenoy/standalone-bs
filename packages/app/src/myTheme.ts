import { createThemeOptions, lightTheme, createTheme } from '@backstage/theme';
import { pageTheme } from './pageTheme';


export const myTheme = createThemeOptions({
    palette: lightTheme.palette,
    defaultPageTheme: 'home',
    pageTheme,
  });

  const newTheme = createTheme(myTheme);