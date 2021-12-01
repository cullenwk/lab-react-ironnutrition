import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foodsJson from './foods.json';
import FoodBox from './components/FoodBox'
import {useState} from 'react'
import AddForm from './components/AddForm';
import Search from './components/Search';
import Total from './components/Total';

function App() {
  const [foods, setFoods] = useState(foodsJson)
  const [foodsCopy, setFoodsCopy] = useState(foodsJson)
  const [checkoutData, setCheckout] = useState([])
  const [showForm, setShowForm] = useState(false)

  function handleClick(foods, quantity){
    // Create our object with quantity  
    let checkoutFoods = {
        name: foods.name,
        calories: foods.calories,
        quantity: quantity
      }
      setCheckout([checkoutFoods, ...checkoutData])
  }

  function handleToggle(){
    setShowForm(!showForm)
  }

  function handleSubmit(event){
    event.preventDefault()
    let newFood = {
      name: event.target.name.value, 
      calories: event.target.calories.value,
      image: event.target.image.value
    }

    setFoodsCopy([newFood, ...foods])
    setShowForm(false)
  }  

  function handleSearch(event){
    let word = event.target.value
    let filteredFoods = foods.filter((foods) => {
      return foods.name.includes(word)
    })

    setFoodsCopy(filteredFoods)
  }

  
  return (
    <div className="App">
    
      {
        showForm ? <AddForm btnSubmit={handleSubmit}/> : <button onClick={handleToggle}>Show Form</button>
        }
        <Search btnSearch={handleSearch}/>
      
      <div class="columns">
      <div class="column">
      {
        foodsCopy.map((elem, i) => {
          return  <FoodBox 
                  key={i}
                  food={elem}
                  btnClick={handleClick}
                  />
        })
      }
</div>
        <div class="column">
           <Total checkoutData={checkoutData} />
      </div>
    </div>
    </div>
    
  );
}

export default App;
