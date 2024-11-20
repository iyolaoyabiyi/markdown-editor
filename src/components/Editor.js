const Editor = ({ input, handleInput }) => {
  return (
    <section className="editor-sect">
      <h2>Editor</h2>
      <textarea id="editor" onChange={ handleInput } value={ input }></textarea>
    </section>
  )
}

export default Editor;