import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

class HornedBeasts extends React.Component {
    constructor(props){
        super(props);

        this.state={
            counter:0
        };
    }
    clicking = () => {
        this.setState({
            counter:this.state.counter + 1,
        });
        this.props.showModal();
        this.props.modalSelected(
            this.props.title,
            this.props.image_url,
            this.props.description,
        );
    };

    render() {

        return (
            <>
                <Card style={{ width: '18rem' }} onClick={this.clicking} >
                    <Card.Img variant="top" src={this.props.image_url} />
                    <Card.Body>

                        <Card.Text >{this.props.title}</Card.Text>
                        <Card.Text >{this.props.description}</Card.Text>
                    </Card.Body>
                    <Button> Click Me For Voting ❣️ :{this.state.counter} </Button>
                </Card>
            </>
        )
    }

}
export default HornedBeasts;