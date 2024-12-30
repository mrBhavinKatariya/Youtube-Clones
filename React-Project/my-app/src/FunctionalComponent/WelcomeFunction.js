import React, { useState } from 'react';
import '../external.css';
import student from '../commom.module.css'

function WelcomeFunction(props) {
    debugger
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [total, setTotal] = useState(0);
    const [skill, setSkills] = useState('');
    const [gender, setGender] = useState('');
    const [subject, setSubject] = useState([]);
    const [flag, setFlag] = useState(true);

    const [data, setData] = useState([
        {
            name: 'shailesh', city: 'surat', class: 'BCA', contact: '887687687', address: [
                { Hn: '10', city: 'Surat', State: 'Gujarat' },
                { Hn: '11', city: 'Amreli', State: 'Gujarat' },
                { Hn: '12', city: 'Rajkot', State: 'Gujarat' }
            ]
        },
        {
            name: 'haresh', city: 'amreli', class: 'BBA', contact: '887687687', address: [
                { Hn: '10', city: 'Surat', State: 'Gujarat' },
                { Hn: '11', city: 'Amreli', State: 'Gujarat' },
                { Hn: '12', city: 'Rajkot', State: 'Gujarat' }
            ]
        },
        {
            name: 'suresh', city: 'surat', class: 'MCA', contact: '887687687', address: [
                { Hn: '10', city: 'Surat', State: 'Gujarat' },
                { Hn: '11', city: 'Amreli', State: 'Gujarat' },
                { Hn: '12', city: 'Rajkot', State: 'Gujarat' }
            ]
        },
        {
            name: 'nilesh', city: 'amreli', class: 'BCA', contact: '887687687', address: [
                { Hn: '10', city: 'Surat', State: 'Gujarat' },
                { Hn: '11', city: 'Amreli', State: 'Gujarat' },
                { Hn: '12', city: 'Rajkot', State: 'Gujarat' }
            ]
        },
        {
            name: 'hitesh', city: 'surat', class: 'MBA', contact: '887687687', address: [
                { Hn: '10', city: 'Surat', State: 'Gujarat' },
                { Hn: '11', city: 'Amreli', State: 'Gujarat' },
                { Hn: '12', city: 'Rajkot', State: 'Gujarat' }
            ]
        },
        {
            name: 'vipuk', city: 'rajkot', class: 'CA', contact: '887687687', address: [
                { Hn: '10', city: 'Surat', State: 'Gujarat' },
                { Hn: '11', city: 'Amreli', State: 'Gujarat' },
                { Hn: '12', city: 'Rajkot', State: 'Gujarat' }
            ]
        }
    ]);

    const sports = ['Cricket', 'Football', 'Tenis', 'Baseball'];
    // debugger
    // var data = "Welcome to codeline infotech"
    //const[data,setData]=useState('Welcome to codeline infotech');
    // function clickme(num){
    //     debugger
    //    setData('Thanks for visitl')

    //    }
    // var cars="string of values my names";

    const [vall, setVall] = useState("Welcome our shop");

    function ClickMe() {
        setVall('Nice');
    }

    function getCalcukate() {
        setTotal(num1 + num2)
    }

    function updateSubject(e) {
        debugger
        if (e.target.checked) {
            setSubject([...subject, e.target.value])
        } else {
            setSubject(subject.filter((item) => item != e.target.value))
        }
    }
    const number = [5, 10, 15, 20, 25];
    const mapNumer = number.map(num => num + 5);
    const sumNumber = number.reduce((accu, curVal) => accu + curVal);
    const filterNumber = number.filter(item => item > 15);

    const findnumber = number.findIndex(item => item > 15);
    const dataSome = data.some(item => item.city == 'surat');

    function updateTable() {
        setData(data.filter(item => item.class == 'BCA' && item.city == 'surat'))
    }
    return (
        <>
            <h2 style={{ color: 'red', fontSize: '25px' }}>Welcome to Functional component.</h2>
            <h3 className={student.studentcls}>Thanks for visit.</h3>
            <ul>
                {sports.map(item => <li>{item}</li>)}
            </ul>

            Some: {dataSome}
            Find : {findnumber}<br></br>
            Map number : {mapNumer.join(',')}<br></br>
            Total : {sumNumber}<br></br>
            Filter : {filterNumber.join(',')}<br></br>
            <button onClick={() => updateTable()}>Update Table</button>
            <table border="1" width={'50%'} cellPadding={5} cellSpacing={5}>
                <tr>
                    <th>Name</th>
                    <th>City</th>
                    <th>Contact</th>
                    <th>Class</th>
                    <th>Address</th>
                </tr>
                {data.map((item) =>
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.city}</td>
                        <td>{item.class}</td>
                        <td>{item.contact}</td>
                        <td>
                            <table border="1">
                                {
                                    item.address.map((add) =>
                                        <tr>
                                            <td>{add.Hn}</td>
                                            <td>{add.city}</td>
                                            <td>{add.State}</td>
                                        </tr>
                                    )
                                }
                            </table>
                        </td>
                    </tr>
                )}
            </table>
            {/* <p>{data}</p><br></br> */}
            {/* <p>{props.name} {props.city}</p><br>
            </br> */}
            <p>{props.address.area} {props.address.city}</p><br></br>
            <td> Name : <input type="text" onChange={(e) => setName(e.target.value)} /><br></br>
                City : <input type="text" onChange={(e) => setCity(e.target.value)} /><br></br></td>
            Skiils : <select onChange={(e) => setSkills(e.target.value)}>
                <option value={''}>Select Skill</option>
                <option value={'HTML'}>HTML</option>
                <option value={'CSS'}>CSS</option>
                <option value={'C++'}>C++</option>
                <option value={'React'}>React</option>
            </select><br></br>
            Gender : <input type="radio" name="gender" value={'Male'} onChange={(e) => setGender(e.target.value)} />Male
            <input type="radio" name="gender" value={'Female'} onChange={(e) => setGender(e.target.value)} />Female
            <br></br>
            Subject : <input type="checkbox" value={"HTML"} onChange={(e) => updateSubject(e)} />HTML
            <input type="checkbox" value={"CSS"} onChange={(e) => updateSubject(e)} />CSS
            <input type="checkbox" value={"C++"} onChange={(e) => updateSubject(e)} />C++
            <input type="checkbox" value={"React"} onChange={(e) => updateSubject(e)} />React
            <br></br>

            Num 1: <input type="text" onChange={(e) => setNum1(parseInt(e.target.value))} /><br></br>
            Num 2: <input type="text" onChange={(e) => setNum2(parseInt(e.target.value))} /><br></br>
            Name : {name}<br></br>
            City : {city}<br></br>
            Skill : {skill}<br></br>
            Gender : {gender}<br></br>
            Subject :{subject.join(',')}<br></br>
            Total : {total}<br></br>
            {/*
            <button onClick={()=>getCalcukate()}>Calculate</button><br></br>
            <button onClick={()=>setFlag(true)}>Show</button>
            <button onClick={()=>setFlag(false)}>Hide</button>
            <button onClick={()=>setFlag(!flag)}>Toggle</button>
            {flag ? data : null}<br></br> */}
            {/* <button onClick={()=>clickme(25)}>Clickme</button>  */}

            {/* <p>{vall}</p>
                <button onClick={ClickMe}>clickme</button> */}


        </>
    )

}

export default WelcomeFunction;