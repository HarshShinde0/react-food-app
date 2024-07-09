import { CurrencyFormatter } from "../Util/formatting";

export default function CartItem({
  name,
  quantity,
  price,
  onDecrease,
  onIncrease,
}) {
  return (
    <li className="cart-item">
      <p>
        {name} - {quantity} x {CurrencyFormatter.format(price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={onDecrease}>-</button>
        <span>QTY</span>
        <button onClick={onIncrease}>+</button>
      </p>
    </li>
  );
}
