import React from 'react';
import './Order.css';
import Counter from '../Counter/Counter';

import { useNavigate } from 'react-router-dom';

export default function Order() {
    const navigate = useNavigate();

    const handleOrder = () => {
        navigate('/checkout');
    }
  return (
    <div className="head">
        <div className="sec">

            <div className="sec1">Order</div>

            <div className="sec2">
                <div className="sec2-1">
                    <div className="s1">
                        <div className="s-1">Jeans</div>
                        <div className="s-2">
                            <Counter/>
                        </div>
                        <div className="s-3">
                            <button type="button" onClick={handleOrder} class="btn btn-dark">Rs. 10</button>
                        </div>
                    </div>
                    <div className="s2">
                        <div className="s-1">Pant</div>
                        <div className="s-2">
                            <Counter/>
                        </div>
                        <div className="s-3">
                            <button type="button" onClick={handleOrder} class="btn btn-dark">Rs. 10</button>
                        </div>
                    </div>
                    <div className="s3">
                        <div className="s-1">Shirt</div>
                        <div className="s-2"><Counter/></div>
                        <div className="s-3">
                            <button type="button" onClick={handleOrder} class="btn btn-dark">Rs. 10</button>
                        </div>
                    </div>
                    <div className="s4">
                        <div className="s-1">T-Shirt</div>
                        <div className="s-2"><Counter/></div>
                        <div className="s-3">
                            <button type="button" onClick={handleOrder} class="btn btn-dark">Rs. 10</button>
                        </div>
                    </div>
                    <div className="s5">
                        <div className="s-1">Lower</div>
                        <div className="s-2"><Counter/></div>
                        <div className="s-3">
                            <button type="button" onClick={handleOrder} class="btn btn-dark">Rs. 10</button>
                        </div>
                    </div>
                    <div className="s6">
                        <div className="s-1">Towel</div>
                        <div className="s-2"><Counter/></div>
                        <div className="s-3">
                            <button type="button" onClick={handleOrder} class="btn btn-dark">Rs. 10</button>
                        </div>
                    </div>
                    <div className="s7">
                        <div className="s-1">Shorts</div>
                        <div className="s-2"><Counter/></div>
                        <div className="s-3">
                            <button type="button" onClick={handleOrder} class="btn btn-dark">Rs. 10</button>
                        </div>
                    </div>
                </div>
                <div className="sec2-2">
                    <div className="s1">
                        <div className="s-1">Bed Sheet</div>
                        <div className="s-2"><Counter/></div>
                        <div className="s-3">
                            <button type="button" onClick={handleOrder} class="btn btn-dark">Rs. 10</button>
                        </div>
                    </div>
                    <div className="s2">
                        <div className="s-1">Pillow Cover</div>
                        <div className="s-2"><Counter/></div>
                        <div className="s-3">
                            <button type="button" onClick={handleOrder} class="btn btn-dark">Rs. 10</button>
                        </div>
                    </div>
                    <div className="s3">
                        <div className="s-1">Dohar</div>
                        <div className="s-2"><Counter/></div>
                        <div className="s-3">
                            <button type="button" onClick={handleOrder} class="btn btn-dark">Rs. 10</button>
                        </div>
                    </div>
                    <div className="s4">
                        <div className="s-1">Vest</div>
                        <div className="s-2"><Counter/></div>
                        <div className="s-3">
                            <button type="button" onClick={handleOrder} class="btn btn-dark">Rs. 10</button>
                        </div>
                    </div>
                    <div className="s5">
                        <div className="s-1">Underwear</div>
                        <div className="s-2"><Counter/></div>
                        <div className="s-3">
                            <button type="button" onClick={handleOrder} class="btn btn-dark">Rs. 10</button>
                        </div>
                    </div>
                    <div className="s6">
                        <div className="s-1">Socks</div>
                        <div className="s-2"><Counter/></div>
                        <div className="s-3">
                            <button type="button" onClick={handleOrder} class="btn btn-dark">Rs. 10</button>
                        </div>
                    </div>
                    <div className="s7">
                        <div className="s-1">Hanky</div>
                        <div className="s-2"><Counter/></div>
                        <div className="s-3">
                            <button type="button" onClick={handleOrder} class="btn btn-dark">Rs. 10</button>
                        </div>
                    </div>
                </div>
                <div className="sec2-3">
                <div className="s1">
                        <div className="s-1">Shoes</div>
                        <div className="s-2"><Counter/></div>
                        <div className="s-3">
                            <button type="button" onClick={handleOrder} class="btn btn-dark">Rs. 10</button>
                        </div>
                    </div>
                    <div className="s2">
                        <div className="s-1">Blanket</div>
                        <div className="s-2"><Counter/></div>
                        <div className="s-3">
                            <button type="button" onClick={handleOrder} class="btn btn-dark">Rs. 10</button>
                        </div>
                    </div>
                    <div className="s3">
                        <div className="s-1">Jacket</div>
                        <div className="s-2"><Counter/></div>
                        <div className="s-3">
                            <button type="button" onClick={handleOrder} class="btn btn-dark">Rs. 10</button>
                        </div>
                    </div>
                    <div className="s4">
                        <div className="s-1">Sweater</div>
                        <div className="s-2"><Counter/></div>
                        <div className="s-3">
                            <button type="button" onClick={handleOrder} class="btn btn-dark">Rs. 10</button>
                        </div>
                    </div>
                    <div className="s5">
                        <div className="s-1">Hoodie</div>
                        <div className="s-2"><Counter/></div>
                        <div className="s-3">
                            <button type="button" onClick={handleOrder} class="btn btn-dark">Rs. 10</button>
                        </div>
                    </div>
                    <div className="s6">
                        <div className="s-1">Bag</div>
                        <div className="s-2"><Counter/></div>
                        <div className="s-3">
                            <button type="button" onClick={handleOrder} class="btn btn-dark">Rs. 10</button>
                        </div>
                    </div>
                    <div className="s7">
                        <div className="s-1">Curtain</div>
                        <div className="s-2"><Counter/></div>
                        <div className="s-3">
                            <button type="button" onClick={handleOrder} class="btn btn-dark">Rs. 10</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sec3">
                <button type="button" onClick={handleOrder} className="btn btn-checkout">Proceed To Checkout</button>
                {/* <div className="contact-btn">
                  <button type="submit" className="btn btn-primary">
                    Proceed to Checkout
                  </button>
                </div> */}
            </div>
        </div>        
    </div>
  )
}
