import React, { useState } from "react";

function MapObj() {
    const [ssport, setSsport] = useState([]);
    const [arr, setArr] = useState([
        { id: '1', category: 'sport', name: 'Cricket' },
        { id: '2', category: 'Movies', name: 'Kalki' },
        { id: '3', category: 'Drink', name: 'Apple Juice' },
        { id: '4', category: 'sport', name: 'Hoki' },
        { id: '5', category: 'Movies', name: 'salar' },
        { id: '6', category: 'Drink', name: 'Apple Juice' },
        { id: '7', category: 'Movies', name: 'Stree2' },
        { id: '8', category: 'sport', name: 'Hoki' },
        { id: '10', category: 'sport', name: 'Basketball' },
        { id: '11', category: 'Movies', name: 'Kalki' },
        { id: '12', category: 'sport', name: 'Football' },
        { id: '13', category: 'sport', name: 'Basketball' },
        { id: '14', category: 'sport', name: 'Football' },
        { id: '15', category: 'Movies', name: 'Ramaayan' },
        { id: '16', category: 'Movies', name: 'Arya' },
        { id: '17', category: 'Movies', name: 'Vikram' },
        { id: '18', category: 'sport', name: 'Hoki' },
        { id: '19', category: 'Drink', name: 'Apple Juice' },
        { id: '20', category: 'Drink', name: 'Banana Juice' },
        { id: '21', category: 'Drink', name: 'Mango Juice' },
        { id: '22', category: 'Drink', name: 'Tea' },
        { id: '23', category: 'Drink', name: 'Coffee' },
        { id: '24', category: 'Drink', name: 'water' },
        { id: '25', category: 'Phone', name: 'Samsung' },
        { id: '26', category: 'Phone', name: 'Apple' },
        { id: '27', category: 'Phone', name: 'Vivo' },
        { id: '28', category: 'Phone', name: 'One Plus' },
        { id: '29', category: 'Phone', name: 'Huiwaie' },
        { id: '30', category: 'Phone', name: 'Samsung' },
        { id: '31', category: 'Phone', name: 'Apple' },
        { id: '32', category: 'Phone', name: 'Oppo' },
        { id: '33', category: 'Food', name: 'Apple' },
        { id: '34', category: 'Food', name: 'Banana' },
        { id: '35', category: 'Food', name: 'Strobary' },
        { id: '36', category: 'Food', name: 'Kivi' },
        { id: '37', category: 'Food', name: 'pineapple' },
        { id: '38', category: 'Movies', name: 'Kalki' },
        { id: '39', category: 'sport', name: 'Football' },
        { id: '40', category: 'sport', name: 'Basketball' },
        { id: '41', category: 'sport', name: 'Football' },
        { id: '42', category: 'Movies', name: 'Ramaayan' },
        { id: '43', category: 'Movies', name: 'Arya' },
        { id: '44', category: 'Movies', name: 'Vikram' },
        { id: '45', category: 'sport', name: 'Hoki' },
        { id: '46', category: 'Drink', name: 'Apple Juice' },
        { id: '47', category: 'Movies', name: 'Vikram' },
        { id: '48', category: 'sport', name: 'Hoki' },
        { id: '49', category: 'Drink', name: 'Apple Juice' },
        { id: '50', category: 'Drink', name: 'Banana Juice' },
    ]);

    const [newarr, setNewarr] = useState(arr);

    function EnterMe(e) {
        debugger
        const { checked, value } = e.target;
        if (checked) {
            setSsport([...ssport, value]);

        } else {
            setSsport(ssport.filter(category => category !== value));
        }
    }

    function ClickMe() {
        debugger
        const newarr = arr.filter(item => ssport.includes(item.category));
        setNewarr(newarr);
    }

    return (
        <>
            Select Category:<br /><br />

            <input type="checkbox" value="sport" onChange={EnterMe} />Sports
            <input type="checkbox" value="Movies" onChange={EnterMe} />Movies
            <input type="checkbox" value="Drink" onChange={EnterMe} />Drink
            <input type="checkbox" value="Phone" onChange={EnterMe} />Phone
            <input type="checkbox" value="Food" onChange={EnterMe} />Food<br/><br/>
            <button type='button' onClick={ ()=>ClickMe()}>Save</button>

            <br /><br />

            <table border={1} cellPadding="5" cellSpacing="5">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Category</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {newarr.map((item) => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.category}</td>
                            <td>{item.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default MapObj;
