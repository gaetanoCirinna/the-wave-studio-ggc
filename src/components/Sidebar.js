import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="Sidebar pt-10 pb-3 pl-4 pl-md-5 pl-lg-6 pl-xl-11">
            <div className="content">
                {/* Category */}
                <div>
                    <h4 className="section-title">CATEGORIE</h4>
                    <ul>
                        <span className="category-title">Riscaldamento</span>
                        <li>
                            <span> Casa e acqua</span>
                        </li>
                        <li>
                            <span>Casa</span>
                        </li>
                        <li>
                            <span>Acqua</span>
                        </li>
                    </ul>
                </div>
                {/* FILTER */}
                {/* Choose for */}
                <div>
                    <h4 className="section-title">Scegli per</h4>
                    <div className="select-container">
                        <div>
                            <label class="container">
                                <span className="label">Disponibili</span>
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div>
                            <label class="container">
                                <span className="label">In promozione</span>
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>
                </div>
                {/* Brands */}
                <div>
                    <h4 className="section-title">Marche</h4>
                    <div className="select-container">
                        <div>
                            <label class="container">
                                <span className="label">Ariston</span>
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div>
                            <label class="container">
                                <span className="label">Baxi</span>
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div>
                            <label class="container">
                                <span className="label">Ariston (10)</span>
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>
                </div>
                {/* Brands */}
                <div>
                    <h4 className="section-title">Topologia</h4>
                    <div className="select-container">
                        <div>
                            <label class="container">
                                <span className="label">A condensazione</span>
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div>
                            <label class="container">
                                <span className="label">Camera aperta</span>
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div>
                            <label class="container">
                                <span className="label">Camera stagna</span>
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>
                </div>
                {/* Supply */}
                <div>
                    <h4 className="section-title">Alimentazione</h4>
                    <div className="select-container">
                        <div>
                            <label class="container">
                                <span className="label">Elettrica</span>
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div>
                            <label class="container">
                                <span className="label">Metano</span>
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>
                </div>
                {/* Power */}
                <div>
                    <h4 className="section-title">Potenza Nominale (kw)</h4>
                    <div className="select-container">
                        <div>
                            <label class="container">
                                <span className="label">19.5</span>
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div>
                            <label class="container">
                                <span className="label">24</span>
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div>
                            <label class="container">
                                <span className="label">25</span>
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div>
                            <label class="container">
                                <span className="label">da 30 a 34</span>
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>
                </div>
                {/* Availment */}
                <div>
                    <h4 className="section-title">Utilizzo</h4>
                    <div className="select-container">
                        <div>
                            <label class="container">
                                <span className="label">Esterno</span>
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div>
                            <label class="container">
                                <span className="label">Interno</span>
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div>
                            <label class="container">
                                <span className="label">Interno / Iterno</span>
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>
                </div>
                {/* Review */}
                <div>
                    <h4 className="section-title">Recensioni</h4>
                    <div className="select-container">
                        <div>
                            <input type="checkbox"></input>
                            <label>Esterno</label>
                        </div>
                        <div>
                            <input type="checkbox"></input>
                            <label>Interno</label>
                        </div>
                        <div>
                            <input type="checkbox"></input>
                            <label>Interno / Iterno</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Sidebar;
