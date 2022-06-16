import './CostItem.css';
import CostDate from './CostDate';

function CostItem(props) {
  return (
    <div>
      <div className='cost-item'>
        <CostDate date={props.date} />
        <div className='cost-item__description'>
          <h2>{props.description}</h2>
          <div className='cost-item__price'>$ {props.amount}</div>
        </div>
      </div>
    </div>
  );
}

export default CostItem;














// import './CostItem.css'

// function CostItem(props) {

//   return (
//     <div className="cost-item">
//       <div>{props.date.toString()}</div>
//       <div className="cost-item__description">
//         <h2>{props.description}</h2>
//         <div className="cost-item__price">$ {props.amount}</div>
//       </div>

//     </div>

//   );
// }

// export default CostItem;