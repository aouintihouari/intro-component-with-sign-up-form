# Intro Component with Sign-up Form

This project is a solution to the ["Intro Component with Sign-up Form"](https://www.frontendmentor.io) challenge on Frontend Mentor. The goal of this challenge is to build a responsive sign-up form with client-side validation using HTML, CSS, and JavaScript.

## Table of Contents

- [Overview](#overview)
- [Screenshot](#screenshot)
- [Links](#links)
- [Built With](#built-with)
- [Features](#features)
- [What I Learned](#what-i-learned)
- [Continued Development](#continued-development)
- [Author](#author)

---

## Overview

### The Challenge

Users should be able to:

- View the optimal layout depending on their device's screen size.
- See hover states for interactive elements.
- Receive form validation feedback when trying to submit the form:
  - An error message for empty or invalid fields.
  - Inline validation messages with error icons.

---

## Screenshot

### Desktop View

![Desktop Screenshot](./images/screenshot-desktop.png)

### Mobile View

![Mobile Screenshot](./images/screenshot-mobile.png)

---

## Links

- [Solution URL](https://github.com/aouintihouari/intro-component-with-sign-up-form)
- [Live Site URL](https://aouintihouari.github.io/intro-component-with-sign-up-form/)

---

## Built With

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Responsive design using media queries
- Vanilla JavaScript for form validation

---

## Features

### Responsive Design

- The layout adjusts seamlessly to various screen sizes, ensuring a great user experience on both desktop and mobile devices.

### Form Validation

- Inline error messages with icons guide users to correct any invalid or missing input.
- A regular expression is used to validate email addresses.

---

## What I Learned

While working on this challenge, I improved my understanding of:

- Responsive design with `@media` queries.
- Handling client-side form validation in JavaScript.
- Using CSS to style error states dynamically.

Here’s an example of JavaScript used for form validation:

```javascript
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
```
