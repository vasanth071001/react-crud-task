
import { useState } from 'react';
import './App.css';
import Head from './Head';

function App() {
const [items,setitems] = useState()

const showusers = async ()=>{
  const url ='https://jsonplaceholder.typicode.com/users'
  try{
    const response = await fetch(url)
    
    const list = await response.json()
    console.log(list)
    setitems(list)
    
  }
  catch(err){
    console.log(err.Message)
    
  }

}

const showpost = async ()=>{
  const url ='https://jsonplaceholder.typicode.com/posts'
  try{
    const response = await fetch(url)
    
    const list = await response.json()
    console.log(list)
    setitems(list)
    
  }
  catch(err){
    console.log(err.Message)
    
  }

}


const showcomments = async ()=>{
  const url ='https://jsonplaceholder.typicode.com/comments'
  try{
    const response = await fetch(url)
    
    const list = await response.json()
    console.log(list)
    setitems(list)
    
  }
  catch(err){
    console.log(err.Message)
    
  }

}

  return (
    <Head
    showusers={showusers}
    showpost={showpost}
    showcomments={showcomments}
    items ={items}
    />
  )
}

export default App;
