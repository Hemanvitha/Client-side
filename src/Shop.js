import React, {useState, useEffect} from 'react';
import './App.css';


function Shop() {
    useEffect(() => {
        fetchData();
    },[]);

    const [items, setItems] = usestate([]);

    const fetchData = async () =>{
        const data = await fetch('https://fortnite-api.theapinetwork.com/items/list');
        const items = await data.json();
     
        console.log(data);
        setItems(items);
    };
  return (
    <div>
        <h2>
            Shop Page
        </h2>
    </div>
  );
}

export default Shop;

