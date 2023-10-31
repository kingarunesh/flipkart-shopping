import { useState, useEffect } from "react";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [total, setTotal] = useState(6);

    const [modal, setModal] = useState(false);
    const [productID, setProductID] = useState(null);
    const [singleProduct, setSingleProduct] = useState(null);
    const [imgList, setImgList] = useState(null);
    const [imgPos, setImgPos] = useState(0);

    //NOTE :    get 6 products and get more products by pressing button
    useEffect(
        function () {
            async function getProducts() {
                setIsLoading(true);

                const response = await fetch(`https://dummyjson.com/products?limit=${total}`);
                const data = await response.json();
                setProducts(data.products);

                setIsLoading(false);
            }

            getProducts();
        },
        [total]
    );

    //NOTE :        load more data
    function loadMoreHandler() {
        setTotal((c) => c + 6);
    }

    //NOTE :        modal
    function detailProductHandler(id) {
        setProductID(id);
        setModal(true);
    }

    useEffect(
        function () {
            async function getProduct() {
                try {
                    setIsLoading(true);

                    const response = await fetch(`https://dummyjson.com/products/${productID}`);
                    const data = await response.json();
                    setSingleProduct(data);

                    setImgList(data.images);

                    setIsLoading(false);
                } catch (error) {
                    console.log("product not found");
                }
            }

            getProduct();
        },
        [productID]
    );

    function closeModalHandler() {
        setModal(false);
        setProductID(null);
        setImgPos(0);
    }

    function leftImageHandler() {
        imgPos > 0 && setImgPos((c) => c - 1);

        // setImgPos((c) => c - 1);
    }

    function rightImageHandler() {
        imgPos < imgList.length - 1 && setImgPos((c) => c + 1);

        // setImgPos((c) => c + 1);
    }

    return (
        <>
            {/* SECTION :       modal        */}
            {modal &&
                (isLoading ? (
                    <div className="loading"></div>
                ) : (
                    <div className="modal__conatiner">
                        <div className="modal__conatiner--box">
                            {/*     close   */}
                            <div className="modal__conatiner--box--close" onClick={closeModalHandler}>
                                <span className="material-symbols-outlined">close</span>
                            </div>

                            {/*     image slider    */}
                            <div className="modal__conatiner--box--img">
                                {/* <img src={singleProduct.thumbnail} alt={singleProduct.title} /> */}
                                <img src={imgList ? imgList[imgPos] : singleProduct.thumbnail} alt={singleProduct.title} />

                                <button className="modal__conatiner--box--img--control_left" onClick={leftImageHandler}>
                                    <span className="material-symbols-outlined">chevron_left</span>
                                </button>

                                <button className="modal__conatiner--box--img--control_right" onClick={rightImageHandler}>
                                    <span className="material-symbols-outlined">chevron_right</span>
                                </button>
                            </div>

                            {/*     content      */}
                            <div className="modal__conatiner--box--content">
                                <div className="modal__conatiner--box--content--text">
                                    <h2>{singleProduct.title}</h2>

                                    <p>{singleProduct.description}</p>
                                </div>

                                <div className="modal__conatiner--box--content--info">
                                    <div>
                                        <strong>Price:</strong> <span>{singleProduct.price}$</span>
                                    </div>

                                    <div>
                                        <strong>Discount Percentage:</strong> <span>{singleProduct.discountPercentage}%</span>
                                    </div>

                                    <div>
                                        <strong>Rating:</strong> <span>{singleProduct.rating}</span>
                                    </div>
                                    <div>
                                        <strong>Stock:</strong> <span>{singleProduct.stock}</span>
                                    </div>

                                    <div>
                                        <strong>Brand:</strong> <span>{singleProduct.brand}</span>
                                    </div>
                                    <div>
                                        <strong>Category:</strong> <span>{singleProduct.category}</span>
                                    </div>
                                </div>

                                <div className="modal__conatiner--box--content--cart_buy">
                                    <button className="modal__conatiner--box--content--cart_buy--cart">add to cart</button>
                                    <button className="modal__conatiner--box--content--cart_buy--buy">buy now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            {/* SECTION :       products        */}
            <div className="products__container">
                {isLoading ? (
                    <div className="loading"></div>
                ) : (
                    products.map((item) => {
                        return (
                            <div className="products__container--card" key={item.id}>
                                <img src={item.thumbnail} alt={item.title} onClick={() => detailProductHandler(item.id)} />

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
