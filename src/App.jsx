import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

/*   console.log("Before for loop")

  for(let i=0;i<99;i++){
    console.log("for Loop console log")
  }

  console.log("After for loop")
 */

/* 
  console.log("Before timeout")

  setTimeout(() => {
      console.log("Timeout console")
  }, 1000);

  console.log("After timeout")

 */

  /* 
  
  1. fetching data is done asynchronously in javascript


  getting data

  rest of my application
  */



  // fetching data using axios

  /* 
    1. axios call to the api to get the data of luke skywalker

    2. storing the result of the axios call in lukeSkywalker variable

    3. console.log lukeSkywalker variable
  */


    // handling promises



   /* 
   Exercise 1:

   1. Make an axios call to the following URL and get the character with the 10th id https://swapi.dev/api/people/4'

   2. in the .then() console.log the character object representing the character info

   3. BONUS: instead of console.logging the entire object console.log the height of the character
   
   */

/*    axios.get('https://swapi.dev/api/people/4')
   .then((result)=>{console.log(result.data.height)})
 *//* 

   const [germany,setGermany] = useState('')
   axios.get('https://restcountries.com/v3.1/name/germany')
   .then((germany)=>{
      return axios.get('https://restcountries.com/v3.1/name/canada')
   })
   .then((secondResult)=>{
    console.log(secondResult.data)
    return "Jorge"
   })
   .then((something)=>{
    console.lg(something)

   })
   .catch((error)=>{
    console.log(error)
   })

   console.log("Rest of my website")


  //  async await: handling promises in a cleaner syntax

  async function getCountries(){
    try{
      const germany = await axios.get('https://restcountries.com/v3.1/name/germany')
      const canada = await axios.get('https://restcountries.com/v3.1/name/canada')
  
      console.log(germany.data)
      console.log(canada.data)
      return [canada,germany]
  
    }
    catch(err){
      console.log(err)
    }

    


  }

 console.log(getCountries()) 



 axios.get('https://omar-class-api.adaptable.app/students')
 .then((result)=>{
  console.log(result.data)
  return axios.get('https://omar-class-api.adaptable.app/students/8')
 })
 .then((juan)=>{
  console.log(juan.data)
 })
 .catch((err)=>{
  console.log(err)
 })

 const [count,setCount] = useState(0)
 console.log("Something")


  */

 axios.get('https://omar-class-api.adaptable.app/students/8')
 .then((student1)=>{
  console.log(student1.data)
  return  axios.get('https://omar-class-api.adaptable.app/students/9')
 })
 .then((student2)=>{
  console.log(student2.data)
 })
 .catch((err)=>{
  console.log(err)
 })


 async function getStudents(){
  try{
    const student1 = await axios.get('https://omar-class-api.adaptable.app/students/8')
    const student2 = await  axios.get('https://omar-class-api.adaptable.app/students/9')
  
  
    console.lg(student1.data)
    console.log("Diogo")
    console.log(student2.data)
  
  }
  catch(err){
    console.log("I am in the .catch")
  }
 }
 getStudents()
  return (
    <>
    
    </>
  )
}

export default App
