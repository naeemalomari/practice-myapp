import React from 'react';
import { Col } from 'react-bootstrap';
import HornedBeasts from './hornedBeasts';
import "bootstrap/dist/css/bootstrap.min.css";
class Main extends React.Component {
// constructor(props){
//     super(props){
//         this.setState(){

//         }
//     }
// }
getData() {
    let dataArr = JSON.parse(JSON.stringify(this.props.data));
    return dataArr;
  }
    render() {
        return (
            <>
        {this.getData().map((element)=> {
            return (
                <Col lg={4}> 
                <HornedBeasts
                title={element.title}
                image_url={element.image_url}
                description={element.description}
                />
                </Col>
            );
        })}
            </>
        );
    }

}
export default Main;