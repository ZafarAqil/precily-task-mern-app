import React, { Component } from "react";
import "./Window.css";

export default class Window extends Component {
	render() {
		return (
			<div className={`resize ${this.props.window}`}>{this.props.children}</div>
		);
	}
}
