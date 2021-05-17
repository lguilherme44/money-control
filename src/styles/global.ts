import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    /* :root {
        --background: #f0f2f5;
        --red: #e52e4d;
        --blue: #5429cc;
        --green: #33cc95;
        --blue-light: #6933ff;
        --text-title: #363f5f;
        --text-body: #969cb3;
        --background: #f0f2f5;
        --shape: #ffffff;
    } */

    :root {
        --background: #e6eaf6;
        --red: #e52e4d;
        --dark: #131416;
        --green: #16cf7c;
        --yellow: #5429CC;
        --text-title: #363f5f;
        --text-body: #969cb3;
        --shape: #ffffff;
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 97.75%; // 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
    }

    body {
        background: ${(props) => props.theme.colors.background};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    /* modalcustom */
    .react-modal-overlay {
      background: rgba(0,0,0,0.5);

      position: fixed;
      top:0;
      bottom: 0;
      right: 0 ;
      left: 0;

      display: flex;
      align-items: center;
      justify-content: center;

      box-shadow:
      0 2.8px 2.2px rgba(0, 0, 0, 0.02),
      0 6.7px 5.3px rgba(0, 0, 0, 0.028),
      0 12.5px 10px rgba(0, 0, 0, 0.035),
      0 22.3px 17.9px rgba(0, 0, 0, 0.042),
      0 41.8px 33.4px rgba(0, 0, 0, 0.05),
      0 100px 80px rgba(0, 0, 0, 0.07)
      ;

      @media (max-width: 640px) {
         background: #131416;
      }
   }
   .react-modal-content {
      width: 100%;
      max-width: 576px;
      background: ${(props) => props.theme.colors.background};
      padding: 3rem;
      position: relative;
      border-radius: 0.25rem;
      outline: 0;

      @media (max-width: 640px) {
         margin: 1rem 1rem;
      }
   }

   .react-modal-close {
      position: absolute;
      right: 1.5rem;
      top: 1.5rem;
      border:0;
      background: transparent;

      transition: filter 0.2;

      &:hover {
         filter: brightness(0.8);
      }
   }
`;
