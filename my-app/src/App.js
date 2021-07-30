import React from 'react';
import Header from './component/header';
import Footer from './component/footer';
import Main from './component/main';
import HornedBeasts from './component/hornedBeasts';
class App extends React.Component{
render() {
  return(
    <>
  <Header />
  <Main /> 
  <Footer /> 
  {/* <HornedBeasts /> */}
    </>
  )
}
}
export default App;