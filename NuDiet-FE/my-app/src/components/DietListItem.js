import React from 'react';

import Card from 'react-bootstrap/Card';

export default function DietListItem(props) {
    return (
        <Card className="item-list--item" style={{ width: '14rem', height: '9rem' }} >
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <button onClick={() => { props.onButtonClick() }}>{props.buttonText}</button>
            </Card.Body>
        </Card>
    )
}