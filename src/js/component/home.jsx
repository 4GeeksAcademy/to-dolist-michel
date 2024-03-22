import React, {useState} from "react";


//include images into your bundle

import rigoImage from "../../img/rigo-baby.jpg";


//create your first component

const Home = () => {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);

    return (
        <div className="small-container">
            <h1>My Todos</h1>
            <ul>
                <li>
                    <input
                        type="text"
                        onChange={(e) => setInputValue(e.target.value)}
                        value={inputValue}
                        onKeyPress={(e) => {
                            if (e.key === "Enter") {
                                setTodos([...todos, inputValue]);
                                setInputValue("");
                            }
                        }}
                        placeholder="What do you need to do?"
                    />
                </li>
                {todos.map((item, index) => (
                    <li key={index}>
                        {item}
                        <span
                            className="x"
                            onClick={() => setTodos(todos.filter((_, currentIndex) => index !== currentIndex))}
                        >
                            🅧
                        </span>
                    </li>
                ))}
            </ul>
			<div>{todos.length} tasks left </div>
        </div>
    );
}
			
			
				
			
			
		
	
		

				
export default Home;
