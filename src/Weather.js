import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="weather-app">
        <form> className="search-form"</form>
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Type a city.."
              autofocus="on"
              autocomplete="off"
              id="city-input"
              class="form-control shadow-sm"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="form-control btn btn-secondary"
            />
          </div>
          <div class="col-3">
            <button
              className="btn btn-success w-100"
              id="current-location-button"
            >
              Current
            </button>
          </div>
        </div>
      </div>
      <h1>New York</h1>
      <ul>
        <li id="date"></li>
        <li id="description"></li>
      </ul>
      <div className="row">
        <div className="col-9">
          <div className="clearfix">
            <div class="float-left">
              <span className="temperature" id="temperature"></span>
              <span className="units">°F</span>
            </div>
          </div>
        </div>
        <hr />
        <br />
        <div className="col-6">
          <ul>
            <li>Precipitation: 78%</li>
            <li>
              Humidity: <span id="humidity"></span>%
            </li>
            <li>
              Wind: <span id="wind"></span>mph
            </li>
          </ul>
          <div
            className="btn-group"
            role="group"
            aria-label="Basic outlined example"
          >
            <button type="button" className="btn btn-outline-secondary">
              Temperature
            </button>
            <button type="button" className="btn btn-outline-secondary">
              Percipitation
            </button>
            <button type="button" className="btn btn-outline-secondary">
              Wind
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
