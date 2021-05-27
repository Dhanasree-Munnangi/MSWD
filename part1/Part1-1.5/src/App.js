import React from 'react';


const Header = ({ course }) => {
	return (
		<div>
			<h1>{course.name}</h1>
		</div>
	);
};

const Content = ({ par }) => {
	return (
		<div>
			<Part part={par.parts[0].name} exercises={par.parts[0].exercises} />
			<Part part={par.parts[1].name} exercises={par.parts[1].exercises} />
			<Part part={par.parts[2].name} exercises={par.parts[2].exercises} />
		</div>
	);
};

const Total = ({ par }) => {
	return (
		<div>
			<p>
				Number of exercises {par.parts[0].exercises + par.parts[1].exercises + par.parts[2].exercises}
			</p>
		</div>
	);
};

const Part = (props) => {
	return (
		<div>
			<p>
				{props.part} {props.exercises}
			</p>
		</div>
	);
};

const App = () => {
	const course = {
		name: 'Half Stack application development',
		parts: [
			{
				name: 'Fundamentals of React',
				exercises: 10
			},
			{
				name: 'Using props to pass data',
				exercises: 7
			},
			{
				name: 'State of a component',
				exercises: 14
			}
		]
	};

	return (
		<div>
			<Header course={course} />
			<Content par={course} />

			<Total par={course} />
		</div>
	);
};

export default App
