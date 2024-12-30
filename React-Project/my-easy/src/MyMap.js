import React, { useState } from "react";

// function MapObj() {

//     const [arr, setArr] = useState([
//         { name: 'Raj', city: "surat", state: "Gujarat" },
//         { name: 'Yash', city: "Amreli", state: 'Gujarat' },
//         { name: 'Meet', city: "Kolkata", state: 'Gujarat' },
//         { name: 'Ravi', city: "Surat", state: 'Gujarat' },
//         { name: 'yash', city: "Rajkot", state: 'Gujarat' },
//     ])


//     const [skills, setSkills] = useState();
//     const [gender, setGendet] = useState();
//     const [sub, setSub] = useState([])

//     const subject = ['Hindi', 'English', 'Sanskrit', 'Gujarati', 'Physics', 'Math']
//     const std = ['1', '2', '3', '4', '5', '6', '7', '8']
//     const stdd = [5, 10, 15, 20, 30]


//     const plus = stdd.map(item => item + 5)


//     function UpdateSub(e) {
//         if (e.target.checked) {
//             setSub([...sub, e.target.value])
//         }

//         else {
//             setSub(sub.filter((item) => item != e.target.value))
//         }
//     }

//     function UpdateDatas() {
//         setArr(arr.filter((item) => item.city == 'surat' && item.name=='Raj'))
//     }


//     return (
//         <>

//             <table>

//                 <tr>
//                     <th>Name</th>
//                     <th>City</th>
//                     <th>State</th>
//                 </tr>

//                 {arr.map((item) =>
//                     <tr>
//                         <td>{item.name}</td>
//                         <td>{item.city}</td>
//                         <td>{item.state}</td>
//                     </tr>
//                 )}

//             </table>

//             {/* <ul>
//             {subject.map(item => <li>{item}</li>)}
//             </ul>

//             <ul>
//             {std.map(item => <li>{item}</li>)}
//             </ul> */}


//             Skills:
//             <select onChange={(e) => setSkills(e.target.value)}>
//                 <option value={''}>Select</option>
//                 <option value={'HTML'}>HTML</option>
//                 <option value={'CSS'}>CSS</option>
//                 <option value={'Reaact'}>React</option>
//                 <option value={'Node'}>Node</option>

//             </select>
//             <br></br>
//             <br></br>

//             Gender:<input type="radio" name="Gender" value={'Male'} onChange={(e) => setGendet(e.target.value)} />Male
//             <input type="radio" name="Gender" value={'Female'} onChange={(e) => setGendet(e.target.value)} />Female
//             <br />
//             <br />

//             Subject:
//             <input type="checkbox" value={'Hindi'} onChange={(e) => UpdateSub(e)} />Hindi
//             <input type="checkbox" value={'Gujarati'} onChange={(e) => UpdateSub(e)} />Gujarat
//             <input type="checkbox" value={'Physics'} onChange={(e) => UpdateSub(e)} />Physics
//             <input type="Checkbox" value={'Math'} onChange={(e) => UpdateSub(e)} />Math


//             <br />
//             <br />
//             {/* Number is : {plus.join(',')}<br></br> */}

//             <br />
//             Skills:{skills}<br /><br />
//             Gender:{gender}<br /><br />
//             Subject:{sub.join(',')}<br/><br/>
//             <button onClick={() => UpdateDatas()}>Update</button>

//         </>
//     )
// }


function MapObj() {

    const [arr, setArr] = useState([
        { name: 'raj', city: 'surat', state: 'gujarat' },
        { name: 'yash', city: 'rajkot', state: 'gujarat' },
        { name: 'navin', city: 'rajkot', state: 'gujarat' },
        { name: 'kevin', city: 'rajkot', state: 'gujarat' },
        { name: 'yash', city: 'rajkot', state: 'gujarat' },
    ]);

    const[name,setName]=useState()
    const [gen, setGen] = useState();
    const [lan,setLan]=useState();
    const [sans,setSans]=useState([]);


    function LanguageMe(e){

        if(e.target.checked){
            setSans([...sans,e.target.value])
        }
            else{
                setSans(sans.filter((item) => item != e.target.value))
        }
    }

 

    function ClickMe(){
        setArr(arr.filter ((item) => item.name == "yash" && item.city== 'rajkot'))

    }


    return (
        <>

        <table border={'1'} cellPadding={5} cellSpacing={5}>
            <tr>

                <th>Name</th>
                <th>City</th>
                <th>State</th>
            </tr>

            
                {arr.map((item) => 
                <tr>
                    <td>{item.name}</td>
                    <td>{item.city}</td>
                    <td>{item.state}</td>
                    </tr>
                )}
            
        </table>

            Name:    <input type="text"  onChange={(e)=>setName(e.target.value)}/>
            <br />
            <br />

            Gender:   <input type="radio" name="gender" value={'Male'} onChange={(e) => setGen(e.target.value)} />Male
            <input type="radio" name="gender" value={'Female'} onChange={(e) => setGen(e.target.value)} />Female
            <br />
            <br />

        Language:<select onChange={(e)=> setLan(e.target.value)}>
            <option value={''}>Select</option>
            <option value={'Hindi'}>Hindi</option>
            <option value={'English'}>English</option>
            <option value={'Japanese'}>Japanese</option>
            <option value={'Korean'}>Korean</option>
        </select>
        <br/>
        <br/>

        Subject:
        <input type="checkbox" value={'Sanskrit'} onChange={(e)=> LanguageMe(e)}/>Sanskrit
        <input type="checkbox" value={'Hindi'} onChange={(e) => LanguageMe(e)}/>Hindi
        <input type="checkbox" value={'Gujarati'}onChange={(e) => LanguageMe(e)}/>Gujarati
        <input type="checkbox" value={'English'}onChange={(e) => LanguageMe(e)}/>English
        <input type="checkbox" value={'Physics'}onChange={(e) => LanguageMe(e)}/>Physics
        <input type="checkbox" value={'Math'}onChange={(e) => LanguageMe(e)}/>Math
        <button onClick={ () =>ClickMe()}>Clickme</button>

        <br/><br/>

        



        Name:{name}<br/><br/>
        Gender:{gen}<br/><br/>
        Language:{lan}<br/><br/>
        Subject:{sans.join(',')}<br/><br/>
        </>
    )


}

export default MapObj;