function Arrow(props) {
  return (
    <img src={props.src} alt={props.alt} onClick={props.onclick} />
  );
}

export default Arrow;