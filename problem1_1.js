/*
Refact Content component so that it renders three `Part Component` in Content Component
*/

import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return (
        <div className="header">
            <h1>{props.course}</h1>
        </div>
    );
}

const Part = (props) => {
    return (
        <div className="partOfContent">
            <p>{props.part} {props.exercises}</p>
        </div>
    )
}

const Content = (props) => {
    return (
        <div className="body">
            <Part part={props.part1} exercises={props.exercises1} />
            <Part part={props.part2} exercises={props.exercises2} />
            <Part part={props.part3} exercises={props.exercises3} />
        </div>
    );
}

const Total = (props) => {
    return (
        <div className="total">
            <p>{`Number of exercises ${props.exercises1 + props.exercises2 + props.exercises3}`}</p>
        </div>
    );
}
const App = () => {
    const course = 'Half Stack application develoopment';
    const part1 = 'Fundaments of React';
    const exercises1 = 10;
    const part2 = 'Using props to pass data';
    const exercises2 = 7;
    const part3 = 'State of a component';
    const exercises3 = 14;

    return (
        <div>
            <Header course={course} />
            <Content part1={part1}
                part2={part2}
                part3={part3}
                exercises1={exercises1}
                exercises2={exercises2}
                exercises3={exercises3} />
            <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
        </div>
    );
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

/*
exercises 1.1 -> refactor so thats its a header, content, total component

*/
