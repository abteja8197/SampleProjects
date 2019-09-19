require('normalize.css/normalize.css');

import React from 'react';
// import ReactDOM from 'react-dom';
// import { Router, Route, Link, browserHistory, IndexRoute} from 'react-router';
import HeaderComponent from './organisms/HeaderComponent';
// import SelectComponent from './atoms/SelectComponent';



class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <HeaderComponent/>
      </div>
    );
  }
}

export default AppComponent;

// class Home extends React.Component{
//   render(){
//     return(
//       <div>
//       <HeaderComponent />
//       <FormControlComponent />
//       </div>
//     )
//   }
// }

// export default Home;

// class About extends React.Component{
//   render(){
//     return(
//       <div>
//       <HeaderComponent />
//       </div>
//     )
//   }
// }
// export default About;

// class Contact extends React.Component{
//   render(){
//     return(
//       <div>
//       <FormControlComponent />
//       </div>
//     )
//   }
// }
// export default Contact;

// ReactDOM.render((
//   <Router history={browserHistory}>
//     <Route path="/" component={AppComponent}>
//       <IndexRoute component={Home}/>
//       <Route path="home" component={Home} />
//       <Route path="about" component={About} />
//       <Route path="contact" component={Contact} />
//     </Route>
//   </Router>
//   ),document.getElementById('header'))