import React from "react"

import WeekCalendar from 'react-week-calendar';
import 'react-week-calendar/dist/style.css';
import moment from "moment";
import DietCalendarDayCell from "./DietCalendarDayCell"
import DietCalendarEvent from "./DietCalendarEvent"


export default function DietCalendar({dietplan}){
    var idCounter = 0;
    const timeZone = new Date().getTimezoneOffset()/60
    const calendarStart = new Date(2022, 10, 7, 0 - timeZone)
    const firstDay = moment(calendarStart)
    const events = dietplan.meals.map((meal, i) => {

        const startTime = meal.time - meal.time%3 + 1;
        return {
            "id":idCounter++,
            "value":meal.name,
            "start": moment(new Date(2022, 10, 7 + meal.weekday, startTime - timeZone)),
            "end": moment(new Date(2022, 10, 7 + meal.weekday, startTime - timeZone ))
        }
    })

    // GITHUB LINK OF CALENDAR LIBRARY IN USE: 
    // https://github.com/birik/react-week-calendar/blob/master/src/WeekCalendar.js

    return (
        <div className="calendar-wrap">
            <WeekCalendar className="calendar"
                dayFormat='ddd'
                firstDay={firstDay}
                scaleUnit={180}
                scaleFormat="HH"
                startTime={moment({ h: 6})}
                cellHeight={100}
                dayCellComponent={DietCalendarDayCell}
                eventComponent={DietCalendarEvent}
                onIntervalSelect={function (e) {
                    console.log("create", e)
                    const evt = e[0]
                    events.push({
                        "id":idCounter++,
                        "start": moment(evt.start),
                        "end": moment(evt.end),
                        "value": evt.value
                    })
                }}
                onIntervalUpdate={function(e) {
                    console.log("update",e)
                    events.splice(events.findIndex((elem)=>elem.id === e.id), 1, e)
                }}
                onIntervalRemove={function(e){
                    console.log("delete", e)
                    events.splice(events.findIndex((elem) => elem.id === e.id), 1)
                }}
                selectedIntervals={events}
            />
        </div>
    )

}


