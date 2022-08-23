import { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import { data } from "./data/todo";
import Counter from "./Counter";
import User from "./User";

import List from "./List";

function App() {
  

  return (
    <div>
      <ToDoForm />
      <ToDoList data={data} />
   
      <List />
    </div>
  );
  
}

export default App;

// создать компонент User, который в качестве пропсов получает имя и фамилию 
// пользователя и формирует карточку пользователя
// Добавьте компонент User в App и передайте ему в пропсы какие-нибудь 
// имя и фамилию
