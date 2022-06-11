import { format, getDaysInMonth, startOfWeek, addDays } from "date-fns";
import { Day } from "./Day";

export const Month = ({ year, month }) => {
  const date = new Date(year, month);
  const daysOfMonth = getDaysInMonth(date);
  const nameOfMonth = format(date, "MMMM");
  const weeks = [];
  let week = [];
  for (let i = 1; i <= daysOfMonth; i++) {
    week.push(<Day key={i} date={i} />);

    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }

    if (i === daysOfMonth) {
      weeks.push(week);
    }
  }

  const buildWeeks = () => {
    return weeks.map((item, index) => (
      <div key={index} className="row">
        {item}
      </div>
    ));
  };

  const buildNameOfWeek = () => {
    const dateFormat = "EEE";
    const days = [];
    let startDate = startOfWeek(date);
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="column col-center" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    return days;
  };

  return (
    <div className="column cell">
      <div className="header">{nameOfMonth}</div>
      <div className="days row">
          {buildNameOfWeek()}
      </div>
      <div className="body">{buildWeeks()}</div>
    </div>
  );
};
