import React, {useState} from 'react';


function App() {

  const [task, setTask] = useState('');
  const [itemsList, setItemsList ] = useState([]);
  
  function handleChange(event){
    const inpuTask = event.target.value
    setTask(inpuTask);
  }

  function addItemToList(){
    console.log(task)
    setItemsList([...itemsList, task]);
    setTask('')
  }

  
  return (
    <div className="App">
       <h1>ToDo List</h1>
      <form >
        <input type="text" placeholder="Adicione uma tarefa" onChange = { handleChange } value={ task }/>
        <button type="button" onClick={ addItemToList }>Adicionar</button>
      </form>

      {itemsList.map((item, index) => (<div key={index}> {item} </div>) )}

    </div>
  );
}

export default App;
