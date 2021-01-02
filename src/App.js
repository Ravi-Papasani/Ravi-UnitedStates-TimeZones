import React from "react";
import "./styles.css";
import { useState } from "react";
import { allTimeZones } from "./sourcedata";

var usTimeZones = Object.keys(allTimeZones);

export default function App() {
  var [timeZones, setTimeZones] = useState(allTimeZones.PST);

  function onClickTimeZoneHandler(timezone) {
    console.log("clicked on " + timezone);
    var zones = allTimeZones[timezone];
    setTimeZones(zones);
  }

  function getZonesDisplay(displayzones) {
    //var stateName = displayzones.stateName;
    var listToDisplay = (
      <ol>
        <div style={{ padding: "0rem 1rem" }}>
          <h2 id="display-statename">{displayzones.stateName}</h2>
          <div className="display-descrption">{displayzones.Description}</div>
        </div>
      </ol>
    );
    return listToDisplay;
  }

  return (
    <div className="App">
      <h1>Time Zones in the United States</h1>
      <div className="content-div">
        From east to west, the United States has nine standard time zones. Out
        of 52 states, 39 states falls under one time-zone and 13 states has more
        than one time-zone.
        <ul>
          <ol>Pacific Standard Time (PST)</ol>
          <ol>Mountain Standard Time (MST)</ol>
          <ol>Central Standard Time (CST)</ol>
          <ol>Eastern Standard Time (EST)</ol>
          <ol>Alaskan Standard Time (AKST)</ol>
          <ol>Hawaii-Aleutian Standard Time (HAST)</ol>
          <ol>Chamorro Standard Time (CHST)</ol>
          <ol>Samoa standard time (WST)</ol>
          <ol>Atlantic Standard Time (AST)</ol>
        </ul>
      </div>
      <h3>Click on the below buttons, to know timezones of the states</h3>
      <h6>source @Wikipedia, @timetemperature.com</h6>
      {usTimeZones.map(function (timezone, index) {
        return (
          <button
            id="btn-click"
            onClick={() => onClickTimeZoneHandler(timezone)}
            key={timezone}
          >
            {timezone}
          </button>
        );
      })}

      <div>
        <ul>
          {timeZones.map((displayzones) => {
            return getZonesDisplay(displayzones);
          })}
        </ul>
      </div>
    </div>
  );
}
