import React, { useState } from 'react'
import { Button, Form, Card, Table} from 'react-bootstrap'

const Configure = () => {
  const [prizes, setPrizes] = useState([{
    id:1,
    name: "rest 10 min",
    value: 20,
  },{
    id:2,
    name: "rest 20min",
    value: 10,
  },{
    id:3,
    name: "20 pushups",
    value: 40,
  }]);
  
//TOFIX: make so that the rendering process have no error
  let renderTable = 
    <Table>
      <thead>
        <tr>
          {Object.keys(prizes[0]).map((title,key) => <th key={key}>{title}</th>)}
        </tr>
      </thead>
      <tbody>
        {prizes.map((prizes,key) => {
          return(
            <tr key={key}>
              <td>{key}</td>
              <td>{prizes.name}</td>
              <td>{prizes.value}</td>
            </tr>
          )
        })}
      </tbody>
    </Table>
    
  return (
    <>
      {/* make into component */}
      <Card body>
        <Form>
          <Form.Group controlId="field1">
            <Form.Label>Reward Name</Form.Label>
            <Form.Control placeholder="Enter Reward Name" />
          </Form.Group>
        </Form>
        <Form>
          <Form.Group controlId="Weight">
            <Form.Label>Weight</Form.Label>
            <Form.Control placeholder="Enter " />
            <Form.Text className="text-muted">
              The weight will be used to calculate the percentage of reward.
            </Form.Text>
          </Form.Group>
        </Form>
        <Button type="submit">
          Submit
        </Button>
      </Card>

      {/* resulting table */}
      {renderTable}
      
    </>
  )
}

export default Configure