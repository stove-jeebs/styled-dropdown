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
new StyledDropdown('dropdown', [{ value: 1, label: 'Option 1' }, { value: 2, label: 'Option 2' }]);
```

In this example:

- 'dropdown' is the id of the HTML element where the dropdown menu will be rendered.

- The array provides the options for the dropdown menu. Each option is an object with two properties: value and label. value is the value to be used when this option is selected. label is the text to be displayed for this option in the dropdown menu.

## Building the project

You can bundle the project using Vite by running `npm run build`

or build the project using vite's development server with `npm run dev`
