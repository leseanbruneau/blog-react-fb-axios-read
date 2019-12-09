import React, { Component } from 'react'

import axios from '../axios-conn'
import RaceDay from './RaceDay'

class Calendar extends Component {

  state = {
    calendar2020: null
  }

  componentDidMount() {
    axios.get('/calendarExample.json')
      .then(response => {
        this.setState({ calendar2020: response.data });
      })
      .catch(error => {
        console.log('error fetching data from firebase...');
      });
    
  }

  render() {

    let year2019 = {};
    let year2020 = {};

    if (calendar2019) {

      calendar2019.sort(function(a,b) {
        return a.date - b.date;
      });

      year2019 = (
        <React.Fragment>
          {calendar2019.map(raceDay => (
            <RaceDay raceDay={raceDay} key={raceDay.id} />
          ))}
        </React.Fragment>
      );
    } else {
      year2019 = null;
    }

    if(this.state.calendar2020) {
      year2020 = (
        <React.Fragment>
          {this.state.calendar2020.map(raceDay => (
            <RaceDay raceDay={raceDay} key={raceDay.id} />
          ))}
        </React.Fragment>
      );
    } else {
      year2020 = (<div>2020 Calendar has not been posted</div>);
    }

    return (
      <div>
        <h2>2019 - Static State Data In JSX Code</h2>
          {year2019}
        <hr />
        <h2>2020 - Dynamic State Data Read From Firebase Database</h2>
          {year2020}
      </div>
    )
  }
}

export default Calendar;

const calendar2019 = [
  { 
    "id": 0, 
    "month": "jan",
    "date": "20190101",
    "trackLoc": "Aqueduct",
    "raceName": "Jerome",
    "kdPoints": "(10-4-2-1)"
  },
  { 
    "id": 1, 
    "month": "mar",
    "date": "20190302",
    "trackLoc": "Gulfstrem Park",
    "raceName": "Fountain of Youth",
    "kdPoints": "(50-20-10-5)"
  },
  { 
    "id": 2, 
    "month": "mar",
    "date": "20190323",
    "trackLoc": "Fair Grounds",
    "raceName": "Louisiana Derby",
    "kdPoints": "(100-40-20-10)"
  }
];

