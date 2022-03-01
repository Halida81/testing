
import './App.css';

import Expenses from './components/Expenses';

function App() {

const expense = [
  {
    id:'e1',
    title: 'Paper',
    amount: 1.2,
    date: new Date(2020, 7, 23)
  },

  {
    id:'e2',
    title: 'Pen',
    amount: 1.7,
    date: new Date(2020, 8, 12)
  },

  {
    id:'e3',
    title: 'Mouse',
    amount: 11,
    date: new Date(2020, 2, 26)
  },
]

  return (
    <div className="App">
      <h1>this is h1</h1>
     
    <Expenses expense={expense}/>
    
    </div>
  );
}

export default App;
