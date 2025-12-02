import { Component } from "react";
import { format } from "date-fns";
import { FaSearch, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { GiPaperWindmill } from "react-icons/gi";
import "./index.css";

const apiStatusContants = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Hero extends Component {
  state = {
    isSearchClicked: false,
    locationInput: "",
    weatherData: null,
    forecastData: null,
    apiStatus: apiStatusContants.initial,
    currectTem: 0,
  };

  getForecast = async () => {
    const { locationInput } = this.state;
    if (!locationInput) return;

    const url = `https://api.weatherapi.com/v1/forecast.json?key=4f2e757fb21c4c5ea73105645252711&q=${locationInput}&days=5`;
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.error) {
        this.setState({
          apiStatus: apiStatusContants.failure,
          forecastData: null,
        });
        return;
      }
      this.setState({
        forecastData: data.forecast.forecastday,
      });
    } catch (e) {
      this.setState({ apiStatus: apiStatusContants.failure });
    }
  };

  getWeather = async () => {
    const { locationInput } = this.state;
    this.setState({ apiStatus: apiStatusContants.inProgress });
    if (!locationInput) return;

    const url = `https://api.weatherapi.com/v1/current.json?key=4f2e757fb21c4c5ea73105645252711&q=${locationInput}`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.error) {
        this.setState({
          apiStatus: apiStatusContants.failure,
          weatherData: null,
        });
        return;
      }

      this.setState({
        weatherData: data,
        apiStatus: apiStatusContants.success,
        currectTem: data.current.temp_c,
      });
      this.getForecast();
    } catch (e) {
      this.setState({ apiStatus: apiStatusContants.failure });
      console.log("Error:", e.message);
    }
  };

  onClickSearch = () => {
    this.getWeather();
    console.log(this.state.currectTem);
  };

  onKeyDownSearch = (event) => {
    if (event.key === "Enter") {
      this.getWeather();
    }
  };

  onChangeLocation = (event) => {
    this.setState({ locationInput: event.target.value });
  };

  formattedDate = (date) => {
    const rawdate = new Date(date);
    const formattedDate = format(rawdate, "EEEE, MMMM d, yyyy h:mm a");
    return formattedDate;
  };

  renderLoading = () => (
    <div className="status-con">
      <img src="/Weather-storm.gif" alt="weather icon" className="status-img" />
    </div>
  );

  renderFailure = () => (
    <div className="status-con">
      <img src="/Cryingemoji.gif" alt="weather icon" className="status-img" />
      <p>Please enter a valid or more precise location name.</p>
    </div>
  );

  renderSuccess = () => {
    const { weatherData } = this.state;

    return (
      <>
        {weatherData && (
          <div className="con">
            <div>
              <div className="location-con">
                <MdLocationOn className="location-icon" />
                <div>
                  <p className="location-text">
                    {weatherData.location.name}, {weatherData.location.region},{" "}
                    {weatherData.location.country}
                  </p>
                </div>
              </div>
              <p className="time">
                {this.formattedDate(weatherData.location.localtime)}
              </p>
              <div className="temperature-con">
                <h1 className="temperature-text">
                  {weatherData.current.temp_c}°C
                </h1>
                <p className="weather-condition-text">
                  <img
                    src={weatherData.current.condition.icon}
                    alt="icon"
                    className="weather-icon"
                  />
                  {weatherData.current.condition.text}
                </p>
              </div>
              <h1 className="feels-p">
                🌡️{weatherData.current.feelslike_c}°C Feels Like
              </h1>
            </div>
            <div className="cards">
              <div className="card">
                <div className="d">
                  <GiPaperWindmill className="wind-icon" />
                  <p className="p">Wind</p>
                </div>
                <p className="pp">{weatherData.current.wind_mph} MPH Wind</p>
                <p className="pp">{weatherData.current.gust_mph} MPH Gust</p>
                <p className="pp">{weatherData.current.wind_dir} Wind Dir</p>
              </div>
              <div className="card">
                <p className="pp">
                  {weatherData.current.feelslike_c}°C Feels Like
                </p>
                <p className="pp">{weatherData.current.humidity} Humidity</p>
                <p className="pp">{weatherData.current.cloud} Cloud</p>
                <p className="pp">{weatherData.current.uv} UV</p>
                <p className="pp">{weatherData.current.pressure_in} Pressure</p>
              </div>
            </div>
          </div>
        )}
        <div className="forecast-box">{this.renderForecast()}</div>
      </>
    );
  };

  renderInitial = () => (
    <div className="status-con">
      <h1 className="welcome-heading">Welcome to Weatherly</h1>
      <p className="welcome-info">
        Search any city above to see the weather details. <br /> Get real-time
        weather updates...
      </p>
    </div>
  );

  renderForecast = () => {
    const { forecastData } = this.state;

    if (!forecastData) return null;

    return (
      <div className="forecast-container">
        {forecastData.map((day) => (
          <div key={day.date} className="forecast-day-card">
            <p className="forecast-date">
              {format(new Date(day.date), "EEEE, MMM d")}
            </p>
            <img
              src={day.day.condition.icon}
              alt={day.day.condition.text}
              className="forecast-img"
            />
            <p className="forecast-temp">{day.day.avgtemp_c}°C</p>
            <p className="forecast-text">{day.day.condition.text}</p>
          </div>
        ))}
      </div>
    );
  };

  renderContainer = () => {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case apiStatusContants.initial:
        return this.renderInitial();
      case apiStatusContants.inProgress:
        return this.renderLoading();
      case apiStatusContants.failure:
        return this.renderFailure();
      case apiStatusContants.success:
        return this.renderSuccess();
      default:
        return null;
    }
  };

  render() {
    const { locationInput, weatherData } = this.state;
    let bgImage = "/wall-bg.jpg";

    if (weatherData) {
      const condition = weatherData.current.condition.text.toLowerCase();

      if (condition.includes("mist") || condition.includes("fog")) {
        bgImage = "/mist-bg.jpg";
      } else if (condition.includes("wind")) {
        bgImage = "/wind-bg.jpg";
      } else if (condition.includes("thunder")) {
        bgImage = "/thunderstorm-bg.jpg";
      } else if (condition.includes("sunny") || condition.includes("clear")) {
        bgImage = "/sunny-bg.jpg";
      } else if (condition.includes("snow")) {
        bgImage = "/snow-bg.jpg";
      } else if (condition.includes("sleet")) {
        bgImage = "/sleet-bg.jpg";
      } else if (condition.includes("shower") || condition.includes("rain")) {
        bgImage = "/rain-bg.jpg";
      } else if (condition.includes("cloud")) {
        bgImage = "/cloudy-bg.jpg";
      }
    }

    return (
      <div
        key={bgImage}
        className="hero fade-bg"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(14,12,12,0.6)), url(${bgImage})`,
        }}
      >
        <div className="hero-text-content">
          <div className="logo-con">
            <img src="/logo.png" alt="logo" className="logo" />
            <h1 className="heading">Weatherly</h1>
          </div>
          <div className="search-con">
            <input
              type="search"
              className="search-input"
              placeholder="Search Location"
              value={locationInput}
              onChange={this.onChangeLocation}
              onKeyDown={this.onKeyDownSearch}
            />

            <button
              type="button"
              className="hero-search-button"
              onClick={this.onClickSearch}
            >
              <FaSearch className="search-icon" />
            </button>
          </div>
        </div>

        <div className="hero-content">
          {this.renderContainer()}
          <footer className="footer">
            <div className="footer-con">
              <a
                href="https://github.com/Manju025"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="footer-icon" />
              </a>

              <a
                href="https://www.linkedin.com/in/manjundhar-adagiri/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="footer-icon" />
              </a>
              <p className="footer-p">~Manjundhar A</p>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default Hero;
