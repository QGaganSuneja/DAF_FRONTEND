import React from 'react';
import Header from './components/header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './pages/login';
import Module, { Introduction } from './components/module/index';
import SecuredRoute from './routes/secured_routes/index';
import { Footer } from './components/footer';
import Navigation from './pages/navigation/index';
import './styles/styles.scss';
class App extends React.Component {
	render() {
		return (
			<Router>
				<Header></Header>
				<Route path="/" exact component={Login}></Route>
				<Route path="/home" component={Login}></Route>
				<Route path="/login" component={Login}></Route>
				<Route path="/course" exact component={Navigation}></Route>
				<SecuredRoute path="/module/:id" component={Module}></SecuredRoute>
				{/* <SecuredRoute path="/course" component={}></SecuredRoute> */}
				<Footer></Footer>
			</Router>
		);
	}
}

const Home = () => {
	return <div>Home</div>;
};

export default App;
