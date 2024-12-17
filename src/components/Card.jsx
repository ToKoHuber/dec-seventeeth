const Card = (props) => {
  return (
    <div className="card">
      <h1>{props.title}</h1>
      <img src={props.image} alt="" />
      <p>{props.desc}</p>
      <h2>{props.date}</h2>
    </div>
  );
};

export default Card;
