import Arrow from "./Arrow";

function Vote(props) {
  return (
    <div className="vote">
      <Arrow src={'/assets/upvote.png'} alt="upvote arrow" />
      <p className="score">{ props.score }</p>
      <Arrow src="/assets/downvote.png" alt="downvote arrow" />
    </div>
  );
}

export default Vote;