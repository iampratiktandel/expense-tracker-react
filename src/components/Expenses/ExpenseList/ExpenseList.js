import Card from "../../UI/Card/Card";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import './ExpenseList.css';
import { useState } from "react";
import ExpenseChart from "../ExpenseChart/ExpenseChart";

const ExpenseList = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');
  const yearChangeHandler = (value) => {
    setFilteredYear(value);
  }

  const filteredExpenses = props?.expenses?.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expenseContent = <h2 className="expenses-list__fallback">No expenses found.</h2>

  if (filteredExpenses?.length > 0) {
    expenseContent =
      <ul className="expenses-list">
        {
          filteredExpenses?.map((expense) => {
            return <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          })
        }
      </ul>
  }
  return (
    <Card className="expenses">
      <ExpenseFilter selectedYear={filteredYear} onYearChange={yearChangeHandler} />
      <ExpenseChart expenses={filteredExpenses} />
      {expenseContent}
    </Card>
  )
}

export default ExpenseList;