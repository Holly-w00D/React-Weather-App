import React, { Component } from 'react'
import { BounceLoader } from 'react-spinners'

// import '../../containers/App.css'

// import classes from '*.module.css'
// import Card from '../../elements/Card/Card'
//import Header from '../../components/WeatherDetails/Header'
// import Footer from '../../components/Footer/Footer'
import SearchBar from '../../components/SearchBar/SearchBar'
import WeatherDetails from '../../components/WeatherDetails/WeatherDetails'
import Preview from '../../components/Preview/Preview'
import assetMapper from '../../assets/assetMapper.json'
import ErrorNotice from '../../components/ErrorNotice/ErrorNotice'

class App extends Component {
  // const api = {
  //   key: 'a9f3aeedf7e9d4a5bccfab2f3dc2e3e2',
  //   base: 'https://api.openweathermap.org/data/2.5/',
  // }

  // const [query, setQuery] = useState('')
  // const [weather, setWeather] = useState({})

  // const search = (evt) => {
  //   if (evt.key === 'Enter') {
  //     fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
  //       .then((res) => res.json())
  //       .then((result) => {
  //         setWeather(result)
  //         setQuery('')
  //         console.log(result)
  //       })
  //   }
  // }

  state = {
    searchBarInput: '',
    weatherDetails: {
      temperature: null,
      description: '',
      city: '',
      country: '',
      main: '',
      icon: 'Preview',
    },
    loading: false,
    error: false,
  }

  searchBarHandler = (e) => {
    this.setState({
      searchBarInput: e.target.value,
    })
  }

  setWeather = (evt) => {
    if (evt.key === 'Enter') {
      const city = this.state.searchBarInput
      const API_KEY = 'a9f3aeedf7e9d4a5bccfab2f3dc2e3e2'
      const API_URL = 'https://api.openweathermap.org/data/2.5/'
      const URL = API_URL + `weather?q=${city}&appid=${API_KEY}&units=metric`
      this.setState(
        {
          weatherDetails: {},
          loading: true,
          error: false,
        },
        () => {
          fetch(URL)
            .then((res) => res.json())
            .then((data) => {
              console.log(data)
              if (data.cod === 200) {
                this.setState({
                  weatherDetails: {
                    temperature: data.main.temp,
                    description: data.weather[0].main,
                    city: data.name,
                    country: data.sys.country,
                    main: data.main,
                    icon: data.weather[0].icon,
                  },
                  loading: false,
                })
              } else {
                throw data.cod
              }
            })
            .catch((err) => {
              console.log(err)
              this.setState({
                loading: false,
                error: true,
              })
            })
        },
      )
    }
  }

  render() {
    // Conditionally render card content
    let cardContent = <Preview />
    if (this.state.loading) {
      cardContent = <BounceLoader />
    } else if (this.state.error) {
      cardContent = <ErrorNotice onClickHandler={this.tryAgainHandler} />
    } else if (
      this.state.weatherDetails.temperature &&
      this.state.weatherDetails.description &&
      this.state.weatherDetails.city &&
      this.state.weatherDetails.country !== ''
    ) {
      // Display weather information if temperature and description exists
      cardContent = <WeatherDetails data={this.state.weatherDetails} />
    }

    return (
      <div className="App">
        {/* <Header
          color={
            assetMapper.colors[
              // Set header color based on weather condition; if error, set color to red
              this.state.error ? 'error' : this.state.weatherDetails.description
            ]
          }
          onClickHandler={this.tryAgainHandler}
        /> */}
        <WeatherDetails
          data={this.state.weatherDetails}
          color={
            assetMapper.colors[
              // Set header color based on weather condition; if error, set color to red
              this.state.error ? 'error' : this.state.weatherDetails.description
            ]
          }
          onClickHandler={this.tryAgainHandler}
          // src={
          //   assetMapper.icons[
          //     this.state.error ? 'error' : this.state.weatherDetails.description
          //   ]
          // }
        >
          {cardContent}
        </WeatherDetails>
        <SearchBar
          value={this.state.searchBarInput}
          onChange={this.searchBarHandler}
          onKeyPress={this.setWeather}
          error={this.state.error}
        />
      </div>
    )
  }
}

export default App
