import React, { useEffect, useState } from "react";
import "./index.css";
import { render } from "@testing-library/react";

const Calender = ({ updatedDate, inputNewName, inputNewOccassion }) => {
  const [timeDetails, setTimeDetails] = useState({
    days: "",
    hours: "",
    mins: "",
    seconds: "",
  });
  useEffect(() => {
    const interval = setInterval(() => {
      const newYears = updatedDate;
      const newYearsDate = new Date(newYears);
      const CurrentDate = new Date();
      const totalSeconds = (newYearsDate - CurrentDate) / 1000;

      const days = Math.floor(totalSeconds / 3600 / 24);
      const hours = Math.floor(totalSeconds / 3600) % 24;
      const mins = Math.floor(totalSeconds / 60) % 60;
      const seconds = Math.floor(totalSeconds) % 60;
      setTimeDetails({ days, hours, mins, seconds });
    }, 1000);
    return () => clearInterval(interval);
  }, [updatedDate]);

  return (
    <div className="calender">
      <p className="main_text">{inputNewName}</p>
      <p className="bSpan">{inputNewOccassion}</p>
      <div className="div1">
        <div>
          <p className="days">{timeDetails.days}</p>
          <span>Days</span>
        </div>
        <div>
          <p className="hours">{timeDetails.hours}</p>
          <span>Hours</span>
        </div>
        <div>
          <p className="min">{timeDetails.mins}</p>
          <span>Minutes</span>
        </div>
        <div>
          <p className="sec">{timeDetails.seconds}</p>
          <span>Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Calender;
