import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,600,700|Ubuntu:400,500,700&display=swap');
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Ubuntu', sans-serif;
    background: #EBEBEB;
    --text-color: #303030;
    --text-home-color: #fcfcfc;
    --second-color: #57D131;
    --main-button-color: #57D131;
    --second-button-color: #707070;

    --main-font: 'Ubuntu', sans-serif;
    --second-font: 'Montserrat', sans-serif;
    --bg-menu: #252934;
    --bg-contact: #252934;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
    outline: 0;
  }
  img {
    display: block;
  	width: 100%;
  	height: auto;
  }

  button{
    cursor: pointer;
  }

  body, input, button{
    font: 14px sans-serif;
  }

`;
export default GlobalStyles;