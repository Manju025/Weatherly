# Weatherly - Real-Time Weather App

A modern, responsive weather application built with React that provides real-time weather information, including current conditions, 5-day forecasts, and dynamic backgrounds based on weather conditions. Get accurate weather updates for any location worldwide with an intuitive and visually appealing interface.

### Welcome Page
<p align="center">
  <img src="https://drive.google.com/file/d/1jpistzoMUGBjFGHTOfK6JdiRyJ0qPKxk/view?usp=sharing" width="600" />
</p>


## Features

- **Real-Time Weather Data**: Fetches live weather information using WeatherAPI.
- **Location Search**: Search for weather by city name with autocomplete suggestions.
- **Current Weather Display**: Shows temperature, weather condition, feels-like temperature, and more.
- **Detailed Metrics**: Includes wind speed/direction, humidity, UV index, cloud cover, and atmospheric pressure.
- **5-Day Forecast**: View weather predictions for the next 5 days with icons and temperatures.
- **Dynamic Backgrounds**: Background images change based on current weather conditions (sunny, rainy, snowy, etc.).
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices.
- **Animations**: Smooth transitions and Lottie animations for enhanced user experience.
- **Error Handling**: Graceful handling of invalid locations and API errors.

## Technologies Used

- **Frontend**: React 19, React DOM
- **Routing**: React Router DOM
- **Icons**: React Icons
- **Charts**: CanvasJS React Charts
- **Animations**: Lottie React, DotLottie React
- **Date Handling**: date-fns
- **API**: WeatherAPI
- **Build Tool**: Create React App (React Scripts)
- **Testing**: Jest, React Testing Library
- **Styling**: CSS (with responsive design)

## Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (version 14 or higher)
- npm (comes with Node.js)
- A WeatherAPI key (sign up at [WeatherAPI](https://www.weatherapi.com/))

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Manju025/weatherly.git
   cd weatherly
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your WeatherAPI key:
   ```
   REACT_APP_WEATHER_API_KEY=your_api_key_here
   ```

## Usage

1. Start the development server:

   ```bash
   npm start
   ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser.

3. Enter a city name in the search bar and press Enter or click the search icon.

4. View the current weather and 5-day forecast for the selected location.

## API Setup

This app uses WeatherAPI for weather data. To get your API key:

1. Visit [WeatherAPI](https://www.weatherapi.com/).
2. Sign up for a free account.
3. Generate an API key from your dashboard.
4. Add the key to your `.env` file as shown in the Installation section.

**Note**: The free tier allows 1,000,000 calls per month. For higher usage, consider upgrading your plan.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: This is a one-way operation. Once you eject, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point, you're on your own.

You don't have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Manjundhar A**

- GitHub: [@Manju025](https://github.com/Manju025)
- LinkedIn: [manjundhar-adagiri](https://www.linkedin.com/in/manjundhar-adagiri/)

## Acknowledgments

- Weather data provided by [WeatherAPI](https://www.weatherapi.com/).
- Icons from [React Icons](https://react-icons.github.io/react-icons/).
- Animations powered by [Lottie](https://lottiefiles.com/).

## Learn More

- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React Documentation](https://reactjs.org/)
- [WeatherAPI Documentation](https://www.weatherapi.com/docs/)
