import { useState, useEffect } from "react";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [total, setTotal] = useState(6);

    useEffect(function () {
        async function getProducts() {
            setIsLoading(true);

            const response = await fetch("https://dummyjson.com/products");
            const data = await response.json();
            setProducts(data.products);

            setIsLoading(false);
        }

        getProducts();
    }, []);

    function loadMoreHandler() {
        setTotal((c) => c + 6);
    }

    return (
        <>
            <div className="products__container">
                {isLoading ? (
                    <div className="loading"></div>
                ) : (
                    products.map((item) => {
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
                    })
                )}
            </div>

            <div className="products__container--load-more">
                <button onClick={loadMoreHandler}>Load More...</button>
            </div>
        </>
    );
}

// image

// title

// price | disocunt price

// rating | stock

// add to cart | buy now
