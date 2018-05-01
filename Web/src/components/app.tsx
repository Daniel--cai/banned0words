import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Home from '../routes/home';
import Game from '../routes/Game';
import Lobby from '../routes/Lobby'
export interface Props {

}

export interface State {

}

export default class App extends Component<Props, State> {
	handleRoute(e) {
		// this.currentUrl = e.url;
	};
	render() {
		return (
			<div id="app">
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Game path="/game/" />
					<Lobby path="/lobby" />
				</Router>
			</div>
		);
	}
}


