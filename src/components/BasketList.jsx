import { BasketItem } from "./BasketItem";

function BasketList(props) {
    const { 
        order = [], 
        handleBasketShow = Function.prototype, 
        deleteFromBasket = Function.prototype,
        increaseQuantity = Function.prototype,
        decreaseQuantity = Function.prototype,
    } = props
    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0);

    return  <ul className="collection with-header basket-list">
        <li className="collection-header"><h4>Корзина</h4></li>
        {
            order.length ? order.map(item => (
                <BasketItem 
                    key={item.id} 
                    deleteFromBasket={deleteFromBasket} 
                    increaseQuantity={increaseQuantity} 
                    decreaseQuantity={decreaseQuantity} 
                    {...item} 
                />
            )) : <li className="collection-item">Вы не добавили ни одиного товара</li>
        }
        <li className="collection-header">Общая стоимость: {totalPrice} Руб.</li>
        <i className="material-icons basket-modal-close" onClick={handleBasketShow}>close</i>
    </ul>
}

export {BasketList}; 
