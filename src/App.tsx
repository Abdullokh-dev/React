import ExpenseList from "./expense-tracker/components/ExpenseList";
import {useState} from "react";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [expenses, setExpenses] = useState([
    {id: 1, description: 'aaa', amount: 10, category: 'Utilities'},
    {id: 2, description: 'bbb', amount: 20, category: 'Utilities'},
    {id: 3, description: 'ccc', amount: 30, category: 'Utilities'},
    {id: 4, description: 'ddd', amount: 40, category: 'Utilities'}
  ]);
  const visibleExpense = selectedCategory ? expenses.filter(e => e.category === selectedCategory) : expenses

  return (
    <>
      <div className="mb-3">
        <ExpenseForm />
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelectCategory={(category) => setSelectedCategory(category)} />
      </div>
      <ExpenseList expenses={visibleExpense} onDelete={(id) => setExpenses(expenses.filter(e => e.id !== id))} />
    </>
  )
}

export default App;
