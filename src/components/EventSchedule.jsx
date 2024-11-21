import Calendar from "react-calendar";
import { useState } from "react";
import 'react-calendar/dist/Calendar.css'

const EventSchedule = () => {
  
  const [value, onChange] = useState(new Date());
  
    return (
      <div>
    <Calendar onChange={onChange} 
    value={value}
    />
      </div>
    );
  };
  
  export default EventSchedule;