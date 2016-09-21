import React, { Component } from 'react';
import './MessageBubble.css';

import Icon from '../Icon/Icon';
import CircleIcon from '../CircleIcon/CircleIcon';

class MessageBubble extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			canHover: true,
		};
		this.toggleBubble = this.toggleBubble.bind(this);
		this.stickBubble = this.stickBubble.bind(this);
	}
	toggleBubble() {
		if (!this.state.canHover) return false;
		this.setState({
			isOpen: !this.state.isOpen,
		});
	}
	stickBubble() {
		this.setState({
			isOpen: true,
			canHover: !this.state.canHover,
		});
	}
  render() {
		const { text } = this.props;
		const { isOpen } = this.state;
		const bubbleStyle = {
			top: '-35px',
			left: '-65px',
			minWidth: '150px',
		};

		return (
			<div className="relative mx1">
				<CircleIcon color="blue" onMouseOver={this.toggleBubble} onMouseOut={this.toggleBubble} onClick={this.stickBubble}>
					<Icon type="dots" size="small" />
				</CircleIcon>
				<div
					ref="bubble"
					className={`absolute left-0 ${isOpen ? '' : 'hide'} col-auto p1 font-size-2 line-height-1 center bold bg-blue1 color-gry-light1 rounded`}
					style={bubbleStyle}>
					{text}
				</div>
			</div>
		);
	}
}

export default MessageBubble;
