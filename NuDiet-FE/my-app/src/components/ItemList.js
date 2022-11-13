import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';

function ItemList({data, filter, hideFunc, showFunc}) {
    let rawData = [];
    data.forEach(client => ((client.name).toLowerCase().match(filter.toLowerCase()) == null) ? null : rawData.push(client))

    return (
        <div>
            <div className="item-list">
                {rawData.map((data, i) =>
                    <Card key={data.id} className="item-list--item" style={{ width: '12rem', height:'10rem' }}  >
                        <Card.Body>
                            <Card.Title>{data.name}</Card.Title>
                            <button onClick={() => { hideFunc(); showFunc(i);}}>View</button>
                        </Card.Body>
                    </Card>
                    )}
            </div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Add a client</Card.Title>
                    <button onClick={() => { hideFunc(); showFunc(null);}} variant="primary">+</button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ItemList;
