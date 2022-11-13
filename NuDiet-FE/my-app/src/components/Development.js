import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import DevelopmentView from "./DevelopmentView";
import {Table} from "react-bootstrap";
import Tabs from "react-bootstrap/Tab";
import Tab from "react-bootstrap/Tab";

function Development({data}) {
    let bodyProgress = data["bodyprogress"]
    // Date
    const [startDate, setStartDate] = useState(new Date());
    // send body development to backend
    const sendDevData = (event) => {
        event.preventDefault();
        let dataToSend =
            {
                "(yyyymmdd)": startDate,
                "weight": event.target.devWeight.value,
                "muscular-mass": event.target.devMuscle.value,
                "fat-mass": event.target.devFat.value
            };
        bodyProgress.push(dataToSend)
        console.log(bodyProgress)

    }


    // Modify data button
    const [hideClientDataEditor, setHideClientDataEditor] = useState(true)
    const [modDataButton, setModDataButton] = useState("Show data")
    const handleHideClientDataEditor = () => {setHideClientDataEditor(true);setModDataButton("Show data")}
    const handleShowClientDataEditor = () => {setHideClientDataEditor(false);setModDataButton("Hide")}
    //body dev to display
    // const [bodyDevDisplay, setBodyDevDisplay] = useState(data["bodyprogress"])
    // const handleDev = (newData) => {setBodyDevDisplay(bodyDevDisplay.push(newData))}
    // //handle delete in prgress
    // const handleDelete = (index, e, dev) => {
    //     e.target.parentNode.parentNode.parentNode.deleteRow(index)
    //     bodyProgress.pop(dev)
    // }
    // test for different body progress
    // function handleProgressChange(){
    //     return bodyProgress.map((dev, index)=>( <tr>
    //         <td>{dev["(yyyymmdd)"]}</td>
    //         <td><input placeholder={dev["weight"]}/></td>
    //         <td><input placeholder={dev["muscular-mass"]}/></td>
    //         <td><input placeholder={dev["fat-mass"]}/></td>
    //         <td><button onClick={e =>(handleDelete(index,  e, dev), console.log(bodyProgress))}>Delete</button></td>
    //     </tr>))
    // }
    return (
        <div>

            <DevelopmentView/>
            {/*<button id="mod-data" onClick={(modDataButton=="Hide") ? handleHideClientDataEditor: handleShowClientDataEditor}>{modDataButton}</button>
            <div hidden={hideClientDataEditor}>
                <Table striped>
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>Weight</th>
                        <th>Muscular Mass</th>
                        <th>Fat Mass</th>
                    </tr>

                    </thead>
                    <tbody>
                    {handleProgressChange()}
                    </tbody>
                </Table>
            </div>*/}
            <h5>Input New Data</h5>
            <form onSubmit={sendDevData}>
                <div className="input">Date: </div> <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} />
                <div className="input">Weight: </div><input onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}}
                                                            name="devWeight" /> <br/>
                <div className="input">Fat mass: </div><input onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}}
                                                              name="devFat" /> <br/>
                <div className="input">Muscular mass:</div> <input onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}}
                                                                   name="devMuscle"/> <br/>
                <button type="submit" >Add data</button>
            </form>
        </div>
    );
}

export default Development;