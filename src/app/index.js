import 'react';
import ReactDOM from 'react-dom';
// import MyComponent from "./App";
import App from './App';
import store from '../config/store';
import { Provider } from 'react-redux';
if (localStorage.DFA_USER_TOKEN) {
}
// ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);
