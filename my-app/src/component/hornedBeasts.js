import React from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from 'react-bootstrap';


class HornedBeasts extends React.Component{
    render(){
        return(
            <>
            <Card style={{ width: '18rem' }}>
            <Card.Title>Horned Beasts Image </Card.Title>
  <Card.Img variant="top" src={this.props.image_url} />
  <Card.Body>
 
    <Card.Text >{this.props.title}</Card.Text>
    <Card.Text >{this.props.description}</Card.Text>

  </Card.Body>
</Card>
            </>
        )
    }
    
    }
    export default HornedBeasts ;