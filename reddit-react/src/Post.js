import calculatePassedTime from "./calculatePassedTime";

function Post(props) {
  return (
    <div className="post">
      <p className="title"> {props.postDetails.title} <a href={props.postDetails.url} className="url">({ props.postDetails.url})</a></p>
      <p className="postInfo">submitted <span className="date">{calculatePassedTime(props.postDetails.timestamp)}</span> days ago by <span>{props.postDetails.owner}</span></p>
    </div>
  );
}

export default Post;