import React from 'react';
import { Router, Route, Link, IndexRoute, Redirect, hashHistory } from 'react-router';

// const Outer = (props) => <div>
//   <h1>Our Site</h1>
//   <Links />
//   {props.children}
// </div>;
//
// const About = () => <div>
//   <h1>About</h1>
// </div>;
//
// const Contact = () => <div>
//   <h1>Contact</h1>
// </div>;
//
//
// const Links = () =>
//   <nav>
//     <Link activeStyle={{color: 'green'}} to="/">Home</Link>
//     <Link activeStyle={{color: 'green'}} to="/about">About</Link>
//     <Link activeClassName="active" to="/contact">Contact</Link>
//   </nav>;
//
// class App extends React.Component {
//   render(){
//     return (
//       <Router history={ hashHistory }>
//         <Route path="/" component={Outer}>
//           <IndexRoute component={About}></IndexRoute>
//           <Route path="contact" component={Contact}></Route>
//         </Route>
//       </Router>
//     );
//   }
// }


// const Links = () =>
//   <nav>
//     <Link to="/">Hello</Link>
//     <Link to="/Hi">Hi</Link>
//     <Link to="/Yo">Yo</Link>
//   </nav>
//
// const Message = (props) =>
//   <div>
//     <h1>{props.params.message || 'Hello'}</h1>
//     <Links />
//   </div>
//
//
// class  App extends React.Component {
//
//   render() {
//     return (
//       <Router history={ hashHistory }>
//         <Route path="/(:message)" component={Message}></Route>
//       </Router>
//     );
//   }
// }

// const Home = () => <h1>Home</h1>;
// const HomeBody = () => <div>this is the home body</div>;
// const Other = () => <h1>Other</h1>;
// const OtherBody = () => <div>this is the Other body</div>;
//
// const Container = (props) =>
//   <div>{props.header}{props.body}<Links/></div>;
//
// const Links = () =>
//   <nav>
//     <Link to="/">Home</Link>
//     <Link to="/other">Other</Link>
//   </nav>;
//
// class App extends React.Component {
//   render() {
//     return (
//       <Router history={ hashHistory }>
//         <Route path="/" component={Container}>
//           <IndexRoute components={ { header: Home, body: HomeBody}}></IndexRoute>
//           <Route path="/other" components={ { header: Other, body: OtherBody}}></Route>
//         </Route>
//       </Router>
//     );
//   }
// }


// const Links = () =>
//   <nav>
//     <Link to={ {pathname: '/', query: {message: 'Yo'}}}>Yo</Link>
//   </nav>
//
//
//
// const Page = (props) =>
//   <div>
//     <h1>{props.location.query.message || 'Hello'}</h1><Links/>
//   </div>;
//
//
// class App extends React.Component {
//   render(){
//     return (
//       <Router history={hashHistory}>
//         <Route path="/" component={Page}></Route>
//       </Router>
//     );
//   }
//

// const Home = () => <div>
//   <h1>Our Site</h1>
//   <Links />
// </div>;
//
// const About = () => <div>
//   <h1>About Us</h1>
//   <Links />
// </div>;
//
// const Contact = () => <div>
//   <h1>Contact</h1>
//   <Links />
// </div>;
//
//
// const Links = () =>
//   <nav>
//     <Link to="/">Home</Link>
//     <Link to="/about-us">About Us</Link>
//     <Link to="/about">About</Link>
//     <Link to="/contact">Contact</Link>
//   </nav>;
//
// class App extends React.Component {
//   render(){
//     return (
//       <Router history={ hashHistory }>
//         <Route path="/" component={Home}></Route>
//         <Route path="/about-us" component={About}></Route>
//         <Route path="/contact" component={Contact}></Route>
//         <Redirect from="/about" to="/about-us"></Redirect>
//       </Router>
//     );
//   }
// }

// const Home = () => <div>
//
// </div>;

class Home extends React.Component {
  componentWillMount() {
    this.context.router.setRouteLeaveHook(
      this.props.route,
      this.routerWillLeave
    );
  }

  routerWillLeave( nextLocation ) {
    return `leaving home for ${nextLocation.pathname}`;
  }

  render(){
    return (
      <div>
        <h1>Home</h1>
        <Links />
      </div>
    );
  }
}

Home.contextTypes = { router: React.PropTypes.object.isRequired };

const About = () => <div>
  <div><h1>About</h1></div>
  <Links />
</div>;

const Links = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="about">About</Link>
    </nav>
  );
};

const App = () => {
  return (
    <Router history={ hashHistory }>
      <Route path="/" component={Home}></Route>
      <Route path="/about" component={About}></Route>
    </Router>
  );
};


export default App;
