import React, { Component } from 'react';
import speakerfooter from './../components/images/speakerfooter.png';
import './speaker.css';

class Speaker extends Component {
	render(){
		return(
			<div className="about-speaker">
				<div className="sidebox-left sidebox">
					<div className="sidebox-cont"></div>
					<div className="sidebox-foot"></div>
				</div>
				<div className="speaker-box">
					<div className="speaker-main">
						<div className="speaker-left">
							<img src={require('./../components/images/' + this.props.speakerimg + '.png')} className="speaker-img" alt={this.props.speakername} />
						</div>
						<div className="speaker-right">
							<div className="speaker-name">{this.props.speakername}</div>
							<div className="speaker-cont">{this.props.speakercontent}</div>
						</div>
					</div>
					<div className="speaker-footer">
						<div className="speaker-footer-blackbox"></div>
						<img src={speakerfooter} alt='' className="speaker-footer-img" />
					</div>
				</div>
				<div className="sidebox-right sidebox">
					<div className="sidebox-cont"></div>
					<div className="sidebox-foot"></div>
				</div>
			</div>
		);
	}
}

export default Speaker;