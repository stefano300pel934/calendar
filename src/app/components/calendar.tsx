"use client"

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {registerLocale} from "react-datepicker";
import {it} from "date-fns/locale/it";



// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

registerLocale("it", it);
const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker 
        selected={startDate} 
        onChange={(date) => {if(date) setStartDate(date)}}
        locale="it"
        showTimeSelect
        timeCaption="Orari"
        timeFormat="HH:mm"
        timeIntervals={5}
        dateFormat="dd / MM / YYYY   HH:mm"
    />    
    
    
  );
};

export default Calendar


