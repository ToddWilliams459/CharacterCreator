"use strict";

var HelloWorld = function HelloWorld() {
	return React.createElement(
		"div",
		null,
		"Hello World!"
	);
};

var Canvas = function Canvas() {

	return React.createElement("canvas", { width: "200", height: "100" });
};

var init = function init() {
	ReactDOM.render(React.createElement(HelloWorld, null), document.getElementById('app'));
};

window.onload = init;
