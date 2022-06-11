import './App.css';
import Filters from './components/Filters'
import { Month } from './components/Month';
import { Calendar } from './components/Calendar';
import  EventsCalendar  from './components/EventsCalendar';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {initEvents} from "./redux/actions/eventsActions"

import { useSelector } from "react-redux";

function App() {

  const dispatch = useDispatch();
  
  const filterType = useSelector(state => {
    const { filterEvents } = state;
    return filterEvents.filterType;
  })

  const events = useSelector(state => {
    const { initEvents } = state;
    return initEvents.events;
  })

  useEffect(()=>{
    dispatch(initEvents());
  }, []);


  function filterEvents(events, filterType) {
    if(filterType === "meeting") {
      return events.filter((item) => item.type === 'meeting');
    }

    if(filterType === "question/answer") {
      return events.filter((item) => item.type === 'question/answer');
    }

    if(filterType === "conference") {
      return events.filter((item) => item.type === 'conference');
    }

    if(filterType === "webinar") {
      return events.filter((item) => item.type === 'webinar');
    }

    return events;
  }

  const filteredEvents = filterEvents(events, filterType);

  const buildListItems = () => {
    return filteredEvents.map((item) => <div key={item.id}>{item.name}</div>);
  };

  return (
    <div className="App">
      <Filters/>
      {buildListItems()}
      <Calendar/>
      <EventsCalendar/>
    </div>
  );
}

export default App;
