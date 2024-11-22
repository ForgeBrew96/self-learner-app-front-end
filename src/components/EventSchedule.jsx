import Calendar from "react-calendar";
import { useState } from "react";
import 'react-calendar/dist/Calendar.css'
import "./EventSchedule.css"

const EventSchedule = () => {
  const [value, onChange] = useState(new Date())
  
  //   return (
  //     <div>
  //   <Calendar onChange={onChange} 
  //   value={value}
  //   />
  //     </div>
  //   );
  // };

  return (
    <div className="event-schedule-container shared-container">
      <header className="event-header">
        <h2>Upcoming Events</h2>
        <p>
          Mark your calendar and join the excitement! Explore upcoming events across 
          various categories. Whether it's in-person or remote, there's something 
          for everyone.
        </p>
      </header>

      <div className="calendar-container">
        <Calendar onChange={onChange} value={value} />
      </div>

      <div className="event-list">
      <div className="event-card">
          <img
            src="/img/CODEvent.png"
            alt="Video Game Leaque Event"
            className="event-image"
          />
        </div>
        <div className="event-card">
          <img
            src="/img/D&DEvent.png"
            alt="Tabletop Gaming Tournament Event"
            className="event-image"
          />
        </div>
        <div className="event-card">
          <img
            src="/img/MorningYoga.png"
            alt="Morning Yoga Event"
            className="event-image"
          />
        </div>
        <div className="event-card">
          <img
            src="/img/DJSkillsEvent.png"
            alt="DJ Masterclass Event"
            className="event-image"
          />
        </div>
      </div>
    </div>
  )
}

  export default EventSchedule;