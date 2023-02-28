import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
  --max-width: 50em;
  --border-radius: 0.8em;
  --space-small: 0.8em;
  --space-mid: 1.2em;
  --space-large: 2em;
  --space-lg-extra: 7em;
  --fs-small: clamp(0.8rem, 4vw, 1em);
  --fs-mid: clamp(1em, 4vw, 1.5em);
  --fs-large: clamp(1.5em, 4vw, 2.5rem);
  --gap: 2em;
  --foreground-rgb: 0, 0, 0;
  --background-start-rgb: 214, 219, 220;
  --background-end-rgb: 255, 255, 255;
 }

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
}

body {
  line-height: 1.5;
}

a {
  color: inherit;
  text-decoration: none;
}

h1,
h2,
h3, 
h4,
h5, {
	line-height: 1;
}

.pd-block-small {
  padding-top: var(--space-small);
  padding-bottom: var(--space-small);
}

.pd-inline-small {
  padding-left: var(--space-small);
  padding-right: var(--space-small);
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
.mg-top-extra {margin-top: var(--space-extra);}

.mg-bottom-small {margin-bottom: var(--space-small);}
.mg-bottom-mid {margin-bottom: var(--space-mid);}
.mg-bottom-large {margin-bottom: var(--space-large);}

.flex{
	display: flex;
	-webkit-gap: var(--gap, 1em);
	-o-gap: var(--gap, 1em);
	gap: var(--gap, 1em);
}

.grow {
	flex-grow: 1;
}

.align-center {
	align-items: center;
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

@media (prefers-color-scheme: dark) {
  html {
    color-scheme: dark;
  }
}
`;

export default GlobalStyle;
