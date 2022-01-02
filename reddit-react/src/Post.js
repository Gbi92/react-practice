function Post(props) {
  return (
    <div className="post">
      <p className="title"> {props.title} <a href={props.url} classNamr="url">({ props.url})</a></p>
      <p className="postInfo">submitted on <span className="date">date</span> by <span>{props.owner}</span></p>
    </div>
  );
}

export default Post;