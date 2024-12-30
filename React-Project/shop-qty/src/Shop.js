import React, { useState } from "react";
import './App.css';

function Shop() {

    const [price, setPrice] = useState(0);
    const [qty, setQty] = useState(0);
    const [dis, setDis] = useState("");
    const [amount, setAmount] = useState();
    const [tax, setTax] = useState(0);
    const [samount, setSamount] = useState(0);
    const [priceqty, setPriceqty] = useState(0);
    const [uprice, setUprice] = useState(0);

    function Damount(e) {
        debugger
        // const discountValue = parseInt(e);
        // const unitPrice = parseInt(price) * parseInt(qty);

        const disvalue=parseInt(e);
        const unitprice=parseInt(price)*parseInt(qty);

        // if (dis === 'Fixed') {
        //     setSamount(discountValue);
        // } else if (dis === 'Percentage') {
        //     setSamount((unitPrice * discountValue) / 100);
        // }

        if(dis=='Fixed'){
            setSamount(disvalue);
        }
        else{
            setSamount((unitprice * disvalue)/100)
        }
    }

    function Calculate(){
           
    }



    // function calculateTotal() {
    //     const unitPrice = parseInt(price) * parseInt(qty);
    //     const discountedPrice = unitPrice - samount;
    //     const finalAmount = discountedPrice + (discountedPrice * (tax / 100));
    //     setPriceqty(finalAmount);
    // }

    return (
        <React.Fragment>
            <div>
                <form id="form1" onSubmit={(e) => e.preventDefault()}>
                    <label>
                        Price:
                        <input
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </label>
                    <br /><br />
                    
                    <label>
                        Qty:
                        <input
                            type="number"
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                        />
                    </label>
                    <br /><br />
                    
                    <label>
                        Discount:
                        <select onChange={(e) => setDis(e.target.value)}>
                            <option value="">Select</option>
                            <option value="Fixed">Fixed</option>
                            <option value="Percentage">Percentage</option>
                        </select>
                    </label>
                    <br /><br />
                    
                    <label>
                        Dis.Amount:
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => Damount(e.target.value)}
                        />
                    </label>
                    <br /><br />
                    
                    <label>
                        Tax:
                        <select onChange={(e) => setTax(e.target.value)}>
                            <option value="">Select</option>
                            <option value={2.5}>2.5%</option>
                            <option value={3}>3%</option>
                            <option value={5}>5%</option>
                            <option value={7.5}>7.5%</option>
                            <option value={9}>9%</option>
                        </select>
                    </label>
                    <br /><br />

                    <button type="button" onClick={Calculate}>Calculate</button>
                    <br /><br />

                    <p>Your Bill Is: {priceqty}</p>
                </form>
            </div>
        </React.Fragment>
    );
}

export default Shop;
