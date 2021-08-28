// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    bodyBg: string;
    navBg: string;
    headings: string;
    text: string;
    borderColor: string;
    toggleIcon: string;
    mutedText: string;
    transitionTime: string;
    lightAccent: string;
    underLine: string;
    links: string;
  }
}