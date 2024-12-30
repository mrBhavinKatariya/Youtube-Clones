import React, { useState } from "react";


function MyDatasProps({ id, name, hindi, gujarati, sanskrit, physics, english, totals, pertg, grade }) {
    return (
        <>
            {totals !== undefined ?
                <table id="table1" >
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name </th>
                            <th>Hindi</th>
                            <th>Gujarati</th>
                            <th>Sanskrit</th>
                            <th>Physics</th>
                            <th>English</th>
                            <th>Total</th>
                            <th>Percentage</th>
                            <th>Grade</th>

                        </tr>
                    </thead>
                    <tbody id="tbodys">
                        <tr>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{hindi}</td>
                            <td>{gujarati}</td>
                            <td>{sanskrit}</td>
                            <td>{physics}</td>
                            <td>{english}</td>
                            <td>{totals}</td>
                            <td>{pertg}</td>
                            <td>{grade}</td>
                        </tr>
                    </tbody>
                </table> : null
            }
        </>

    );
}

export default MyDatasProps;