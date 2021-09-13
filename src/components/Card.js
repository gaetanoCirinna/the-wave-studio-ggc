import React from "react";
import cardImg from "./../assets/boiler.png";

const Card = (props) => {
    const { name, description, discountPrice, realPrice, info, review, promo } =
        props;
    return (
        <div className="card p-4">
            <div className="card__img-container">
                {promo && <span className="promo">Risparmi il 20%</span>}
                <span className="card__icon">
                    <button></button>
                </span>

                <img className="img" src={cardImg} />
            </div>
            <div className="card__text">
                {name && <span className="title">Ariston</span>}
                {description && <p className="description">Description</p>}

                {discountPrice && (
                    <div className="price-discount">
                        <div>
                            <span>{discountPrice}</span>
                            <strike>{realPrice}</strike>
                        </div>
                        <span className="info">{info}</span>
                    </div>
                )}
                {realPrice && !discountPrice && (
                    <div className="price-real">
                        <span>{realPrice}</span>
                        <span className="info">{info}</span>
                    </div>
                )}

                <div className="review">review</div>
            </div>
        </div>
    );
};

export default Card;
