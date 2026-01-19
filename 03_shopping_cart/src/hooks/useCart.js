import { useEffect, useState } from 'react';

export function useCart() {
  const [cart, setCart] = useState(() => {
    try {
      const saved_cart = localStorage.getItem('cart');
      return saved_cart ? JSON.parse(saved_cart) : [];
    } catch (error) {
      console.error('failed to load cart fro localestorage', error);
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
      console.error('failed to load cart to localestorage', error);
    }
  }, [cart]);

  //sync accross tabs
  useEffect(() => {
    const handleStorage = (e) => {
      if (e.key === 'cart') {
        try {
          const newCart = JSON.parse(e.newValue || '[]');
          setCart(newCart);
        } catch (error) {
          console.error('failed to parse cart from localestorage', error);
        }
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);
}
