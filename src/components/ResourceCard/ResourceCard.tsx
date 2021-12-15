import React from 'react'
import { Card } from 'react-bootstrap'

interface Props {
    resource: {
        name: string,
        year: number,
        color: string,
        pantone_value: string
    } | null
}

const ResourceCard = (props: Props) => {
  if (!props.resource) {
    return null
  }
  const { name, year, color, pantone_value } = props.resource

  return (
    <Card>
        <Card.Body>
            <Card.Title> Name : { name } </Card.Title>
            <Card.Text>
                Year : {year}
                <br/>
                Color code: {color}
                <br/>
                Pantone: {pantone_value}
                <br/>
            </Card.Text>
            <div style={{'height': '75px', 'width': '75px', 'backgroundColor': `${color}`, 'borderRadius': '50px'}}/>
        </Card.Body>
    </Card>
    );
}

export default ResourceCard
