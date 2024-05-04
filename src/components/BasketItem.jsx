function BasketItem(props) {
    const {
        id,
        name,
        price,
        quantity, 
        deleteFromBasket = Function.prototype,
        increaseQuantity = Function.prototype,
        decreaseQuantity = Function.prototype,
    } = props;

    return <li className="collection-item">
        <span>{name} <i class="material-icons basket-quantity" onClick={()=>increaseQuantity(id)}>add</i>x{quantity} <i class="material-icons basket-quantity" onClick={()=>decreaseQuantity(id)}>remove</i> = {price * quantity} Руб.</span> <span class="secondary-content" onClick={() => deleteFromBasket(id)}><i class="material-icons basket-delete">clear</i></span>
    </li>;
}

export {BasketItem};
