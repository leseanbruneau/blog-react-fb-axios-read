import React, { Component } from 'react'

import './RaceDay.css'

class RaceDay extends Component {

  render() {
    const { raceDay } = this.props;

    return (
      <div className="container">
        <div className="card">
          <div className="cardheader">
            <span><strong>Date: </strong>
              {raceDay.date.substring(4, 6)}/
              {raceDay.date.substring(6, 8)}/
              {raceDay.date.substring(0, 4)}
            </span>
          </div>
          <div className="cardbody ml-5">
            <div><strong>Horse Track: </strong>{raceDay.trackLoc}</div>
            <div><strong>Race Name: </strong>{raceDay.raceName}</div>
            <div><strong>Kentucky Derby Points: </strong>{raceDay.kdPoints}</div>            
          </div>
        </div>
      </div>
    )
  }
}

export default RaceDay;
