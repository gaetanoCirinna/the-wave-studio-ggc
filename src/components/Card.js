import React, { useState, useEffect } from "react";
import cardImg from "./../assets/boiler.png";

import { window } from "browser-monads";

import star from "./../assets/icons/star.svg";
import starWhite from "./../assets/icons/star_white.svg";

const Card = (props) => {
    const {
        name,
        description,
        discountPrice,
        realPrice,
        info,
        review,
        promo,
        index,
    } = props;
    const [saveProduct, setSaveProduct] = useState();

    useEffect(() => {
        let saveProductsStorage = JSON.parse(
            localStorage.getItem("saveProductsStorage") || "[]",
        );
        saveProductsStorage.forEach((prod) => {
            if (prod.index === index) {
                setSaveProduct(index);
            }
        });
    }, [saveProduct]);

    const saveProductStorage = () => {
        let saveProductsStorage = JSON.parse(
            localStorage.getItem("saveProductsStorage") || "[]",
        );
        saveProductsStorage.push(props);
        window.localStorage.removeItem("saveProductsStorage");

        window.localStorage.setItem(
            "saveProductsStorage",
            JSON.stringify(saveProductsStorage),
        );
        console.log(
            "saveProductsStorage add",
            JSON.parse(localStorage.getItem("saveProductsStorage") || "[]"),
        );
    };

    const removeProductStorage = () => {
        let saveProductsStorage = JSON.parse(
            localStorage.getItem("saveProductsStorage") || "[]",
        );
        const filter = saveProductsStorage.filter((filter) => {
            if (filter.index !== index) {
                return filter;
            }
        });

        window.localStorage.setItem(
            "saveProductsStorage",
            JSON.stringify(filter),
        );

        console.log("saveProductsStorage remove", filter);
    };

    const getReview = () => {
        let arr = [];
        for (let i = 0; i < 5; i++) {
            if (i < review) {
                arr.push(<img src={starWhite}></img>);
            } else {
                arr.push(<img src={star}></img>);
            }
        }
        return arr;
    };

    return (
        <div className="card p-4">
            <div className="card__img-container">
                {promo && <span className="promo">Risparmi il 20%</span>}

                <div className="card__icon">
                    <span
                        onClick={() => {
                            setSaveProduct(saveProduct ? null : index);
                            if (saveProduct) {
                                removeProductStorage();
                            } else {
                                saveProductStorage();
                            }
                        }}
                        className={`heart ${
                            saveProduct === index ? "heart-active" : ""
                        }`}
                    ></span>
                </div>

                <img className="img" src={cardImg} />
            </div>
            <div className="card__text">
                {name && <span className="title">Ariston</span>}
                {description && <p className="description">Description</p>}

                {index}
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
            </div>

            <div className="card__bottom pt-2">
                <div className="review">{getReview()}</div>
                <div className="select-container">
                    <label class="container">
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                        <span className="label">In promozione</span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Card;
