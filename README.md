# Styled Dropdown

Styled Dropdown is a user-friendly, pre-styled dropdown component for your web applications. It injects styles directly into the DOM, eliminating the need to import any separate CSS files.

## Features

- Easy to install and use.
- Pre-styled, no need to import styles separately.
- Pure JavaScript, no dependencies.

## Installation

Install `styled-dropdown` via npm:

```bash
npm install styled-dropdown
```

## Usage

To use the styled-dropdown component in your project, follow the example below:

- add div with dropdown id to your html page

```html
<div id="dropdown"></div>
```

- import styledDropdown into your Javascript code

```js
import styledDropdown from 'styledDropdown';
```

- and the code below

```js
createStyledDropdown("dropdown", [
	{ href: "#", label: "Link 1" },
	{ href: "#", label: "Link 2" },
	{ href: "#", label: "Link 3" },
]);
```

In this example:

- 'dropdown' is the id of the HTML element where the dropdown menu will be rendered.

- The array provides the options for the dropdown menu. Each option is an object with two properties: href and label. href is the link to be used when this option is selected. label is the text to be displayed for this option in the dropdown menu.
