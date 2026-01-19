import Cart from './components/Cart';
import ProductCard from './components/ProductCard';
import { products } from './data/products';
import { useCart } from './hooks/useCart';
const App = () => {
  const { cart, addToCart, removeFromCart, updateQuantity, total } = useCart();
  return (
    <div className="bg-slate-800 text-white w-full h-screen flex flex-col">
      <header className="p-7 border-b-2 border-slate-500 shadow-md">
        <h2 className="font-bold text-3xl">Shopping Cart</h2>
      </header>
      <main className="flex flex-1 overflow-hidden">
        <section className="flex-1 p-6 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </section>
        <section className="w-96 bg-slate-700 overflow-y-auto">
          <Cart
            onRemove={removeFromCart}
            onUpdateQuantity={updateQuantity}
            cart={cart}
            total={total}
          />
        </section>
      </main>
    </div>
  );
};
export default App;
