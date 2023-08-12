import {Link} from "react-router-dom";

function indexpage(){
    return(
        <div className="home">
            <h1>Lab 6</h1>
            <ol>
                <li>
                    <div className="q1">
                        <Link to="/Toggle"><p> Create a React component called "Toggle" that displays a button. Clicking the button
                            should toggle the display of a message between "ON" and "OFF".</p></Link>
                    </div>
                </li>
                <li>
                    <div className="q2">
                        <Link to="/Timer"><p>Create a React component called "Timer" that displays a timer that starts at 0 and
                            increments every second. The timer should stop incrementing when a "Stop" button is
                            clicked.</p></Link>
                    </div>
                </li>
                <li>
                    <div className="q3">
                        <Link to="/TodoList"><p> Create a React component called "TodoList" that displays a list of todo items. The todo
                            items should be passed as an array of strings to the component.
                            Sample Array: ['Learn React', 'Build a project', 'Go for a walk','Do some exercises','Join a
                            music class','Read a novel']
                        </p></Link>
                    </div>
                </li>
                <li>
                    <div className="q4">
                        <Link to="/CardList"><p>Create a React component called "CardList" that receives an array of objects
                            representing cards. Each card object should have a title and content property. Render
                            each card as a separate card component.
                            Sample Array: [{"title : Card 1,content: This is the content of Card 1},{title: Card2,content: This is the content of Card 2},{title: Card 3,content: This is the content ofCard 3"}]</p></Link>
                    </div>
                </li>
                <li>
                    <div className="q5">
                        <Link to="/Form"><p>Create a React component called "Form" that includes a text input and a button. Clicking
                            the button should display an alert with the value entered in the input</p></Link>
                    </div>
                </li>
            </ol>
        </div>
    )
}

export default indexpage;