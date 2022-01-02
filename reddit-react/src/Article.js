import Post from "./Post";
import Vote from "./Vote";

function Article(props) {
  return (
    <article>
      <Vote postDetails={props.post} />
      <Post postDetails={props.post} />
    </article>
  );
}

export default Article;