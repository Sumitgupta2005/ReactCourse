import React, { useState } from 'react'
import Cards from './Components/Cards'

const App = () => {

  const [notes, setNotes] = useState("")
  const [details, setDetails] = useState("")

  const [task, setTask] = useState([])


  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task]
    copyTask.push({ notes, details })
    setTask(copyTask)

    setNotes("")
    setDetails("")
  }

  return (
    <div>
      <div className="container">

        <div className="leftContainer">
          <form onSubmit={(e) => {
            submitHandler(e)
          }}>
            <h1>Notes App</h1>
            <input
              type="text"
              placeholder='Title'
              value={notes}
              onChange={(e) => {
                setNotes(e.target.value)
              }} />
            <textarea
              placeholder='Description'
              value={details}
              onChange={(e) => {
                setDetails(e.target.value)
              }}></textarea>
            <button>Add Note</button>
          </form>
        </div>

        <div className="rightContainer">
          <h1>My Notes</h1>
          <div className="cards">
            {task.map((item, index) => {
              return (
                <div key={index} className="card">
                  <h3>{item.notes}</h3>
                  <p>{item.details}</p>
                </div>
              )
            })}

          </div>


        </div>
      </div>
    </div>
  )
}

export default App
