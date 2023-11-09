
import React from 'react'
import styled from "styled-components"
import { Link } from 'gatsby'

const bgColor = '#111'
const fgColor = '#eee'
const colors = {
  primary: '#ffcc00',
  secondary: '#00A479',
  lite: '#AFFDF5'
}
const fontFamily = 'Montserrat'

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: 100vh;
    background-color: ${bgColor}
` 

// export const Description = styled.span`
//     display: inherit;
//     justify-content: inherit;
//     align-items: inherit;
//     font-size: 0.8rem;
//     width: 100%;
//     z-index: 2;
//     font-family: 'Courier New', Courier, monospace;
// `

export const Box = styled.div`
  display: ${({$flex, $grid}) => $grid && 'grid' || $flex && 'flex' || "block"};
  flex-direction: ${props=>props.$fd};
  justify-content: ${props => props.$jc};
  align-items: ${props => props.$ai};
  width: ${props => props.$w};
  gap: ${props => props?.$gap};
  padding:${props=>props.$pd};
  margin: ${props=>props.$mg};
  background-color: ${props=>props.$bgColor};
  background-image: url(${props => props.$bgImage});
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
`

export const Logo = styled.img`
  margin: 0;
  width: 150px;
  height: auto;
`

export const Image = styled(Logo)`
width: ${props=>props.$width};
height: ${props=>props.$height};
${({$rot}) => $rot && `transform: rotate(${$rot})`}
`

export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  width:100%;
  gap:20px;
  align-items: center;
  padding: 2rem;
  background-color: ${props=>props.$bgColor}
  `

export const NavLink = styled(Link)`
    padding: 5px;
    color: ${props=>props.$color};
    text-decoration: none;
    ${({$size}) => {
        switch($size){
            case 'xsm':
                return `
                    margin: 0.6rem;
                    font-size: 0.9rem;
                    line-height: 1.5;
                `
            case 'sm': 
                return `
                    font-size: 1.2rem;
                    line-height: 2;
                `
            case 'md': 
            return `
                font-size: 2rem;
                line-height: 2;
            `
            case 'lg': 
                return`
                    font-size: 3.5rem;
                    line-height: 3;
                `
            case 'xlg': 
                return`
                    font-size: 4rem;
                    line-height: 3;
                `
            case 'xxl': 
                return`
                    font-size: 5.5rem;
                    line-height: 3;
                `
        }
    }}

font-weight: ${({$bold, $heavy, $light}) => $bold && 600 || 
                                            $heavy && 900 || 
                                            $light && 400 };

`

export const Elink = styled.a`
    padding: 5px;
    color: ${props=>props.$color};
    text-decoration: none;
    ${({$size}) => {
        switch($size){
            case 'xsm':
                return `
                    margin: 0.6rem;
                    font-size: 0.9rem;
                    line-height: 1.5;
                `
            case 'sm': 
                return `
                    font-size: 1.2rem;
                    line-height: 2;
                `
            case 'md': 
            return `
                font-size: 2rem;
                line-height: 2;
            `
            case 'lg': 
                return`
                    font-size: 3.5rem;
                    line-height: 3;
                `
            case 'xlg': 
                return`
                    font-size: 4rem;
                    line-height: 3;
                `
            case 'xxl': 
                return`
                    font-size: 5.5rem;
                    line-height: 3;
                `
        }
    }}

font-weight: ${({$bold, $heavy, $light}) => $bold && 600 || 
                                            $heavy && 900 || 
                                            $light && 400 };

`
  
//   export const Code = styled.code`
//     font-weight: 700;
// `

export const Button = styled.button`
  color: ${props=>props.$color};
  background-color: ${props=>props.$bgColor};
  ${({$small, $large, $xlarge }) =>     $small && `padding:0.5rem;` || 
                                        $large && `width:210px; padding:0.5rem;`};
  margin:10px;
  text-align: center;
  border: none;
  border-radius: 5px;
`
  
//   /** .grid {
//     display: grid;
//     grid-template-columns: repeat(4, minmax(25%, auto));
//     max-width: 100%;
//     width: var(--max-width);
//   }
//   */
  
// export const Card = styled.div`
//     padding: 1rem 1.2rem;
//     border-radius: 10px;
//     border: 1px solid rgba(var(--card-border-rgb), 0);
//     transition: background 200ms, border 200ms;

//     ${
//         props => {
//             switch(true) {
//                 case 'span':
//                     return `
//                     display: inline-block;
//                     transition: transform 200ms;`
//             }
//         }
//     }
//   `

