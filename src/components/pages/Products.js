import { useState, useEffect } from "react";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(function () {
        async function getProducts() {
            const response = await fetch("https://dummyjson.com/products");
            const data = await response.json();

            setProducts(data.products);
        }

        getProducts();
    }, []);

    return (
        <>
            <div className="products__container">
                {products.map((item) => {
                    return (
                        <div className="products__container--card" key={item.id}>
                            <img src={item.thumbnail} alt={item.title} />

                            <div className="products__container--card--content">
                                <h2>{item.title}</h2>

                                <div className="products__container--card--content--info">
                                    <div className="products__container--card--content--info--pd">
                                        <div className="products__container--card--content--info--pd--price">
                                            <strong>Price:</strong> <span className="price">{item.price}$</span>
                                        </div>
                                        <div className="products__container--card--content--info--pd--stock">
                                            <strong>Dicount:</strong>{" "}
                                            <span className="hightLight">{item.discountPercentage}%</span>
                                        </div>
                                    </div>

                                    <div className="products__container--card--content--info--rs">
                                        <div className="products__container--card--content--info--rs--rating">
                                            <strong>Rating:</strong> <span className="hightLight">{item.rating}</span>
                                        </div>

                                        <div className="products__container--card--content--info--rs--stock">
                                            <strong>Stock:</strong> <span className="hightLight">{item.stock}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="products__container--card--content--buttons">
                                    <button className="products__container--card--content--buttons--cart">add to cart</button>

                                    <button className="products__container--card--content--buttons--buy">buy now</button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

// image

// title

// price | disocunt price

// rating | stock

// add to cart | buy now
