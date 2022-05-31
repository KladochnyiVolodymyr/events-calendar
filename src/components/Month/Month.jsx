import { format, getDaysInMonth } from 'date-fns'
import { Day } from './Day';

export const Month = ({year, month}) => {
    const date = new Date(year, month);
    const daysOfMonth = getDaysInMonth(date);
    const nameOfMonth = format(date, 'MMMM');
    const days = [];
    
    for(let i=1; i <= daysOfMonth; i++) {
        days.push(<Day key={i} date={i}/>)
    }
 
    return(
        <div>
            {nameOfMonth}
            {days}
        </div>
    )
}