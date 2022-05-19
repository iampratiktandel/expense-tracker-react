import { useState } from 'react';
import Card from '../../UI/Card/Card';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const changeTitle = () => {
    setTitle('Pratik');
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} month={props.month} year={props.year}/>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>$ {props.amount}</div>
      </div>
      <button onClick={changeTitle}>Change Title</button>
    </Card>
  )
}

export default ExpenseItem;