import React from 'react'
import "./style.css"

const date = new Date();
const currentTime = date.getHours();
console.log(currentTime);

let greeting;
if (currentTime < 12) {
    greeting ="Good Morning"
} else if (currentTime < 18){
greeting = "Good Afternoon"
} else {
    greeting = "Good Night"
}

const Users = () => {
    return (
        <div>
            <h1 className="heading">{greeting}</h1>
           <h2 style={{color:"red"}} >My Favourite Foods</h2>

      
        <ol><li>Pasta</li>

          <img className="food-img"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2fXeaY0qQ_2lzwHqhEE0yr_AsElkB0owbJQ&usqp=CAU" />
          <h3>In modern times</h3>
             <p>The art of pasta making and the devotion to the food as a whole has evolved since pasta was first conceptualized. 
                 It is estimated that Italians eat over 27 kg (60 lb) of pasta per person, per year, easily beating Americans, who eat about 9 kg (20 lb) per person.
                 [29] Pasta is so beloved in Italy that individual consumption exceeds the average production of wheat of the country; thus Italy frequently imports wheat for pasta making. 
                 In contemporary society pasta is ubiquitous and individuals can find a variety of types in local supermarkets. 
                 With the worldwide demand for this staple food, pasta is now largely mass-produced in factories and only a tiny proportion is crafted by hand.[</p>
          <li>Ice-cream</li>
          <img className="food-img"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwunyXYULpmyNY2iQpQOIPXp7VlubP8CzWKQ&usqp=CAU" />
         <p>Ice cream is a sweet, creamy cold treat that has been around for centuries. It has inspired songs, had Anne of Green Gables (the heroine of Lucy Maud Montgomery’s famed novels) dreaming for days in anticipation of tasting it for the very first time and is always popular at birthday parties and family gatherings. But never, have the options been so varied! Today, you can find a world of flavours and an ice cream to suit every taste…

</p>
         
         <li>Biryani</li>
         <img className="food-img" src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWUTg-CUapwtzOpOBn5PsJy9aksQrdPV3PRg&usqp=CAU" />
      <p>Simply put, biryani is a spiced mix of meat and rice, traditionally cooked over an open fire in a leather pot. It is combined in different ways with a variety of components to create a number of highly tasty and unique flavor combinations.</p>

       </ol>
        </div>
    )
}

export default Users
