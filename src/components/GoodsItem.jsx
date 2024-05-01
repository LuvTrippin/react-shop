function GoodsItem(props) {
    const {
        id, 
        name,
        description,
        price,
        full_background,
        addToBasket = Function.prototype,
    } = props;

    const handleImageError = (event) => {
        event.target.src = `https://placehold.co/257x257?text=${name}\\nцена: ${price} Руб.`;
    };

    const handleClick = () => {
        addToBasket({id, name, price});
    }

    return (
    <div className="card">
        <div className="card-image">
          <img src={full_background} alt={name} onError={handleImageError} />
          <button className="btn-floating halfway-fab waves-effect waves-light purple lighten-4" onClick={handleClick}><i className="material-icons">add</i></button>
        </div>
        <div className="card-content">
          <p>{description ? description : name}</p>
          <p><b>Цена:</b> <span className="right"><b>{price} Руб.</b></span></p>
        </div>
    </div>
    )
}

export {GoodsItem};
