import { act, useState } from 'react'
import './App.css'
function App() {
  const [quots,setQuots] =useState('');
  const [quotsType,setType] =useState('');
  const [author,setAuthor] = useState();
  const [error ,setError]= useState('');
  const [love_quotes,setLoveQuotes] = useState("random");
  const [count,setCount] = useState(0);
  const [startBtn,setStartBtn] = useState(false);
  async function quots_show(){
      setStartBtn(true)
       if(love_quotes=="random"){
       setError(()=><div className='loader'></div>);
      let res = await fetch("https://api.quotable.io/quotes/random?limit=1");
      let data = await res.json();
      setQuots(data[0].content);
      setAuthor(data[0].author);
      setType(data[0].tags[0]);
      }
      else if(love_quotes=="love"){
        setCount(count=>count+1);
        setError(()=><div className='loader'></div>);
        let res = await fetch("https://api.quotable.io/quotes?tags=love");
        let data = await res.json();
          setQuots(data.results[count].content);
          setAuthor(data.results[count].author);
          console.log(data.results[count].author);
          setType(data.results[count].tags[1]);
      }
      else if(love_quotes=="happiness"){
        setCount(count=>count+1);
        setError(()=><div className='loader'></div>);
        let res = await fetch("https://api.quotable.io/quotes?tags=%7Chappiness");
        let data = await res.json();
          setQuots(data.results[count].content);
          setAuthor(data.results[count].author);
          console.log(data.results[count].author);
          setType(data.results[count].tags[1]);
      }
      else if(love_quotes=="technology"){
        setCount(count=>count+1);
        setError(()=><div className='loader'></div>);
        let res = await fetch("https://api.quotable.io/quotes?tags=technology");
        let data = await res.json();
          setQuots(data.results[count].content);
          setAuthor(data.results[count].author);
          console.log(data.results[count].author);
          setType(data.results[count].tags[1]);
      }
      else{
      setError(()=><div className='loader'></div>);
      let res = await fetch("https://api.quotable.io/quotes/random?limit=1");
      let data = await res.json();
      setQuots(data[0].content);
      setAuthor(data[0].author);
      setType(data[0].tags[0]);
      }
      setError("");
  }
  return (
    <>
    <div className='Main_box'>
       <div className='heading'>
         <h1>The best quotes are here .. For you</h1>
       </div>
       <label htmlFor="change_quotes" className='label1'>Select Quotes Type
       <select name="change" id="change_qotes" 
       onChange={(e)=>{setLoveQuotes(e.target.value)}}>
        <option value="random">random</option>
       <option value="love">Love</option>
       <option value="happiness">happiness</option>
       <option value="technology">technology</option>
       </select>
       </label>
       <div className='Quots1'>
        <p>{error}</p>
        <h4>{"Quotes Type - "+(love_quotes?love_quotes:"Quotes For you")}</h4>
        <h2>{quots?quots:"Let's Start reading Quotes "}</h2>
        <i>{"--"+ author?author:"No Author"}</i>
       </div>
       <button onClick={quots_show}>{startBtn?"next":"start"}</button>
    </div>
    </>
  )
}

export default App
