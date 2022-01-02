function NewPost() {
  return (
    <div>
      <header>
        <h1>SPACE</h1>
        <h2>POST TO /R/SPACE</h2>
      </header>
      <form>
        <label for="content"><span className="asterisk">*</span>title</label>
        <textarea name="content" id="content" cols="30" rows="3" autofocus required></textarea>
        <label for="url">URL</label>
        <input type="url" name="url" id="url" required />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default NewPost;