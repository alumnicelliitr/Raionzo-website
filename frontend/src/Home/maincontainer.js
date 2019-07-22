import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import './maincontainer.css';
import CONTAINER1 from './container_1';
import CONTAINER2 from './container_2';
import CONTAINER3 from './container_3';
import CONTAINER4 from './container_4';

class MainContainer extends Component{ 
  constructor(props) {
    super(props);
    this.state = {
      scrollTo: ''
    };
  }

  handleClick = (x) => () => {
    this.setState({
      scrollTo: x,
    })
  }

  scrollElementIntoViewIfNeeded(domNode) {
    var containerDomNode = ReactDOM.findDOMNode(domNode);
    domNode.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  }

  render () {
    return (
    <div className="main-data">
          <CONTAINER1 heading="Raionzo" colr="black"/>
          <CONTAINER2
            handleClick={this.handleClick}
            active={this.state.scrollTo}
          />
          
          <div className="triangle-topleft-0"></div>    
          <div className="straightline-0"></div> 
          <div className="triangle-bottomright-0"></div>
          
          <CONTAINER3
            key={'key1'}
            active={this.state.scrollTo}
            scrollIntoView={this.scrollElementIntoViewIfNeeded}
          />
          <div className="straightlineblack-1"></div>  
          <div className="triangle-topleft-1"></div> 
          <div className="triangle-bottomright-1"></div> 
          
          
          <CONTAINER4
              key={'key1'}
              active={this.state.scrollTo}
              scrollIntoView={this.scrollElementIntoViewIfNeeded}
          />
          <div className="straightlineblack-2"></div> 
          <div className="straightlinewhite-2"></div>  
          <div className="triangle-topleft-2"></div> 
          <div className="triangle-bottomright-2"></div>
    </div>
    );
    }
}
export default MainContainer;
