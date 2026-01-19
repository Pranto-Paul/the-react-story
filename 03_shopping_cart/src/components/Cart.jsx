import CartItem from './CartItem';
const Cart = ({ cart, onUpdateQuantity, onRemove, total }) => {
  if (cart.length === 0) {
    return (
      <div className="p-6 text-center text-slate-400">Your cart is empty</div>
    );
  }
  return (
    <div className="border-l border-slate-500 p-6">
      <h2 className="text-2xl font-bold mb-4">Shopping cart</h2>
      <div className="space-y-4 mb-6">
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onUpdateQuantity={onUpdateQuantity}
            onRemove={onRemove}
          />
        ))}
      </div>
      <div className="border-t border-slate-500 pt-4">
        <h3 className="text-xl font-bold mb-4">
          Total: ${typeof total === 'string' ? total : total.toFixed(2)}
        </h3>
        <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200">
          Checkout
        </button>
      </div>
    </div>
  );
};
export default Cart;
