import React from 'react'
import styled from "styled-components"
import { Link } from 'gatsby'
import { motion } from 'framer-motion'

const fg="#000"
const bg="#fff"
const secondary="#00A479"
const primary = '#ffcc00'
const lite = '#AFFDF5'

export const theme = {
  light : {
    primary: secondary,
    secondary: primary,
    lite,
    bgColor: bg,
    fgColor: fg,
  },
  dark : {
    primary,
    secondary,
    lite,
    bgColor: fg,
    fgColor: bg,
  }
  
}

export const Main = styled(motion.main)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: 100vh;
    width: inherit;
    background-color: ${theme.bgColor}
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
  ${({$square}) => $square && `height: ${$square}; width:${$square}`};
  gap: ${props => props?.$gap};
  padding:${props=>props.$pd};
  margin: ${props=>props.$mg};
  ${({$bgImage})=>
    $bgImage && `
    background-image: url(${$bgImage});
    background-position: ${({$bgPos})=> $bgPos || 'center'};
    background-size: ${({$bgSize})=> $bgSize || 'cover'};
    background-repeat: no-repeat;
    `}
  background-color: ${props=>props.$bgColor};
  border-radius: ${({$corners}) => $corners};
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
  gap: ${props=>props.$gap};
  align-items: center;
  padding: 2rem;
  background-color: ${props=>props.$bgColor}
  `

export const NavLink = styled(Link)`
    padding: 5px;
    color: ${props=>props.$color};
    text-decoration: none;
    ${({$italize}) => $italize && `font-style: italic`};
    ${({$size}) => {
        switch($size){
            case 'xsm':
                return `
                    margin: 0.6rem;
                    font-size: 0.4rem;
                `
            case 'sm': 
                return `
                    font-size: 0.8rem;
                `
            case 'md': 
            return `
                font-size: 1rem;
            `
            case 'lg': 
                return`
                    font-size: 1.5rem;
                `
            case 'xlg': 
                return`
                    font-size: 2.5rem;
                `
            case 'xxlg': 
                return`
                    font-size: 3rem;
                `
            default:
              return`
                font-size:${$size}
              `
        }
    }}

font-weight: ${({$bold, $heavy, $light}) => $bold && 600 || 
                                            $heavy && 900 || 
                                            $light && 400 };

`

export const Elink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    color: ${props=>props.$color};
    text-decoration: none;
    ${({$italize}) => $italize && `font-style: italic`};
    ${({$size}) => {
        switch($size){
            case 'xsm':
                return `
                    margin: 0.6rem;
                    font-size: 0.4rem;
                `
            case 'sm': 
                return `
                    font-size: 0.8rem;
                `
            case 'md': 
            return `
                font-size: 1rem;
            `
            case 'lg': 
                return`
                    font-size: 1.5rem;
                `
            case 'xlg': 
                return`
                    font-size: 2.5rem;
                `
            case 'xxlg': 
                return`
                    font-size: 3rem;
                `
            default:
              return`
                font-size:${$size}
              `
        }
    }}

font-weight: ${({$bold, $heavy, $light}) => $bold && 600 || 
                                            $heavy && 900 || 
                                            $light && 400 };

`
  
export const Icons = styled.span`
    font-weight: 700;
    display: ${({$grid, $flex}) => $grid && 'grid' || $flex && 'flex' || null};
    justify-content: ${({$jc})=> $jc || "center"};
    align-items: ${({$ai})=> $ai || "center"};
    gap:${({$gap})=> $gap || '10px'};
    padding: ${props=>props.$pd};
    background-color: ${({$bgColor})=>$bgColor || "transparent"};
    color: ${({$color})=>$color || "#eee"};
`

export const Button = styled.button`
  color: ${props=>props.$color};
  background-color: ${props=>props.$bgColor};
  ${({ $small, $large }) =>     $small && `padding:0.5rem;` || 
                                        $large && `width:150px; padding:0.5rem;`};
  margin:10px;
  text-align: center;
  border: none;
  border-radius: 5px;
  font-size: ${({$size}) => $size || `1rem` };
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
text-align: ${({$align}) => $align || 'left'};
background-color: ${props=>props.$bgColor};
padding: ${props=>props.$pd};
border-radius: 10px;
${({$italize}) => $italize && `font-style: italic`};
color: ${props=>props.$color};
font-weight: ${props=>props.$weight};
${({$size}) => {
        switch($size){
            case 'xsm':
                return `
                    margin: 0.6rem;
                    font-size: 0.4rem;
                `
            case 'sm': 
                return `
                    font-size: 0.8rem;
                `
            case 'md': 
            return `
                font-size: 1rem;
            `
            case 'lg': 
                return`
                    font-size: 1.5rem;
                `
            case 'xlg': 
                return`
                    font-size: 2.5rem;
                `
            case 'xxlg': 
                return`
                    font-size: 3rem;
                `
            default:
              return`
                font-size:${$size}
              `
        }
    }}
`

export const Text = styled.p`
    font-weight: ${({$weight})=>$weight || 400};
    background-color: ${({$bgColor}) => $bgColor};
    color: ${props=>props.$color || '#333' };
    width: ${props=>props.$width};
    opacity: ${props=>props.$opacity || 'none'};
    text-align: ${props => props.$align || 'left'};
    ${({$italize}) => $italize && `font-style: italic`};
    padding: ${props=>props.$pd};

    ${({$size}) => {
        switch($size){
            case 'xsm':
                return `
                    margin: 0.6rem;
                    font-size: 0.4rem;
                `
            case 'sm': 
                return `
                    font-size: 0.8rem;
                `
            case 'md': 
            return `
                font-size: 1rem;
            `
            case 'lg': 
                return`
                    font-size: 1.5rem;
                `
            case 'xlg': 
                return`
                    font-size: 2.5rem;
                `
            case 'xxlg': 
                return`
                    font-size: 3rem;
                `
            default:
              return`
                font-size:${$size}
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