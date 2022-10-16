import React, { useState, useEffect} from 'react'
import { Button, Form, Card, Table} from 'react-bootstrap'

const Configure = () => {
  const [prizes, setPrizes] = useState([{
    name: "rest 10 min",
    weight: 20,
  },{
    name: "rest 20min",
    weight: 10,
  },{
    name: "20 pushups",
    weight: 40,
  }]);
  //form individual states
  const [prizeName,setPrizeName] = useState("");
  const [weight,setWeight] = useState(0);
  
//TOFIX: make so that the rendering process have no error
  let renderTable = (
    <table>
      {/* <thead>
        <tr>
          {Object.keys(prizes[0]).map((title,key) => <th key={key}>{title}</th>)}
        </tr>
      </thead> */}
      <tbody>
        {prizes.map((prizes,key) => {
          return(
            <tr key={key}>
              <td>{prizes.name}</td>
              <td>{prizes.value}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )

  const handlePrizeName = (e) => {
    setPrizeName(e.target.value);
  }
  const handleWeight = (e) => {
    setWeight(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name:prizeName,
      weight:weight
    }
    // debugger;
    setPrizes((prevState) => {
      [...prevState,data];
    });
    console.log(data);
    // debugger;
  }
  useEffect(() => {
    console.log(prizes)
  }, [prizes])
  
    
  return (
    <>
      {/* make into component */}
      <Card body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="field1">
            <Form.Label>Reward Name</Form.Label>
            <Form.Control placeholder="Enter Reward Name" onChange={handlePrizeName}/>
          </Form.Group>
        </Form>
        <Form>
          <Form.Group controlId="Weight">
            <Form.Label>Weight</Form.Label>
            <Form.Control placeholder="Enter Weight " onChange={handleWeight}/>
            <Form.Text className="text-muted" >
              The weight will be used to calculate the percentage of reward.
            </Form.Text>
          </Form.Group>
          <Button onClick={(e) => handleSubmit(e)}>
            Submit
          </Button>
        </Form>
      </Card>

      {/* resulting table */}
      {renderTable}
      
    </>
  )
}

export default Configure