import React , {useState} from "react";

function Country() {
    debugger
    const [country, setCountry] = useState([
        { cid: '1', name: 'india' },
        { cid: '2', name: 'usa' },
        { cid: '3', name: 'geremany' },
        { cid: '4', name: 'japan' },
        { cid: '5', name: 'china' },
        { cid: '6', name: 'korea' },
        { cid: '7', name: 'canada' }
    ]);

    const [state, setState] = useState([

        { sid: '1', name: 'gujarat', cid: '1' },
        { sid: '2', name: 'califonia', cid: '2' },
        { sid: '2', name: 'florida', cid: '2' },
        { sid: '2', name: 'alaska', cid: '2' },
        { sid: '3', name: 'hessen', cid: '3' },
        { sid: '3', name: 'kansai', cid: '3' },
        { sid: '3', name: 'yunnan', cid: '3' },
        { sid: '3', name: 'Gansu', cid: '3' },
        { sid: '4', name: 'Hainan', cid: '4' },
        { sid: '4', name: 'Heilongjiang', cid: '4' },
        { sid: '4', name: 'Shandong', cid: '4' },
        { sid: '5', name: 'bavaria', cid: '5' },
        { sid: '1', name: 'punjab', cid: '1' },
        { sid: '5', name: 'Iowa', cid: '5' },
        { sid: '5', name: 'Oregon', cid: '5' },
        { sid: '7', name: 'Texas', cid: '7' },
        { sid: '6', name: 'Busan', cid: '6' },
        { sid: '6', name: 'Daegu', cid: '6' },
        { sid: '6', name: 'Chungcheongnam', cid: '6' },
        { sid: '6', name: 'Seoul', cid: '6' },
        { sid: '1', name: 'haryana', cid: '1' },
        { sid: '1', name: 'aasam', cid: '1' },
        { sid: '1', name: 'goa', cid: '1' },
        { sid: '1', name: 'meghalays', cid: '1' },
        { sid: '1', name: 'sikkim', cid: '1' },
        { sid: '1', name: 'tripura', cid: '1' },
        { sid: '1', name: 'odisha', cid: '1' },
        { sid: '7', name: 'Columbia', cid: '7' },
        { sid: '7', name: 'Brunswick', cid: '7' }
    ])

    const [city, setCity] = useState([
        { id: '1', name: 'surat', sid: '1' },
        { id: '2', name: 'ahemdabad', sid: '1' },
        { id: '3', name: 'rajkot', sid: '1' },
        { id: '4', name: 'newyork', sid: '2' },
        { id: '5', name: 'chicago', sid: '1' },
        { id: '6', name: 'mumbai', sid: '1' },
        { id: '7', name: 'kolkata', sid: '1' },
        { id: '8', name: 'delhi', sid: '1' },
        { id: '9', name: 'Ontario', sid: '7' },
        { id: '10', name: 'Halifax', sid: '7' },
        { id: '11', name: 'Victoria', sid: '7' },
        { id: '12', name: 'banglore', sid: '1' },
        { id: '13', name: 'Dallas', sid: '2' },
        { id: '14', name: 'Chicago', sid: '2' },
        { id: '15', name: 'Angeles', sid: '2' },
        { id: '16', name: 'Philadelphia', sid: '2' },
        { id: '17', name: 'Daegu', sid: '6' },
        { id: '18', name: 'Ulsan', sid: '6' },
        { id: '19', name: 'Ansan', sid: '6' },
        { id: '20', name: 'Namyangju', sid: '6' },
        { id: '21', name: 'Chongqing', sid: '5' },
        { id: '22', name: 'Beijing', sid: '5' },
        { id: '23', name: 'Guangzhou', sid: '5' },
        { id: '24', name: 'Tokyo', sid: '4' },
        { id: '25', name: 'Yokohama', sid: '4' },
        { id: '26', name: 'Osaka', sid: '4' },
        { id: '27', name: 'Sapporo', sid: '4' },
        { id: '28', name: 'Dresden', sid: '3' },
        { id: '29', name: 'Munich', sid: '3' },
        { id: '30', name: 'Bonn', sid: '3' },
        { id: '31', name: 'Saarbrücken', sid: '3' },
        { id: '32', name: 'Schleswig', sid: '3' }


    ]);


    const [sstate,setSstate]=useState();
    const[fstate,setFstate]=useState([]);
    const[scity,setScity]=useState([]);
    const[newstate,setnewstate]=useState('');
    const [newcity,setNewcity]=useState('');

    const States =(e)=>{
        debugger
      const value=e.target.value;
      setnewstate(value);

      const filtetstate=state.filter((item) => item.cid ==value)
        setFstate(filtetstate);

    }

    const Citys =(e) =>{
       const value=e.target.value;
        setNewcity(value);
       const filterCity=city.filter((item)=> item.sid==value);
       setScity(filterCity);
    }



    return (
        <>
        <form>
            <h3>Welcome To Coffees Cafe</h3>
        Country:
        <select onChange={States}>
            <option>Select Country</option>
            {country.map((item) =>
                <option value={item.cid}>{item.name}</option>
            )}

        </select><br/><br/>

        State:
        <select disabled={!newstate} onChange={Citys}>
            <option>Select State</option>
            {fstate.map ((item) =>
            <option value={item.sid}>{item.name}</option>
        )}
        </select><br/><br/>

        City:
        <select disabled={!newcity}>
            <option>Select City</option>
            {scity.map ((item) =>
            <option value={item.sid}>{item.name}</option>
        )}
        </select>



        </form>
        
        
        </>
    )

}

export default Country;