import React, {useState} from 'react';
import DevelopmentView from "./DevelopmentView";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Card from "react-bootstrap/Card";
import "../styles/ClientOverview.css"
import DietOverview from "./DietOverview";
import DietCalendar from "./DietCalendar";
import Development from "./Development";

function ClientOverview({id, hideFunc, showFunc}) {
    let mockData = {
        "id": 0,
        "first-name": "john",
        "last-name": "Doe",
        "sex": "M",
        "date-of-birth": "20010916",
        "email": "john.doe@gmail.com",
        "height": 0,
        "goal": {
            "weight": 0,
            "muscular-mass": 0,
            "fat-mass": 0
        },
        "bodyprogress": [{
            "(yyyymmdd)": 20220101,
            "weight": 0,
            "muscular-mass": 0,
            "fat-mass": 0
        }],
        "diet-plan": {
            "meals": {
                "(0-6)": {
                    "(0-23)": {
                        "recipe-id": 0,
                        "ingredients": [
                            {
                                "foodstuff-id": 0,
                                "amount": 0
                            }
                        ]
                    }
                }
            }
        }
    }
    let mockDietPlan = {
        "name": "new",
        "group-name": "null",
        "id": 0,
        "meals": [
        ]
    }
    const [data, setData] = useState(mockData)

    console.log(id)
    const [x, setX] = useState(-1)
    if(x!= id){
        fetch('http://localhost:8000/clients/'+ id.toString() ).then(res => res.json()).then(json => setData(json))
        setX(id)
    }

    let dietPlan = {"name": "new",
                    "group-name": "null",
                    "id": 0,
                    "meals":[] /*data["dietPlan"]["meals"]*/}
    // Modify Personal info
    // console.log(data)
    const [modify, setModify] = useState(true)
    const handleModifyOn = () => (setModify(false))
    const handleModifyOff = () => (setModify(true))

    const sendPerData = (event) =>{ // add Put request
        event.preventDefault();
        let dataToSend =
            {
                "first-name": event.target.perFName.value,
                "last-name": event.target.perLName.value,
                "sex":event.target.perSex.value,
                "date-of-birth": event.target.perDate.value,
                "email": event.target.perEmail.value,
                "height": event.target.perHeight.value,
                "goal": {
                    "weight": event.target.goalWeight.value,
                    "muscular-mass": event.target.goalMuscle.value,
                    "fat-mass": event.target.goalFat.value
                }
            }
        console.log(dataToSend)
    }
    return (
        <div>
            <button onClick={() => { hideFunc(); showFunc();}}>Go Back</button>
            <div className={"main-div"}>
                <Card>
                    <Card.Title className="text-center"> <h2> Personal Information</h2></Card.Title>

                    <div><button className="button" onClick={handleModifyOn}>Modify</button></div>
                    <form onSubmit={sendPerData}>
                        <button className="button" onClick={handleModifyOff}>Save </button> {/*ADD PUT REQUEST*/}
                        <ul>
                            <div className="input"> First Name: </div><input onKeyPress={(event) => {if (!/[A-Za-z]/.test(event.key)) {event.preventDefault();}}}
                                               name="perFName" placeholder={data["first-name"]} disabled={modify}  maxLength="10"/> <br/>
                            <div className="input">Last Name:</div> <input onKeyPress={(event) => {if (!/[A-Za-z]/.test(event.key)) {event.preventDefault();}}}
                                              name="perLName" placeholder={data["last-name"]} disabled={modify}/> <br/>
                            <div className="input">Sex:</div> <select name="perSex" placeholder={data["sex"]} disabled={modify}>
                                    <option value="M">Male</option>
                                    <option value="F">Female</option>
                                    <option value="O">Other</option>
                                </select> <br/>
                            <div className="input">Date of Birth:</div> <input onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}}
                                                  name="perDate" placeholder={data["date-of-birth"]} disabled={modify} minLength={8} maxLength={8} /> <br/>
                            <div className="input">Email:</div> <input name="perEmail" placeholder={data["email"]} disabled={modify}/> <br/>
                            <div className="input">Height:</div> <input onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}}
                                           name="perHeight" placeholder={data["height"]} disabled={modify}/> <br/>

                        </ul>
                        <h4>Goal</h4>
                        <ul>
                            <div className="input">Weight: </div><input onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}}
                                           name="goalWeight" placeholder={data.goal["weight"]} disabled={modify}/> <br/>
                            <div className="input">Fat mass: </div><input onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}}
                                             name="goalFat" placeholder={data.goal["fat-mass"]} disabled={modify}/> <br/>
                            <div className="input">Muscular mass: </div><input onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}}
                                                  name="goalMuscle" placeholder={data.goal["muscular-mass"]} disabled={modify}/> <br/>
                        </ul>
                    </form>
                </Card>
                <Card>
                    <Card.Title className="text-center"><h2>Development View</h2> </Card.Title>
                    <Development data={data}></Development>

                </Card>
                <Card>
                    <Card.Title className="text-center"><h2>Diet view</h2></Card.Title>
                    <DietCalendar  dietplan={dietPlan}/>
                </Card>
            </div>
        </div>
    );
}

export default ClientOverview;