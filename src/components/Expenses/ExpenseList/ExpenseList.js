import Card from "../../UI/Card/Card";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import './ExpenseList.css';
import { useState } from "react";

const ExpenseList = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');
  const yearChangeHandler = (value) => {
    setFilteredYear(value);
  }
  return (
    <Card className="expenses">
      <ExpenseFilter selectedYear={filteredYear} onYearChange={yearChangeHandler} />
      { 
        props.expenses?.map((expense) => {
          return <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        })
      }
    </Card>
  )
}

export default ExpenseList;