export const Heading =  styled.div`
text-align: ${({$center, $right, $left, $justify}) => 
                                              $center && 'center' ||
                                              $right && 'right' ||
                                              $left && 'left' ||
                                              $justify && 'justify'};
background-color: ${props=>props.$bgColor};
padding: ${props=>props.$pd};
border-radius: 10px;
${({$italize}) => $italize && `font-style: italic`};
color: ${props=>props.$color};
${({ $sm, $lg, $xlg }) => {
  switch(true){
    case $sm:
      return `
      font-size: 32px;
      font-weight: 700;
      `
    case $lg:
      return `
        font-size: 45px;
        font-weight: 900;
      `
    case $xlg:
      return `
        font-size: 60px;
        font-weight: 1200;
      `

  }
}}
`

export const Text = styled.p`
    font-weight: 300;
    color: ${props=>props.$color || '#333' };
    width: ${props=>props.$width};
    opacity: ${props=>props.$opacity || 'none'};
    text-align: ${props => props.$align || 'left'};
    ${({$italize}) => $italize && `font-style: italic`};
    /* font-weight: ${({$bold, $heavy, $light}) => $bold && 600 || 
                                            $heavy && 900 || 
                                            $light && 400 }; */

    ${({$size}) => {
        switch($size){
            case 'xsm':
                return `
                    margin: 0.6rem;
                    font-size: 0.9rem;
                    line-height: 1.5;
                `
            case 'sm': 
                return `
                    font-size: 1rem;
                    line-height: 2;
                `
            case 'md': 
            return `
                font-size: 2rem;
                line-height: 2;
            `
            case 'lg': 
                return`
                    font-size: 3.5rem;
                    line-height: 3;
                `
            case 'xlg': 
                return`
                    font-size: 4rem;
                    line-height: 3;
                `
            case 'xxl': 
                return`
                    font-size: 5.5rem;
                    line-height: 3;
                `
        }
    }}
    `
/*    
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 4rem 0;
  }
  
  .center::before {
    background: var(--secondary-glow);
    border-radius: 50%;
    width: 480px;
    height: 360px;
    margin-left: -400px;
  }
  
  .center::after {
    background: var(--primary-glow);
    width: 240px;
    height: 180px;
    z-index: -1;
  }
  
  .center::before,
  .center::after {
    content: '';
    left: 50%;
    position: absolute;
    filter: blur(45px);
    transform: translateZ(0);
  }
  
  .logo {
    position: relative;
  }
  /* Enable hover only on non-touch devices *//*

  @media (hover: hover) and (pointer: fine) {
    .card:hover {
      background: rgba(var(--card-rgb), 0.1);
      border: 1px solid rgba(var(--card-border-rgb), 0.15);
    }
  
    .card:hover span {
      transform: translateX(4px);
    }
  }
  
  @media (prefers-reduced-motion) {
    .card:hover span {
      transform: none;
    }
  }
  */
  
  /* Mobile *//*
  @media (max-width: 700px) {
    .content {
      padding: 4rem;
    }
  
    .grid {
      grid-template-columns: 1fr;
      margin-bottom: 120px;
      max-width: 320px;
      text-align: center;
    }
  
    .card {
      padding: 1rem 2.5rem;
    }
  
    .card h2 {
      margin-bottom: 0.5rem;
    }
  
    .center {
      padding: 8rem 0 6rem;
    }
  
    .center::before {
      transform: none;
      height: 300px;
    }
  
    .description {
      font-size: 0.8rem;
    }
  
    .description a {
      padding: 1rem;
    }
  
    .description p,
    .description div {
      display: flex;
      justify-content: center;
      position: fixed;
      width: 100%;
    }
  
    .description p {
      align-items: center;
      inset: 0 0 auto;
      padding: 2rem 1rem 1.4rem;
      border-radius: 0;
      border: none;
      border-bottom: 1px solid rgba(var(--callout-border-rgb), 0.25);
      background: linear-gradient(
        to bottom,
        rgba(var(--background-start-rgb), 1),
        rgba(var(--callout-rgb), 0.5)
      );
      background-clip: padding-box;
      backdrop-filter: blur(24px);
    }
  
    .description div {
      align-items: flex-end;
      pointer-events: none;
      inset: auto 0 0;
      padding: 2rem;
      height: 200px;
      background: linear-gradient(
        to bottom,
        transparent 0%,
        rgb(var(--background-end-rgb)) 40%
      );
      z-index: 1;
    }
  }
  
  /* Tablet and Smaller Desktop *//*
  @media (min-width: 701px) and (max-width: 1120px) {
    .grid {
      grid-template-columns: repeat(2, 50%);
    }
  }
  
  @media (prefers-color-scheme: dark) {
    .vercelLogo {
      filter: invert(1);
    }
  
    .logo {
      filter: invert(1) drop-shadow(0 0 0.3rem #ffffff70);
    }
  }
  
  @keyframes rotate {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
  */