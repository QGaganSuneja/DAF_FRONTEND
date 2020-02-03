import React from 'react';
import Header from './components/header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './pages/login';
import Chapter from './components/chapter';
import SecuredRoute from './routes/secured_routes/index';
import { Footer } from './components/footer';
import './styles/styles.scss';
class App extends React.Component {
	render() {
		return (
			<Router>
				<Header></Header>
				<Route path="/" exact component={Login}></Route>
				<Route path="/home" component={Login}></Route>
				<Route path="/login" component={Login}></Route>
				<SecuredRoute path="/chapter/:id" component={Chapter}></SecuredRoute>
				<Footer></Footer>
			</Router>
		);
	}
}

const Home = () => {
	return <div>Home</div>;
};

export default App;
