import React, {useEffect, useState} from 'react';

import TaskList from "./components/TaskList";
import { TASKS } from "./Constants";
import './Style.css';


function App() {

  return (
      <div className="App">
      <TaskList tasks={TASKS} />
    </div>
  );
}

export default App;
