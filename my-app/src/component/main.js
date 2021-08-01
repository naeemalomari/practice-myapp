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
                {this.getData().map((n) => {
                    return (
                        <Col lg={3}>
                            <HornedBeasts
                                title={n.title}
                                image_url={n.image_url}
                                description={n.description}
                                modalSelected={this.props.modalSelected}
                                showModal={this.props.stateUpdate}
                            />
                        </Col>
                    );
                })}
            </>
        );
    }

}
export default Main;