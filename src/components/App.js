// create your App component here
import React, { useState, useEffect } from 'react';
import Image from './Image';
const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => setData(data.message))
}, [])

return (
    <div>{data.length<1? <p>...Loading</p>:<Image img={data}/>}</div>)
}
export default App;