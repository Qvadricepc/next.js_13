"use client";
import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };
export const GlobalStyles = styled.createGlobalStyle`
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd,
  dt {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
  }

  ul,
  ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #007bff;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #0056b3;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;
