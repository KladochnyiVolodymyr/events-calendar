import './App.css';
import Filters from './components/Filters'
import EventsCalendar from './components/EventsCalendar';

function App() {
  return (
    <div className="App">
      <Filters/>
      <EventsCalendar/>
    </div>
  );
}

export default App;
