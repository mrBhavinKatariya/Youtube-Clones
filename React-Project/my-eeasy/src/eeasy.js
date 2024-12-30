import { isDisabled } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';

function Forms() {
    debugger
    const [names, setNames] = useState([
        { id: '1', name: 'raj' },
        { id: '2', name: 'yash' },
        { id: '3', name: 'jay' },
        { id: '4', name: 'rajesh' },
        { id: '5', name: 'syam' },
        { id: '6', name: 'ram' },
        { id: '7', name: 'mohit' },
        { id: '8', name: 'vinam' },
        { id: '9', name: 'dhyana' },
        { id: '10', name: 'khushi' }
    ])


    const [Filterdata, setFilterdata] = useState([]);

    function UpRecord(e) {
        debugger

        const value = e.target.value;
        const index = names.findIndex((item) => item.id === value)

        if (index > 0) {
            const arr = [...names];
            const temp = arr[index];
            arr[index] = arr[index - 1];
            arr[index - 1] = temp;

            setNames(arr)

        }

    }

    function DownRecord(e) {
        debugger
        const value = e.target.value;
        const index = names.findIndex((item) => item.id === value)

        if (index < names.length - 1) {
            const arr = [...names];
            const temp = arr[index];
            arr[index] = arr[index + 1];
            arr[index + 1] = temp;

            setNames(arr);


        }

    }




    return (
        <React.Fragment>
            <div>
                <table cellspacing='5' cellpadding='5' border='1'>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th colSpan={2}>Action</th>
                    </tr>


                    {names.map((item, i) =>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td><button disabled={i === 0} value={item.id} onClick={UpRecord}>Up</button></td>
                            <td><button disabled={i===9} value={item.id} onClick={DownRecord}>Down</button></td>
                        </tr>
                    )}


                </table>
            </div>
        </React.Fragment>
    )
}

export default Forms;