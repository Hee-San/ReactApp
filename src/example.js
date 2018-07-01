import React from'react';
import ReactDOM from 'react-dom';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketches/sketch';

class App extends React.Component{
	render () {
		return (
			<div>
				<P5Wrapper sketch=sketch/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
