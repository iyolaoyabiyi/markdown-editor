# Markdown Editor with Syntax Highlighting

This project is part of my FreeCodeCamp Frontend Development Libraries certification. It is a **Markdown Editor** that allows users to write and preview Markdown content with **syntax highlighting** for code blocks. It uses the `marked` package to parse Markdown and `highlight.js` for syntax highlighting.

## Features

- **Live Preview**: Preview Markdown content as you type.
- **Syntax Highlighting**: Highlights code blocks using `highlight.js`.
- **Supports Markdown Syntax**: Supports various Markdown elements such as headers, lists, inline code, code blocks, links, and images.

## Technologies Used

- **React**: For building the user interface.
- **marked**: A Markdown parser and compiler.
- **highlight.js**: A library for syntax highlighting code blocks.
- **marked-highlight**: A plugin for integrating `highlight.js` with `marked`.

## How to Run the Project

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/markdown-editor.git
   ```

2. Navigate to the project directory:

   ```bash
   cd markdown-editor
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

   The app should now be running on [http://localhost:3000](http://localhost:3000).

## Project Structure

```
/src
  /components
    Header.js      # Renders the header
    Editor.js      # Contains the Markdown editor input area
    Preview.js     # Displays the live Markdown preview with syntax highlighting
  /css
    styles.scss       # Basic styling for the app
  App.js           # Main React component that integrates all parts
  index.js         # Entry point for the React app
```

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT).