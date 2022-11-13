import React from 'react';

import DietListItem from './DietListItem'

export default function DietList({ type, filter, hideFunc, showFunc }) {
    const data = []
    let mockData = [
        { "id": 1, "name": "Plan1" },
        { "id": 2, "name": "some other plan" },
        { "id": 3, "name": "best diet ever" },
        { "id": 4, "name": "only broccc" },
        { "id": 5, "name": "chicken and beer all day long" },
        { "id": 6, "name": "treat YYYourself" },
        { "id": 7, "name": "become a model in 12 weeks (empty)" },
        { "id": 8, "name": "generic vegan" },
    ];
    mockData.forEach(item => ((item.name).toLowerCase().match(filter.toLowerCase()) == null) ? null : data.push(item));
    return (
        <div className="item-list">
            {data.map((data, i) =>
                <DietListItem key={data.id} name={data.name} onButtonClick={function () {hideFunc(); showFunc();}} buttonText="View"/>
            )}
            <DietListItem key={12345678} name={"Add Plan"} onButtonClick={function () { console.log("create diet plan pop-up") }} buttonText="Add" />
        </div>
    );
}
