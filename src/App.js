import React from 'react';
import Header from './component/header';
import Footer from './component/footer';
import Main from './component/main';
import DataArr from './component/data.json'
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col , Form} from 'react-bootstrap';
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
      filteredData:DataArr,
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
  getNumOfHorns=(event)=>{
// event.preventDefault(); this is just for submit , onchange don't need to preventDefault 
// console.log(event.target.value);
let horns =event.target.value;
let filterData = DataArr.filter((item) => {

  if (item.horns == horns)
  {
    return true;
  }
  if(horns =='all'){
    return true;
  }
  
})
this.setState({
  filteredData:filterData,
  })

  }
  render() {
    return (
      <>
        <Container >
          <Row>
            <Col>
              <Header />
              <Form.Label > How many horns ? </Form.Label> 

              <Form.Select aria-label="Default select example" onChange={this.getNumOfHorns}>
  <option value='All'> All </option>
  <option value="1"> One </option>
  <option value="2"> Two </option>
  <option value="3"> Three </option>
  <option value="100"> Wow.. </option>

</Form.Select>
            </Col>
          </Row>

          <Row >
            <Main
              data={this.state.filteredData}
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