
import { marked } from 'marked';
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";

import 'highlight.js/styles/github.css';

marked.use(
  markedHighlight({
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    }
  }),
  { breaks: true }
);

const Preview = ({ input }) => {
  return (
    <section className="preview-sect">
      <h2>Preview</h2>
      <div id="preview" dangerouslySetInnerHTML={{ __html: marked(input) }}></div>
    </section>
  )
}

export default Preview;