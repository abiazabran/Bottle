/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import './parent.css';

const Cart = ({ carts, handelRemoveBtn }) => {
  return (
    <div>
      <p>cart item</p>
      <hr />
      <p>added : {carts.length} </p>
      {carts.map((cart) => (
        <div key={cart.id} className='ccimg ccrcon'>
          <img src={cart.img} alt='' />
          <button onClick={() => handelRemoveBtn(cart.id)}>remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
