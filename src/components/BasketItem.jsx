function BasketItem(props) {
    const {
        id,
        name,
        price,
        quantity, 
        deleteFromBasket = Function.prototype,
    } = props;
    return <li className="collection-item">
        {name} x{quantity} = {price * quantity} Руб. <span class="secondary-content" onClick={() => deleteFromBasket(id)}><i class="material-icons basket-delete">clear</i></span>
    </li>;
}

export {BasketItem};
