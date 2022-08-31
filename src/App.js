import React, { useState } from 'react';
import './App.css';
import COLORS_ARRAY from "./colorsArray";

function App() {
  const [quote,setQuote]=useState("Life is too short ")
  const [author,setAuthor]=useState("McDonald Musimwa")
  const [accentColor,setAccentColor]=useState('#FFAB91')
  
  
  

  const changeQuoteandAuthor =()=>{
    let randomIndex = (Math.floor(Math.random()*quotesArray.length))
    
    setQuote(quotesArray[randomIndex].quote)
    setAuthor(quotesArray[randomIndex].author)
    setAccentColor(COLORS_ARRAY[randomIndex])

  }

  let quotesArray = [
    {quote:"Education is the most powerful weapon which you can use to change the world. ",
      author:"Nelson Mandela"},
      {quote:"A winner is a dreamer who never gives up.",
      author:"Nelson Mandela"},
      {quote:"No human is limited",
      author:"Eliud Kipchoge"},
      {quote:"It takes considerable knowledge just to realize the extent of your own ignorance.",
      author:"Thomas Sowell"},
      {quote:"The most basic question is not what is best, but who shall decide what is best.",
      author:"Thomas Sowell"},
      {quote:"People who have time on their hands will inevitably waste the time of people who have work to do.",
      author:"Thomas Sowell"},
      {quote:"The past is behind, learn from it.",
      author:"Thomas S Monson"},
      {quote:"Without hard work, nothing grows but weeds.",
      author:"Gordon B Hinckley"},
      {quote:"It always seems impossible until it's done.",
      author:"Nelsom Mandela"},
      {quote:"We have a shared destiny, a shared responsibility to save the world from those who attempt to destroy it.",
      author:"Winnie Mandela"},
      {quote:"In the End, we will remember not the words of our enemies, but the silence of our friends",
      author:"Martin Luther Kind Jnr"},
      {quote:"You will never win if you never begin.",
      author:"Helen Rowland"},
      {quote:"A person who never made a mistake never tried anything new.",
      author:'Albert Einstein'},
      {quote:"When something is important enough, you do it even if the odds are not in your favor.",
      author:'Elon Musk'}


  ]
  
   






  return (
    <div className='container'>
      <header style={{backgroundColor:accentColor,color:accentColor}}>
        <div className='row py-5'>
          <div className='col-md-6 offset-md-3'>
            <div className="card text-center">
              
              <div className="App" id='quote-box'>
                <div><h3>Random Quote</h3></div>
                <p id="text">"{quote}"</p>
                <div></div>
                <p id="author">-{author}</p>
                <button className="btn btn-block btn-success"id="new-quote" onClick={()=>changeQuoteandAuthor()}>New Quote</button>
                <a id="tweet-quote" className="btn btn-info"  href={'http://www.twitter.com/intent/tweet?text=Hello'}>Tweet Quote</a>
              </div>
            </div>
          </div>  
        </div>
      </header>
    </div>
  );
}

export default App;
