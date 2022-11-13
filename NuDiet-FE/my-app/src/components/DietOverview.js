import React from "react"
import DietCalendar from "./DietCalendar"

const mockDietPlan = {
    "name": "some calendar!! nice one for sure :)",
    "group-name": "group 4",
    "id": 123,
    "meals": [
        {
            "name": "chicken salad",
            "weekday": 0,
            "time": 8,
            "recipe-id": 0,
            "ingredients": [
                {
                    "foodstuff-id": 0,
                    "amount": 1
                }
            ]
        },
        {
            "name": "chicken salad again",
            "weekday": 1,
            "time": 13,
            "recipe-id": 0,
            "ingredients": [
                {
                    "foodstuff-id": 0,
                    "amount": 1
                }
            ]
        },
        {
            "name": "chicken salad again again",
            "weekday": 4,
            "time": 6,
            "recipe-id": 0,
            "ingredients": [
                {
                    "foodstuff-id": 0,
                    "amount": 1
                }
            ]
        }
    ]
}

export default function DietOverview({dietplan, hideFunc, showFunc }) {
    // todo: replace mockDietPlan occurrences with dietplan
    return (
        <>
            <button onClick={() => { hideFunc(); showFunc(); }}>Go Back</button>
            <h1>Diet Overview</h1>
            <div style={{display:"flex"}}>
                <h2>{mockDietPlan.name}</h2>
                
                {/* <button onClick={function () {
                    
                }}>edit</button> */}
            </div>

            <button onClick={function () {
                // TODO: move these three lines somewhere where they are automatically executed after component loads
                var evt = document.createEvent("HTMLEvents");
                evt.initEvent("resize", false, true);
                window.dispatchEvent(evt);
            }}>fix UI</button>


            <DietCalendar dietplan={mockDietPlan}/>
        </>

    )
}