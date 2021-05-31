# Frontend Mentor - Article preview component challenge - solution by Pau Ferrer

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![./design/screenshot.png](./design/screenshot.png)

### Links

- Solution URL: [GitHub](https://github.com/PaulOCastle/CHL004_ARTICLE_PREVIEW_COMPONENT_MASTER)
- Live Site URL: [Vercel](https://chl-004-article-preview-component-master-solution.vercel.app)

## My process

### Built with

- Semantic HTML5 markup
- SCSS functions & mixins
- Flexbox
- Transitions
- Mobile-first workflow
- JavaScript for functionality

### What I learned

Doing this project I learned how to use transitions for a hidden container and make it appear and disappear by clicking on the designated button.

I also practiced my SCSS skills and file logic, to have a well organized project structure, logic and clean.

#### SCSS

I like this code because this are some of my first functions in SCSS and I enjoyed creating and using them. Functions can safe you so much time!!!

```scss
/* MATH FUNCTIONS */

// Changes px to em
@function toEm($px) {
  @return ($px/16) + em;
}

// Changes px to rem
@function toRem($px) {
  @return ($px/16) + rem;
}

/* COLORS MANAGEMENT */

// Returning the color from map
@function color($key: "blue") {
  @return map-get($colors, $key);
}

// Returning the theme-color from map
@function theme-color($key: "primary") {
  @return map-get($theme-colors, $key);
}

/* FONT MANAGEMENT */

// Font size calculation
@function font-size($key: "sm") {
  @if type-of($key) == string {
    @return map-get($font-sizes, $key);
  } @else if(type-of($key) == number) {
    @return toRem($key);
  } @else {
    @return null;
  }
}

// Font weight calculation
@function font-weight($key: "regular") {
  @if type-of($key) == string {
    @return map-get($font-weights, $key);
  } @else if(type-of($key) == number and ($key % 100) == 0) {
    @return $key;
  } @else {
    @return null;
  }
}

/* MARGIN & PADDING MANAGEMENT */

@function space($top: 0, $right: 0, $bottom: 0, $left: 0) {
  @return toRem($top) toRem($right) toRem($bottom) toRem($left);
}
```
#### JavaScript

I love this very short code in JS as I think I kept it short and to the point!!

```js
const sharingBtns = document.querySelectorAll('.sharing-btn')
const actions = document.querySelector('#sharing')

sharingBtns.forEach(function (btn) {
    btn.addEventListener('click', function() {
        actions.classList.toggle('closed')
        this.classList.toggle('active')
    })
})
```
### Continued development

I would like to explore more about HTML semantics and SCSS development. I also have been growing an interest on React.js and Next.js, so one day I will be developing some of the challenges using this frameworks.

## Author

- Frontend Mentor - [@PaulOCastle](https://www.frontendmentor.io/profile/PaulOCastle)
