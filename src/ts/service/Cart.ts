import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }
    totalPrice(): number {
        return this._items.reduce((total, item) => total + item.price, 0);
    }

    discount(discount: number): number {
        const totalPrice = this.totalPrice();
        return totalPrice - (totalPrice * discount) / 100;
    }

    removeItemById(id: number): void {
        this._items = this._items.filter(item => item.id !== id);
    }
}