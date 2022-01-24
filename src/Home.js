import { useState } from 'react';

const Home = () => {
    const [name, setName] = useState('Mario');
    const [Age, setAge] = useState(25);

    const handleClick = () => {
        setName('Hemanth');
        setAge(21);
    };
    return (
        <div className='home'>
            <h1>Homepage</h1>
            <p>
                {name} is {Age} years old
            </p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
};

export default Home;
