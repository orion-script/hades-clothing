import { CartItemContainer, ItemsDetails } from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemsDetails>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} × ${price}
        </span>
      </ItemsDetails>
    </CartItemContainer>
  );
};

export default CartItem;
