const HelloWorld = () => {
	return (
		<div>
			Hello World!
		</div>
	);
};


const Canvas = () => {

	return (
		<canvas width="200" height="100">

		</canvas>
	);
};


const init = () => {
	ReactDOM.render(
		<HelloWorld />,
		document.getElementById('app')
	);

};

window.onload = init;
