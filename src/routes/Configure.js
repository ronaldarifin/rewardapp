import React, { useState } from 'react'
import { Button, Form, Card, Table} from 'react-bootstrap'

const Configure = () => {
  // to understand this. We basicallly want to have a name. In our first proto.
  // the we need to compute the percentage of it getting the reward.
  const [prizes, setPrizes] = useState([{
    // id:1,
    name: "rest 10 min",
    value: 20,
  },{
    // id:2,
    name: "rest 20min",
    value: 10,
  },{
    // id:3,
    name: "20 pushups",
    value: 40,
  }]);
  const [viewablePrizes, setViewablePrizes] = useState(false)
  const [weight, setWeight] = useState("")
  const [name, setName] = useState("")
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
              <td>{key + 1}</td>
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
            <Form.Control placeholder="Enter Reward Name" onChange={(e) => setName(e.target.value)}/>
            {/* <input onChange={(e) => setName(e.target.value)}/> */}
          </Form.Group>
        </Form>
        <Form>
          <Form.Group controlId="Weight">
            <Form.Label>Weight</Form.Label>
            <Form.Control placeholder="Enter " onChange={(e) => setWeight(e.target.value)}/>
            {/* <input onChange={(e) => setWeight(e.target.value)}/> */}
            <Form.Text className="text-muted">
              The weight will be used to calculate the percentage of reward.
            </Form.Text>
          </Form.Group>
        </Form>
        <Button type="submit" onClick={() => {
          console.log(weight,name)
          setPrizes([...prizes,{name,value:weight}]);setViewablePrizes(true);}}>
        {/* [...prevState,{weight, name}] */}
          Submit
        </Button>
      </Card>

      {/* resulting table */}
      {renderTable}
      {/* {viewablePrizes && <div>There is a prize</div>} */}
    </>
  )
}

export default Configure