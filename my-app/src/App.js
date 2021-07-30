import React from 'react';
import Header from './component/header';
import Footer from './component/footer';
import Main from './component/main';
import DataArr from './component/data.json'
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
// import HornedBeasts from './component/hornedBeasts';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      image_url: '',
      description: '',
      data: DataArr,
    };
  }

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
                data={this.state.data}
          
              />
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