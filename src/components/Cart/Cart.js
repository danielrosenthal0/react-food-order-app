import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const Card = (props) => {
    const cartitems = (
      <ul className={classes["cart-items"]}>
        {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    );
    
    return (
        <Modal>
            {cartitems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.35</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["buttons--alt"]}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Card;