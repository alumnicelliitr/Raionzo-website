import React, { Component } from 'react';
import './panel.css';
import Panelicons from './panelicons'
import Timing from './timing'

class panel extends Component {
state={
	num:2,
	date:'01 September',
	time:'2 PM'
};
render() {
	return (
		<div>
			<Panelicons  two={this.state.num}/>
			<Timing date={this.state.date}
			        time={this.state.time}
			        page={this.state.num}/>
		</div>
	);
}
}
export default panel;