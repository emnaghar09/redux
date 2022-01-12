import './App.css';
import { Form, Button } from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {todoHandler,listHandler} from './redux/action'

function App() {


  const dispatch= useDispatch()
  const data= useSelector((state) => state.text )
  const addedlist= useSelector((state) => state.list )

  const INPUT = (text) => {
    dispatch(todoHandler(text))
  }
  const UPDATE = () => {
    addedlist.push(data);
    dispatch(listHandler(addedlist))
  }


  return (
    <div className="App">
<div className="todo">
<h1>To Do List</h1>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Make your todo list</Form.Label>
    <Form.Control type="data" onChange={(e)=>INPUT(e.target.value)}  placeholder="Enter todo item" />
    <Button  variant="secondary" onClick={UPDATE}>Submit </Button>
    <div > Your todo list for today is: <ol>
      {addedlist.map((list,key) => <li  key={key}> <p className="list">{list} </p></li>)}
      </ol> 
    </div>
</Form.Group>

</div>
    </div>
  );
}

export default App;
