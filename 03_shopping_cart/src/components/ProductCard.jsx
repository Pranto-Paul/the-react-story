import { FaShoppingCart } from 'react-icons/fa';
const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => onAddToCart(product)}>
        <FaShoppingCart /> Add to cart
      </button>
    </div>
  );
};
export default ProductCard;
