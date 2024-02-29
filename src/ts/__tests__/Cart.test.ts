import Cart from '../service/Cart';

describe('Cart', () => {
  let cart: Cart;

  beforeEach(() => {
      cart = new Cart();
  });
  test('return items', () => {
    const item = { id: 1, name: 'Test Item', price: 10 };
  
    cart.add(item);
  
    expect(cart.items).toEqual([item]);
  });
  test('add item to cart', () => {
      const item = { id: 1, name: 'Item 1', price: 10 };
      cart.add(item);

      expect(cart.items).toEqual([item]);
  });
  test('total price', () => {
      const items = [
          { id: 1, name: 'Item 1', price: 10 },
          { id: 2, name: 'Item 2', price: 20 },
          { id: 3, name: 'Item 3', price: 30 },
      ];

      items.forEach(item => cart.add(item));

      const totalPrice = cart.totalPrice();
      
      // 10 + 20 + 30
      expect(totalPrice).toBe(60);
  });
  test('testing discount', () => {
      const items = [
          { id: 1, name: 'Item 1', price: 10 },
          { id: 2, name: 'Item 2', price: 20 },
          { id: 3, name: 'Item 3', price: 30 },
      ];

      items.forEach(item => cart.add(item));

      const totalPriceWithDiscount = cart.discount(10);

      // (10 + 20 + 30) - (10% discount)
      expect(totalPriceWithDiscount).toBe(54); 
  });
  test('delete item', () => {
      const items = [
          { id: 1, name: 'Item 1', price: 10 },
          { id: 2, name: 'Item 2', price: 20 },
          { id: 3, name: 'Item 3', price: 30 },
      ]

      items.forEach(item => cart.add(item));

      cart.removeItemById(2);

      expect(cart.items).toEqual([
          { id: 1, name: 'Item 1', price: 10 },
          { id: 3, name: 'Item 3', price: 30 },
      ]);
  });
});