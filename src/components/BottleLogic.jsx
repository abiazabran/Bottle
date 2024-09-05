import { useEffect, useState } from 'react';
import BottleUi from './BottleUi';
import './parent.css';
import Cart from './Cart';
import { addToLocalStorageProduct, getStordProduct, removeLocalStr } from '../utilities/localStorage';

const BottleLogic = () => {
  const [bottles, setBottles] = useState([]);
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetch('bottle.json')
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  useEffect(() => {
    console.log('2nd useEffect ', bottles.length);
    if (bottles.length > 0) {
      const stordCard = getStordProduct();
      const savedCart = [];
      for (const id of stordCard) {
        const matchBottleId = bottles.find((botol) => botol.id === id);
        if (matchBottleId) {
          savedCart.push(matchBottleId);
        }
      }

      setCarts(savedCart);
    }
  }, [bottles]);

  const handelBottle = (bottle) => {
    console.log(bottle);
    const addCart = [...carts, bottle];
    setCarts(addCart);
    addToLocalStorageProduct(bottle.id);
  };
  const handelRemoveBtn = (id) => {
    const removeUiCart = carts.filter((botol) => botol.id !== id);
    setCarts(removeUiCart);
    removeLocalStr(id);
  };

  return (
    <div>
      <p>bottle quantity : {bottles.length}</p>
      <div className='container'>
        {' '}
        <div className='bottle-container'>
          {bottles.map((bottle) => (
            <BottleUi bottle={bottle} key={bottle.id} handelBottle={handelBottle} />
          ))}
        </div>
        <div className='cart-container'>
          <Cart carts={carts} handelRemoveBtn={handelRemoveBtn} />
        </div>
      </div>
    </div>
  );
};

export default BottleLogic;
