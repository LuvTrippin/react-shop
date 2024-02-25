function GoodsItem(props) {
    const {
        id, 
        name,
        description,
        price,
        full_background,
    } = props;

    const handleImageError = (event) => {
        event.target.src = `https://placehold.co/257x257?text=${name}\\n${price}`;
    };

    return (
    <div className="card" id={id}>
        <div className="card-image">
          <img src={full_background} alt={name} onError={handleImageError} />
          <button className="btn-floating halfway-fab waves-effect waves-light purple lighten-4"><i className="material-icons">add</i></button>
        </div>
        <div className="card-content">
          <p>{description ? description : name}</p>
        </div>
    </div>
    )
}

export {GoodsItem};
