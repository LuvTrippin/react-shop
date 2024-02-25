function GoodsItem(props) {
    const {
        id, 
        name,
        description,
        price,
        full_background,
    } = props;

    return (
    <div className="card" id={id}>
        <div className="card-image">
          <img src={full_background ? full_background : `https://placehold.co/257.5x257.5?text=${name}\n${price}`} alt={name} />
          
          <button className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></button>
        </div>
        <div className="card-content">
          <p>{description}</p>
        </div>
    </div>
    )
}

export {GoodsItem};
