import React, { useState, useEffect } from 'react';
import './Order.css';
import Counter from '../Counter/Counter';
import { useNavigate, useLocation } from 'react-router-dom';

import axios from 'axios';

export default function Order(props) {
    const location = useLocation();
    //   console.log(location);

    const navigate = useNavigate();
    const [items, setItems] = useState([]);
    const [itemPrices, setItemPrices] = useState({});
    const [itemQuantities, setItemQuantities] = useState({});
    const [grandTotal, setGrandTotal] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0)

    useEffect(() => {

        const fetchItems = async () => {
            try {
                const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL
                const response = await axios.get(`${REACT_APP_BASE_URL} /api/auth/items`);
                setItems(response.data);
                const prices = {};
                const quantities = {};
                response.data.forEach((item) => {
                    prices[item.name] = item.price[location.state.serviceNumber];
                    quantities[item.name] = 0;
                });
                setItemPrices(prices);
                setItemQuantities(quantities);
            } catch (err) {
                console.error('Error fetching items:', err);
            }
        };

        fetchItems();
    }, []);

    const handleOrder = () => {
        console.log(location.state.serviceNumber);
        navigate("/checkout", {
            state: {
                grandTotal,
                totalQuantity,
                itemQuantities,
                serviceNo: (location.state.serviceNumber)
            },
        });

    };

    const handleIncrement = (itemName) => {
        const updatedQuantities = { ...itemQuantities };
        updatedQuantities[itemName] += 1;
        setTotalQuantity(totalQuantity + 1);
        setItemQuantities(updatedQuantities);
        calculateGrandTotal(updatedQuantities);
    };

    const handleDecrement = (itemName) => {
        if (itemQuantities[itemName] > 0) {
            const updatedQuantities = { ...itemQuantities };
            updatedQuantities[itemName] -= 1;
            setTotalQuantity(totalQuantity - 1);
            setItemQuantities(updatedQuantities);
            calculateGrandTotal(updatedQuantities);
        }
    };

    const calculateGrandTotal = (quantities) => {
        let total = 0;
        Object.keys(quantities).forEach((itemName) => {
            const quantity = quantities[itemName];
            const price = itemPrices[itemName];
            total += quantity * price;
        });
        setGrandTotal(total);
    };


    return (

        <div className="head">
            <div className="sec">
                <div className="sec1">Order</div>
                <div className="sec2">

                    <div className="sec2-1">
                        <div className="s1">
                            <div className="s-1">Jeans</div>
                            <div className="s-2">

                                <Counter
                                    count={itemQuantities["Jeans"]}
                                    onIncrement={() => handleIncrement("Jeans")}
                                    onDecrement={() => handleDecrement("Jeans")}
                                />
                            </div>
                            <div className="s-3">
                                <button type="button" class="btn btn-dark">Rs. {itemPrices["Jeans"]}</button>
                            </div>
                        </div>
                        <div className="s2">
                            <div className="s-1">Pant</div>
                            <div className="s-2">

                                <Counter
                                    count={itemQuantities["Pant"]}
                                    onIncrement={() => handleIncrement("Pant")}
                                    onDecrement={() => handleDecrement("Pant")}
                                />
                            </div>
                            <div className="s-3">
                                <button type="button" class="btn btn-dark">Rs. {itemPrices["Pant"]}</button>
                            </div>
                        </div>
                        <div className="s3">
                            <div className="s-1">Shirt</div>
                            <div className="s-2">
                                <Counter
                                    count={itemQuantities["Shirt"]}
                                    onIncrement={() => handleIncrement("Shirt")}
                                    onDecrement={() => handleDecrement("Shirt")}
                                />
                            </div>
                            <div className="s-3">
                                <button type="button" class="btn btn-dark">Rs. {itemPrices["Shirt"]}</button>
                            </div>
                        </div>
                        <div className="s4">
                            <div className="s-1">T-Shirt</div>
                            <div className="s-2">
                                <Counter
                                    count={itemQuantities["T-Shirt"]}
                                    onIncrement={() => handleIncrement("T-Shirt")}
                                    onDecrement={() => handleDecrement("T-Shirt")}
                                />
                            </div>
                            <div className="s-3">
                                <button type="button" class="btn btn-dark">Rs. {itemPrices["T-Shirt"]}</button>
                            </div>
                        </div>
                        <div className="s5">
                            <div className="s-1">Lower</div>
                            <div className="s-2">
                                <Counter
                                    count={itemQuantities["Lower"]}
                                    onIncrement={() => handleIncrement("Lower")}
                                    onDecrement={() => handleDecrement("Lower")}
                                />
                            </div>
                            <div className="s-3">
                                <button type="button" class="btn btn-dark">Rs. {itemPrices["Lower"]}</button>
                            </div>
                        </div>
                        <div className="s6">
                            <div className="s-1">Towel</div>
                            <div className="s-2">
                                <Counter
                                    count={itemQuantities["Towel"]}
                                    onIncrement={() => handleIncrement("Towel")}
                                    onDecrement={() => handleDecrement("Towel")}
                                />
                            </div>
                            <div className="s-3">
                                <button type="button" class="btn btn-dark">Rs. {itemPrices["Towel"]}</button>
                            </div>
                        </div>
                        <div className="s7">
                            <div className="s-1">Shorts</div>
                            <div className="s-2">
                                <Counter
                                    count={itemQuantities["Shorts"]}
                                    onIncrement={() => handleIncrement("Shorts")}
                                    onDecrement={() => handleDecrement("Shorts")}
                                />
                            </div>
                            <div className="s-3">
                                <button type="button" class="btn btn-dark">Rs. {itemPrices["Shorts"]}</button>
                            </div>
                        </div>
                    </div>
                    <div className="sec2-2">
                        <div className="s1">
                            <div className="s-1">Bed Sheet</div>
                            <div className="s-2">
                                <Counter
                                    count={itemQuantities["Bed Sheet"]}
                                    onIncrement={() => handleIncrement("Bed Sheet")}
                                    onDecrement={() => handleDecrement("Bed Sheet")}
                                />
                            </div>
                            <div className="s-3">
                                <button type="button" class="btn btn-dark">Rs. {itemPrices["Bed Sheet"]}</button>
                            </div>
                        </div>
                        <div className="s2">
                            <div className="s-1">Pillow Cover</div>
                            <div className="s-2">
                                <Counter
                                    count={itemQuantities["Pillow Cover"]}
                                    onIncrement={() => handleIncrement("Pillow Cover")}
                                    onDecrement={() => handleDecrement("Pillow Cover")}
                                />
                            </div>
                            <div className="s-3">
                                <button type="button" class="btn btn-dark">Rs. {itemPrices["Pillow Cover"]}</button>
                            </div>
                        </div>
                        <div className="s3">
                            <div className="s-1">Dohar</div>
                            <div className="s-2">
                                <Counter
                                    count={itemQuantities["Dohar"]}
                                    onIncrement={() => handleIncrement("Dohar")}
                                    onDecrement={() => handleDecrement("Dohar")}
                                />
                            </div>
                            <div className="s-3">
                                <button type="button" class="btn btn-dark">Rs. {itemPrices["Dohar"]}</button>
                            </div>
                        </div>
                        <div className="s4">
                            <div className="s-1">Vest</div>
                            <div className="s-2">
                                <Counter
                                    count={itemQuantities["Vest"]}
                                    onIncrement={() => handleIncrement("Vest")}
                                    onDecrement={() => handleDecrement("Vest")}
                                />
                            </div>
                            <div className="s-3">
                                <button type="button" class="btn btn-dark">Rs. {itemPrices["Vest"]}</button>
                            </div>
                        </div>
                        <div className="s5">
                            <div className="s-1">Underwear</div>
                            <div className="s-2">
                                <Counter
                                    count={itemQuantities["Underwear"]}
                                    onIncrement={() => handleIncrement("Underwear")}
                                    onDecrement={() => handleDecrement("Underwear")}
                                />
                            </div>
                            <div className="s-3">
                                <button type="button" class="btn btn-dark">Rs. {itemPrices["Underwear"]}</button>
                            </div>
                        </div>
                        <div className="s6">
                            <div className="s-1">Socks</div>
                            <div className="s-2">
                                <Counter
                                    count={itemQuantities["Socks"]}
                                    onIncrement={() => handleIncrement("Socks")}
                                    onDecrement={() => handleDecrement("Socks")}
                                />
                            </div>
                            <div className="s-3">
                                <button type="button" class="btn btn-dark">Rs. {itemPrices["Socks"]}</button>
                            </div>
                        </div>
                        <div className="s7">
                            <div className="s-1">Hanky</div>
                            <div className="s-2">
                                <Counter
                                    count={itemQuantities["Hanky"]}
                                    onIncrement={() => handleIncrement("Hanky")}
                                    onDecrement={() => handleDecrement("Hanky")}
                                />
                            </div>
                            <div className="s-3">
                                <button type="button" class="btn btn-dark">Rs. {itemPrices["Hanky"]}</button>
                            </div>
                        </div>
                    </div>
                    <div className="sec2-3">
                        <div className="s1">
                            <div className="s-1">Shoes</div>
                            <div className="s-2">
                                <Counter
                                    count={itemQuantities["Shoes"]}
                                    onIncrement={() => handleIncrement("Shoes")}
                                    onDecrement={() => handleDecrement("Shoes")}
                                />
                            </div>
                            <div className="s-3">
                                <button type="button" class="btn btn-dark">Rs. {itemPrices["Shoes"]}</button>
                            </div>
                        </div>
                        <div className="s2">
                            <div className="s-1">Blanket</div>
                            <div className="s-2">
                                <Counter
                                    count={itemQuantities["Blanket"]}
                                    onIncrement={() => handleIncrement("Blanket")}
                                    onDecrement={() => handleDecrement("Blanket")}
                                />
                            </div>
                            <div className="s-3">
                                <button type="button" class="btn btn-dark">Rs. {itemPrices["Blanket"]}</button>
                            </div>
                        </div>
                        <div className="s3">
                            <div className="s-1">Jacket</div>
                            <div className="s-2">
                                <Counter
                                    count={itemQuantities["Jacket"]}
                                    onIncrement={() => handleIncrement("Jacket")}
                                    onDecrement={() => handleDecrement("Jacket")}
                                />
                            </div>
                            <div className="s-3">
                                <button type="button" class="btn btn-dark">Rs. {itemPrices["Jacket"]}</button>
                            </div>
                        </div>
                        <div className="s4">
                            <div className="s-1">Sweater</div>
                            <div className="s-2">
                                <Counter
                                    count={itemQuantities["Sweater"]}
                                    onIncrement={() => handleIncrement("Sweater")}
                                    onDecrement={() => handleDecrement("Sweater")}
                                />
                            </div>
                            <div className="s-3">
                                <button type="button" class="btn btn-dark">Rs. {itemPrices["Sweater"]}</button>
                            </div>
                        </div>
                        <div className="s5">
                            <div className="s-1">Hoodie</div>
                            <div className="s-2">
                                <Counter
                                    count={itemQuantities["Hoodie"]}
                                    onIncrement={() => handleIncrement("Hoodie")}
                                    onDecrement={() => handleDecrement("Hoodie")}
                                />
                            </div>
                            <div className="s-3">
                                <button type="button" class="btn btn-dark">Rs. {itemPrices["Hoodie"]}</button>
                            </div>
                        </div>
                        <div className="s6">
                            <div className="s-1">Bag</div>
                            <div className="s-2">
                                <Counter
                                    count={itemQuantities["Bag"]}
                                    onIncrement={() => handleIncrement("Bag")}
                                    onDecrement={() => handleDecrement("Bag")}
                                />
                            </div>
                            <div className="s-3">
                                <button type="button" class="btn btn-dark">Rs. {itemPrices["Bag"]}</button>
                            </div>
                        </div>
                        <div className="s7">
                            <div className="s-1">Curtain</div>
                            <div className="s-2">
                                <Counter
                                    count={itemQuantities["Curtain"]}
                                    onIncrement={() => handleIncrement("Curtain")}
                                    onDecrement={() => handleDecrement("Curtain")}
                                />
                            </div>
                            <div className="s-3">
                                <button type="button" class="btn btn-dark">Rs. {itemPrices["Curtain"]}</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sec3">
                    <button type="button" onClick={handleOrder} className="btn btn-checkout checkoutbutton">
                        Proceed To Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}
