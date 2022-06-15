import './CostItem.css'

function CostItem() {
  const costDate = new Date(2022, 6, 6);
  const costDescription = 'Холодильник';
  const costAmount = 1000;
  return (
    <div className="cost-item">
      <div>{costDate.toString()}</div>
      <div className="cost-item__description">
        <h2>{costDescription}</h2>
        <div className="cost-item__price">$ {costAmount}</div>
      </div>

    </div>

  );
}

export default CostItem;