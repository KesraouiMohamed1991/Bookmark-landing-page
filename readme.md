

# Bookmark Landing Page JavaScript Code

This JavaScript code is designed for the Bookmark Landing Page. It adds interactivity and functionality to the web page. The code is meant to be used in conjunction with the HTML and CSS files that make up the Bookmark Landing Page.

## Table of Contents
- [Usage](#usage)
- [Event Listeners](#event-listeners)
- [Functions](#functions)
- [Email Verification](#email-verification)
- [Intersection Observer](#intersection-observer)

## Usage

To use this JavaScript code, follow these steps:

1. Ensure you have the necessary HTML and CSS files in place for the Bookmark Landing Page.
2. Include this JavaScript code in your HTML file using a `<script>` tag or by linking to an external JavaScript file.
3. Ensure that the required HTML elements, such as buttons and containers, have the correct IDs and classes as referenced in the code.

## Event Listeners

### SVG Arrow Click Event Listener
The code adds click event listeners to SVG arrows, which are used to toggle the display of menu items and rotate the arrows accordingly.

### List Item Click Event Listener
Clicking on list items triggers the displayContent function, which updates the page's header, content, and image based on the clicked item's data attributes.

### Hamburger Menu Icon Click Event Listener
Clicking the hamburger menu icon toggles the visibility of a list.

## Functions

### addRedLine
This function toggles a CSS class called `before:w-full` on an element to add or remove a red line.

### displayContent
This function updates the page's content based on the data attribute of the clicked list item.

## Email Verification

The code includes an email verification function that checks if the entered email address is in a valid format when a button is clicked. If the email is not valid, it prevents form submission and displays an alert.

## Intersection Observer

An Intersection Observer is used to detect when certain elements with the class `section` become visible on the screen. When an element is 30% visible in the viewport, it is marked as "visible," allowing for animations or other effects.

