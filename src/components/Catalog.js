import React from "react";
import Card from "./Card";
import products from "./../mock/products.json";

const Catalog = () => {
    return (
        <div className="Catalog pt-10 pr-11 pl-4">
            <div className="contaier">
                <div className="row">
                    {products &&
                        products.map((card, index) => {
                            return (
                                <div className="col-4">
                                    <Card key={index} {...card}></Card>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default Catalog;
