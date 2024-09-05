// eslint-disable-next-line react/prop-types
import './ui.css';
// eslint-disable-next-line react/prop-types
const BottleUi = ({ bottle, handelBottle }) => {
  //   console.log(bottle);
  // eslint-disable-next-line react/prop-types
  const { name, img, price } = bottle;
  return (
    <div className='card'>
      <p>name : {name}</p>
      <img src={img} alt='' />
      <p>price : {price}</p>

      <div>
        <button onClick={() => handelBottle(bottle)}>Add to cart</button>
      </div>
    </div>
  );
};

export default BottleUi;
