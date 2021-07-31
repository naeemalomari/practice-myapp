import React from 'react';
import Header from './component/header';
import Footer from './component/footer';
import Main from './component/main';
import DataArr from './component/data.json'
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import SelectedBeasts from './component/SelectedBeasts';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      image_url: '',
      description: '',
      // data: DataArr,
      show: false,
    };
  }

  modalSelected = (title,image_url,description) => {
    this.setState({
      title:title,
      image_url: image_url,
      description: description,
    });
  };
  handleShow = () => {
    this.setState({
      show: true,
    });
  };
  handleHide = () => {
    this.setState({
      show: false,
    });
  };
  render() {
    return (
      <>
        <Container >
          <Row>
            <Col>
              <Header />
            </Col>
          </Row>

          <Row >
            <Main
              data={DataArr}
              modalSelected={this.modalSelected}
              stateUpdate={this.handleShow}
            />
          </Row>
          <Row>
            <Col>
              <SelectedBeasts
                show={this.state.show}
                hide={this.handleHide}
                title={this.state.title}
                image_url={this.state.image_url}
                description={this.state.description}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Footer />
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}
export default App;