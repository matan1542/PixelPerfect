export function CardPreview({ card }) {
  console.log(card);
  return (
    <div className="card-preview">
      <img className="mark" src="imgs/sign.png" alt="img" />

      <p>{card.description}</p>
      <h3>{card.name}</h3>
      <h6>{card.job}</h6>
      <div className="card-img">
        <img src={card.src} alt="img" />
      </div>
    </div>
  );
}
