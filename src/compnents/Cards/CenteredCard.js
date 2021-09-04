import "./index.css";

const Card = ({ name, idade }) => {
  return (
    <div className="Center">
      <span>{name}</span>
      <h1>{idade}</h1>
    </div>
  );
};

export default Card;
