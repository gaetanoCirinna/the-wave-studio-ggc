import React, { useState, useEffect } from "react";
import Card from "./Card";
import products from "./../mock/products.json";

const Catalog = () => {
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [productsIndex, setProductsIndex] = useState(0);

    useEffect(() => {
        if (products) {
            setSelectedProducts(shuffle(products));
        }
    }, []);
    const shuffle = (sourceArray) => {
        for (var i = 0; i < sourceArray.length - 1; i++) {
            var j = i + Math.floor(Math.random() * (sourceArray.length - i));

            var temp = sourceArray[j];
            sourceArray[j] = sourceArray[i];
            sourceArray[i] = temp;
        }
        return sourceArray;
    };

    const changeIndex = (n) => {
        if (productsIndex + n < 0) {
            return;
        }
        if (productsIndex + n >= parseInt(selectedProducts.length / 9)) {
            return;
        }

        setProductsIndex(productsIndex + n);
    };

    const getNavigation = () => {
        let arr = [];
        for (let i = 0; i < parseInt(selectedProducts.length / 9); i++) {
            arr.push(
                <span
                    onClick={() => setProductsIndex(i)}
                    className={i === productsIndex ? "active" : ""}
                >
                    {i + 1}
                </span>,
            );
        }
        return arr;
    };

    return (
        <div className="Catalog pt-10 pr-11 pl-4">
            <div className="order-control ">
                Ordina per: migliori recensioni{" "}
                <span style={{ transform: "rotate(180deg)" }}>&#8250;</span>
            </div>

            <div className="container">
                <div className="row">
                    {products &&
                        selectedProducts.map((card, index) => {
                            if (
                                index > productsIndex * 9 &&
                                index <= productsIndex * 9 + 9
                            ) {
                                return (
                                    <div className="col-4">
                                        <Card
                                            key={index}
                                            {...card}
                                            index={index}
                                        ></Card>
                                    </div>
                                );
                            }
                        })}
                </div>
            </div>

            {/* Navigation */}
            <div className="navigation pr-11 pl-4">
                <div className="navigation__container">
                    <button
                        onClick={() => changeIndex(-1)}
                        className="prevButton"
                    >
                        &#60; Prev
                    </button>

                    <div className="numberBox">{getNavigation()}</div>

                    <button
                        onClick={() => changeIndex(1)}
                        className="nextButton"
                    >
                        Next &#62;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Catalog;
