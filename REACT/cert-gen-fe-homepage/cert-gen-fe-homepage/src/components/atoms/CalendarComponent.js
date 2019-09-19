'use strict';

import React from 'react';

/*
  Reference for using Day picker
  http://react-day-picker.js.org/api/DayPicker/
*/

import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
require('styles/atoms/Calendar.css');
class CalendarComponent extends React.Component {
  constructor(props){
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: new Date(),
    };
  }
/*
  Use this.state.selectedDay to get the selected date value
*/
  handleDayClick(day, { selected }) {
    this.setState({
      selectedDay: selected ? undefined : day
    });
  }
  render() {
    return (
      <div className='calendar-component'>
          <DayPicker selectedDays={this.state.selectedDay} onDayClick={this.handleDayClick}/>
          <p>
          {this.state.selectedDay
            ? this.state.selectedDay.toLocaleDateString()
            : 'Please select a day'}
          </p>
      </div>
    );
  }
  
}

CalendarComponent.displayName = 'CoreCalendarComponent';

// Uncomment properties you need
// CalendarComponent.propTypes = {};
// CalendarComponent.defaultProps = {};

export default CalendarComponent;