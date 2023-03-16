"use client";
import { createGlobalStyle } from "styled-components";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const GlobalStyle = createGlobalStyle`
  :root {
  --max-width: 50em;
  --break-point: 60em;
  --border-radius: 0.6em;
  --space-small: 0.8em;
  --space-mid: 1.2em;
  --space-large: 2em;
  --space-lg-extra: 6em;
  --space-btn: 3em;
  --fs-small: clamp(0.85rem, 2.5vw, 1em);
  --fs-mid: clamp(1.35em, 3vw, 1.4em);
  --fs-large: clamp(1.5em, 4vw, 2.5rem);
  --fs-btn: clamp(0.8rem, 4vw, 1rem);
  --fw-semi-bold: 600;
  --fw-bold: 800;
  --fw-extra-bold: 900;
  --gap: 2em;
  --foreground-rgb: 0, 0, 0;
  --background-start-rgb: 214, 219, 220;
  --background-end-rgb: 255, 255, 255;
  --clr-primary-blue: 39, 91, 194;
  --clr-primary-blue--dark: 0, 107, 197;
  --clr-accent-blue: 168, 196, 248;
  --clr-primary-red: 253, 138, 138;
  --clr-primary-green: 89, 193, 189;
  --clr-primary-gray: 243, 243, 243;
  --clr-accent-gray: 219, 215, 215;
  --clr-primary-black: 0, 0, 0;
  --clr-primary-white: 255, 255, 255;
  --clr-primary-error: 255, 2, 2;
  --text-color: 0, 0, 0;
 }

 @media (prefers-color-scheme: dark) {
  html {
    color-scheme: dark;
  }

  :root {
    --clr-primary-gray: 64, 64, 66;
    --clr-accent-gray: 62, 64, 69;
    --text-color: 255, 255, 255;
  }
}


@media screen and (min-width: 60em){
  :root {
    --gap: 1.5em;
 
  }
}


* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
}

body {
  line-height: 1.5;
  font-family: sans-serif; 
  font-size: var(--fs-small);
  color: rgb(var(--text-color));
}

a {
  color: blue;
  text-decoration: none;
}

.icon {
  color: rgba(var(--clr-primary-black), 0.5)
}

h1,
h2,
h3, 
h4,
h5, {
	line-height: 1.5;
}

.pd-block-small {
  padding-top: var(--space-small);
  padding-bottom: var(--space-small);
}

.pd-block-mid{
  padding-top: var(--space-mid);
  padding-bottom: var(--space-mid);
}

.pd-inline-small {
  padding-left: var(--space-small);
  padding-right: var(--space-small);
}

.pd-inline-mid {
  padding-left: var(--space-mid);
  padding-right: var(--space-mid);
}

.pd-left-small {padding-left: var(--space-small)}
.pd-left-mid {padding-left: var(--space-mid) }
.pd-left-large {padding-left: var(--space-large)}

.pd-right-small {padding-right: var(--space-small);}
.pd-right-mid {padding-right: var(--space-mid);}
.pd-right-large {padding-right: var(--space-large);}

.pd-top-small {padding-top: var(--space-small);}
.pd-top-mid {padding-top: var(--space-mid);}
.pd-top-large {padding-top: var(--space-large);}

.pd-bottom-small {padding-bottom: var(--space-small);}
.pd-bottom-mid {padding-bottom: var(--space-mid);}
.pd-bottom-large {padding-bottom: var(--space-large);}


.mg-left-small {margin-left: var(--space-small)}
.mg-left-mid {margin-left: var(--space-mid) }
.mg-left-large {margin-left: var(--space-large)}

.mg-right-small {margin-right: var(--space-small);}
.mg-right-mid {margin-right: var(--space-mid);}
.mg-right-large {margin-right: var(--space-large);}

.mg-top-small {margin-top: var(--space-small);}
.mg-top-mid {margin-top: var(--space-mid);}
.mg-top-large {margin-top: var(--space-large);}
.mg-top-extra {margin-top: var(--space-lg-extra);}

.mg-bottom-small {margin-bottom: var(--space-small);}
.mg-bottom-mid {margin-bottom: var(--space-mid);}
.mg-bottom-large {margin-bottom: var(--space-large);}

.mg-auto {
  margin: auto;
}

.clr-primary-blue {color: rgb(var(--clr-primary-blue))}
.clr-primary-red {color: rgb(var(--clr-primary-red))}
.clr-primary-gray {color: rgb(var(--clr-primary-gray))}
.clr-primary-green {color: rgb(var(--clr-primary-green))}

.bg-primary-blue {background: rgb(var(--clr-primary-blue))}
.bg-primary-red{background: rgb(var(--clr-primary-red))}
.bg-primary-gray {background: rgb(var(--clr-primary-gray))}
.bg-primary-green {background: rgb(var(--clr-primary-green))}
.bg-primary-white{background: rgb(var(--clr-primary-white))}

.bg-accent-blue {
  background-color: var(--clr-accent-blue);
}

.bg-primary-blue--dark {
  background-color: var(--clr-primary-blue--dark);
}

.bg-primary-blue--light {
  background-color: rgb(var(--clr-accent-blue))
}

.fs-small {
  font-size: var(--fs-small);
}
.fs-mid {
  font-size: var(--fs-mid);
}

.fw-semi-bold {
  font-size: var(--fw-semi-bold);
}

.fw-bold {
  font-size: var(--fw-bold);
}

.fw-extra-bold {
  font-size: var(--fw-extra-bold);
}

.flex{
	display: flex;
	-o-gap: var(--gap, 1em);
	gap: var(--gap, 1em);
}

.grow {
	flex-grow: 1;
}

.align-center {
	align-items: center;
}

.align-end {
  align-items: flex-end;
}

.justify-center {
	justify-content: center;
}

.justify-space-between {
	justify-content: space-between;
}

.justify-end {
	justify-content: flex-end;
}

.flex-direction-column {
	flex-direction: column;
}

.gap--small {
  gap: 0.8em;
}

.display-inline-block {
	display: inline-block;
}

.cursor-pointer {
	cursor: pointer;
}

.position-absolute {
	position: absolute;
}

.position-relative {
	position: relative;
	
}

.z-index-mid {
	z-index: 10;
}

.z-index-small {
	z-index: -10;
}

.z-index-large {
	z-index: 20;
}

.text-center {
  text-align: center;
}

.text-light {
  color: rgba(var(--text-color), 0.5);
}

.text-light-blue {
  color: rgb(var(--clr-accent-blue));
}

.uppercase {
  text-transform: uppercase;
}

.capitalize: {
  text-transform: capitalize;
}

.border-all {
	border: 1px solid var(--bd-color, black);
}

.border-blue {
  --bd-color: rgb(var(--clr-primary-blue));
  border: 1px solid var(--bd-color, black);
}

.border-rounded {
  border-radius: var(--border-radius);
}

.border-circular {
  border-radius: 50%;
}

.line-height-none {
	line-height: 0;
}


.error {
  font-size: 0.9rem;
  color: rgba(var(--clr-primary-error), 0.8);
}

.alert {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  min-width: 100px;
  margin: auto;
 
}

.box-shadow {
  box-shadow: 0 0 8px 4px rgba(var(--clr-primary-gray));
}

.max-width--80em {
  max-width: 80em;:w

}

.icon {
  font-size: 1.2em;
  color: inherit;
  cursor: pointer;
}

.underline {
  text-decoration: underline;
}


@media (prefers-color-scheme: dark) {
  html {
    color-scheme: dark;
  }
}

`;



export default GlobalStyle;
