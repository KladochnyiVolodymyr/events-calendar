import { addMonths } from 'date-fns'
import { Month } from "../Month";

export const Calendar = () => {
    const month = [];
    let date = new Date();
    while(month.length <= 6){
        let currentMonth = date.getMonth();
        const currentYear = date.getFullYear();
        month.push(<Month key={currentMonth} year={currentYear} month={currentMonth} />)
        date = addMonths(date, 1);
    }
  return (
    <div>
      {month}
    </div>
  );
};
