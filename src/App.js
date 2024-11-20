import { useState } from "react";

import Header from "./components/Header";
import Editor from "./components/Editor";
import Preview from "./components/Preview";

function App() {
  const [input, setInput] = useState(`# Hello World
## This is a  a sub-heading
Plain text is nice and all but I prefer a **bold** *italic* or **_combined_** .

I can also make a list
- one item
- two items
- 3 items

Let's not forget inline code like \`x = 3 + 1\` or multi-line code like,
\`\`\`javascript
let x = 1;
let y = 3;

let z = x + y;

console.log(z) //Outputs 4
\`\`\`

I can also add links like [click here](https://iyoandyeni.com) or add images,

![Alt text](https://img.shields.io/badge/License-MIT-yellow.svg)
> "Every adult is responsible for themselves, regardless of the situation, who is at fault, or whether it’s fair."
- Iyola Oyabiyi`);

  const handleInput = e => {
    setInput(e.target.value);
  }

  return (
    <>
      <Header />
      <div className="workspace">
        <Editor input={ input } handleInput={ handleInput } />
        <Preview input={ input } />
      </div>
    </>
  );
}

export default App;
