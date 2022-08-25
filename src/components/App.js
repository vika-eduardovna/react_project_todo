import { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import { data } from "./data/todo";
import List from "./List";

function App() {

  const [todos, setTodos] = useState(data);

  const create = title => {
    const new_todo = {
      id: Date.now(),
      title,
      done: false
    };
    const new_state = [...todos, new_todo];
    setTodos(new_state);
  };

  // 1) написать функцию удаления todo по полученному через аргумент id
  const del = id => {
    const del_todo = todos.filter(el => el.id !== id);
    setTodos(del_todo);
  }


  // описать функцию, которая получает id и меняет значение done у указанного
  // элемента.
  const change_done = id => {
    const new_state = todos.map(elem => {
      if (elem.id === id) {
        elem.done = !elem.done;
      }
      return elem
    });
    setTodos(new_state)
  };



  return (
    <div>
      <ToDoForm create={create} />
      <ToDoList todos={todos} del={del} change_done={change_done}/>

      {/*<List />*/}
    </div>
  );

}

export default App;

// создать компонент User, который в качестве пропсов получает имя и фамилию 
// пользователя и формирует карточку пользователя
// Добавьте компонент User в App и передайте ему в пропсы какие-нибудь 
// имя и фамилию
