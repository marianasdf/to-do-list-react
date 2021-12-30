import React from 'react';


function App() {
  const handleChange = (event) =>{
    const inpuTask = event.target.value
  }
  
  return (
    <div className="App">
       <h1>ToDo List</h1>
      <form >
        <input type="text" placeholder="Adicione uma tarefa" onChange = {handleChange}/>
        <button type="submit">Adicionar</button>
      </form>

      <ul className="todo-list" >
        <li>Item</li>
      </ul>
    </div>
  );
}

export default App;
