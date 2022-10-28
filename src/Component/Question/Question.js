import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
const Question = () => {
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>How does react work?</Accordion.Header>
                <Accordion.Body>
                    React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Difference between props and state.</Accordion.Header>
                <Accordion.Body>
                <ol>
                    <li>Props are used to pass data from one component to another. <strong>vs</strong> .The Data is passed within the component only.</li>
                    <li>
                    It is Immutable (cannot be modified). <strong>vs</strong> .It is Mutable ( can be modified).
                    </li>
                    <li>Props can be used with state and functional components. <strong>vs</strong> .State can be used only with the state components/class component (Before 16.0).</li>
                    <li>Props are read-only. <strong>vs</strong> .State is both read and write.</li>
                </ol>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>What does the work of useEffect except data Api?</Accordion.Header>
                <Accordion.Body>
                    <ol>
                        <li>Running on state change: validating input field</li>
                        <li>Running on state change: live filtering</li>
                        <li>Running on state change: trigger animation on new array value</li>
                        <li>Running on props change: update paragraph list on fetched API data update</li>
                        <li>Running on props change: updating fetched API data to get BTC updated price</li>
                    </ol>
                </Accordion.Body>
            </Accordion.Item>
    </Accordion>
        
    );
};

export default Question;