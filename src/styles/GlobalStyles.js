import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    //style reset
    ${reset}
    
    body {
        color: var(--text-color);
        background-color: #E5E5E5;
    }

    :root {
        --main-color: #FF8450;
        --text: #5B5555;
        --light-text: #7D7878;
        --dark-gray: #B6B3B3;
        --gray: #E2E2E2;
        --light-gray: #EEEEEE;
    }
`;

export default GlobalStyles;
