import React from 'react';
import ReactDOM from 'react-dom';

const styles = {
  transition: 'all 1s ease-out'
};

export class MenuButton extends React.Component{
  constructor(props){
    super(props);
      this.state = {
  scale:1
      };
      this.onScale=this.onScale.bind(this);
      this.shrink=this.shrink.bind(this);
    }

  onScale(event) {
    console.log(event.target.id);

    this.setState({
      scale:2
    });
  }
  shrink() {
    this.setState({scale: 1});
  }
  render(){
    return(
    <a onClick={this.props.onClick} style={{
        ...styles,
        transform: 'scale(' + this.state.scale + ')'
      } } onMouseEnter={this.onScale} onMouseLeave={this.shrink}
				text={this.props.text} href={this.props.href}>
				{this.props.text}
			</a>
    );
  }
}
