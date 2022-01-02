import { useState } from "react";
import Arrow from "./Arrow";

function Vote(props) {
  const [score, setScore] = useState(props.postDetails.score);
  const [upvoteImg, setUpvoteImg] = useState('/assets/upvote.png');
  const [downvoteImg, setDownvoteImg] = useState('/assets/downvote.png');

  function handleUpVote() {
    fetch(`http://localhost:8080/posts/${props.postDetails.id}/upvote`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(data => {
      setScore(data.score);
      setUpvoteImg('/assets/upvoted.png')
    })
  }

  function handleDownVote() {
    fetch(`http://localhost:8080/posts/${props.postDetails.id}/downvote`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(data => {
      setScore(data.score);
      setDownvoteImg('/assets/downvoted.png')
    })
  }

  return (
    <div className="vote">
      <Arrow src={ upvoteImg } alt="upvote arrow" onclick={handleUpVote} />
      <p className="score">{ score }</p>
      <Arrow src={ downvoteImg } alt="downvote arrow" onclick={handleDownVote} />
    </div>
  );
}

export default Vote;