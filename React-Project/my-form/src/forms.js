import React, { useState } from 'react';
import MyDatasProps from './form1';

function FormNames() {

  const [name, setName] = useState('');
  const [id, setId] = useState("");
  const [hindi, setHindi] = useState();
  const [gujarati, setGujarati] = useState();
  const [physics, setPhysics] = useState();
  const [sanskrit, setSanskrit] = useState();
  const [english, setEnglish] = useState();
  const [arr, setArr] = useState([]);
  const [data, setData] = useState();
  const [totals, setTotals] = useState();
  const [pertg, setPertg] = useState();
  const [grade, setGrade] = useState();



  function BtnClick() {
    debugger
    var mtotal = parseInt(hindi) + parseInt(gujarati) + parseInt(sanskrit) + parseInt(physics) + parseInt(english);
    setTotals(mtotal)
    setPertg((mtotal * 100) / 500);

    var mtotals=((mtotal*100)/500);

    debugger
    if (mtotals >= 91 && mtotals <= 99.9) {
      setGrade('A1')

    }
    
    else if (mtotals >= 81 && mtotals <= 90) {
      setGrade('A2')
    }

    else if (mtotals >= 71 && mtotals <= 80) {
      setGrade('B1')
    }

    else if (mtotals >= 61 && mtotals <= 70) {
      setGrade('B2')
    }

    else if (mtotals >= 51 && mtotals <= 60) {
      setGrade('C')
    }

    else if (mtotals >= 41 && mtotals <= 50) {
      setGrade('D')
    }

    else if (mtotals >= 33 && mtotals <= 40) {
      setGrade('E')
    }
    else if (mtotals <= 100) {
      setGrade('Re-Enter Marks')
    }

    else {
      setGrade("Fail")
    }
  }




  return (
    <>
      <div id='div1'>
        <td><span>Id:</span><input type='number' value={id} onChange={(e) => setId(e.target.value)}></input></td>
        <td><span>Name:</span><input type='text' value={name} onChange={(e) => setName(e.target.value)}></input></td>
        <td><span>Hindi:</span><input type='number' value={hindi} onChange={(e) => setHindi(e.target.value)}></input>  </td>
        <td><span>Gujarati:</span><input type='number' value={gujarati} onChange={(e) => setGujarati(e.target.value)}></input></td>
        <td><span>Sanskrit:</span><input type='number' value={sanskrit} onChange={(e) => setSanskrit(e.target.value)}></input></td>
        <td><span>Physics:</span><input type='number' value={physics} onChange={(e) => setPhysics(e.target.value)}></input></td>
        <td><span>English:</span><input type='number' value={english} onChange={(e) => setEnglish(e.target.value)}></input></td>

        <button onClick={() => BtnClick()}>Calculate</button>



      </div>
      <MyDatasProps id={id} name={name} hindi={hindi} gujarati={gujarati} sanskrit={sanskrit} physics={physics} english={english} totals={totals} pertg={pertg} grade={grade} />

    </>
  )



}

export default FormNames;
