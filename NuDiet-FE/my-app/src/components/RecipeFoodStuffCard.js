import React, { useEffect, useState } from 'react'
// foodstuff
const FOODSTUFFS = [
    {
        "id": 0,
        "name": "foodStuff0",
        "unit": "g"
    },
    {
        "id": 1,
        "name": "foodStuff1",
        "unit": "g"
    },
    {
        "id": 2,
        "name": "foodStuff2",
        "unit": "g"
    },
]

const getFoodStuff = (id) => {
    const result = FOODSTUFFS.find(foodstuff => foodstuff['id'] === Number(id))
    return result;
}



export const RecipeFoodStuffCard = ({ foodstuffId, amount }) => {

    const [foodStuff, setFoodstuff] = useState(null)

    useEffect(() => {
        setFoodstuff(getFoodStuff(foodstuffId))
    }, [foodstuffId])

    return (
        <>

            {/* foodStuff = FOODSTUFFS.find(foodstuff => foodstuff.id === foodstuffId); */}

            {foodStuff && <div className="card">

                <div className="card-body">
                    <h5 className="card-title">{foodStuff.name}</h5>
                    <p className="card-text">{amount} {foodStuff.unit}</p>
                </div>
            </div>
            }

            {!foodStuff && (<div className="card">

                <div className="card-body">

                    <h5 className="card-title">Loading...</h5>

                </div>

            </div>)
            }
        </>)
}


