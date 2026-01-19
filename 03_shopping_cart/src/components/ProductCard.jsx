import { FaShoppingCart } from 'react-icons/fa';
const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-slate-700 rounded-lg p-4 hover:bg-slate-600 transition duration-200">
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-slate-300 mb-4 font-bold">${product.price}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition duration-200"
      >
        <FaShoppingCart /> Add to cart
      </button>
    </div>
  );
};
export default ProductCard;
