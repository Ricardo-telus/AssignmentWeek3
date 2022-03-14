import './App.css';
import EntryComponent from './EntryComponent/EntryComponent';
import EntryFormComponent from './EntryFormComponent/EntryFormComponent';
import { useState, useEffect } from 'react'
import { client } from './apiConten'
const array = [
  { tittle: "Blog 1", content:"Contenido 1", author:"Javier Cabrera"},  
]
function App() {
  const [entries, setEntries] = useState(array)
  const [content, setContent]=useState(false)
  useEffect(() => {      
    client.getEntries()
    .then((response)=>{
        response.items.forEach(element => {
          setEntries(entries => entries.concat({tittle:element.fields.tittle, content:element.fields.description, author:element.fields.author}))        
        });
        setContent(true)
      })
    .catch(console.error)          
},[]);
  const addNewEntry = (entry) => {
    const newEntries = [...entries, entry]
    setEntries(newEntries)
  }

  return (
    <div className='container'>
      <EntryFormComponent postNewEntry={addNewEntry} />
      {
        content?(
          entries.map(element => (
            <EntryComponent title={element.tittle} content={element.content} author={element.author} key={element.tittle}/>                    
          ))
        ):(<p>cargando</p>)        
      }
    </div>
  )
}

export default App;
