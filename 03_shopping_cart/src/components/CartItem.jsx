import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';
const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="flex items-center justify-between bg-slate-700 p-4 rounded-lg">
      <div className="flex-1">
        <h4 className="font-semibold text-lg mb-1">{item.name}</h4>
        <p className="text-slate-300 mb-3">${item.price}</p>
        <div className="flex items-center gap-3">
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            className="bg-slate-600 hover:bg-slate-500 text-white p-2 rounded transition duration-200"
          >
            <FaMinus />
          </button>
          <span className="font-semibold px-4">{item.quantity}</span>
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="bg-slate-600 hover:bg-slate-500 text-white p-2 rounded transition duration-200"
          >
            <FaPlus />
          </button>
        </div>
      </div>
      <button
        onClick={() => onRemove(item.id)}
        className="bg-red-600 hover:bg-red-700 text-white p-2 rounded transition duration-200 ml-4"
      >
        <FaTrash />
      </button>
    </div>
  );
};
export default CartItem;
