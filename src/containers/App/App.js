import React, { Component } from 'react'
import { BounceLoader } from 'react-spinners'

// import '../../containers/App.css'

// import classes from '*.module.css'
// import Card from '../../elements/Card/Card'
import Header from '../../components/Header/Header'
// import Footer from '../../components/Footer/Footer'
import SearchBar from '../../components/SearchBar/SearchBar'
import Preview from '../../components/Preview/Preview'
import assetMapper from '../../assets/assetMapper.json'
import ErrorNotice from '../../components/ErrorNotice/ErrorNotice'
import WeatherDetails from '../../components/WeatherDetails/WeatherDetails.tsx'
import { WeatherDetailsWeekly } from 'components/WeeklyWeatherDetails'

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
    weatherDetailsWeekly: {
      description: '',
      city: '',
      country: '',
      icon: 'Preview',
      fullData: [],
      dailyData: [],
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
      const todayURL =
        API_URL + `weather?q=${city}&appid=${API_KEY}&units=metric`
      const weekUrl =
        API_URL + `forecast?q=${city}&appid=${API_KEY}&units=metric`
      // const todayURL = `https://api.openweathermap.org/data/2.5/weather`
      // const zipURL = `https://api.zip-codes.com/ZipCodesAPI.svc/1.0/QuickGetZipCodeDetails/`

      //TODO refactor async calls to use modern async await and try catch
      // async function getData() {
      //   try {
      //     // set loading = true
      //     const response = await getDayWeather()
      //     this.setState({ foo: mapFoo(response.data) })
      //     // deal with response
      //   } catch (error) {
      //     // deal with error
      //   } finally {
      //     // end loading
      //   }
      // }

      this.setState(
        {
          loading: true,
          error: false,
        },
        () => {
          fetch(todayURL)
            .then((res) => {
              if (res.status === 200) {
                return res.json()
              } else {
                throw Error(res.status)
              }
            })
            .then((data) => {
              this.setState({
                weatherDetails: {
                  temperature: data.main.temp,
                  description: data.weather[0].main,
                  city: data.name,
                  country: data.sys.country,
                  main: data.main,
                  icon: data.weather[0].icon,
                },
              })
            })
        },
        fetch(weekUrl)
          .then((res) => {
            if (res.status === 200) {
              return res.json()
            } else {
              throw Error(res.status)
            }
          })
          .then((data) => {
            const dailyData = data.list.filter((forecast) =>
              forecast.dt_txt.includes('18:00:00'),
            )
            this.setState({
              weatherDetailsWeekly: {
                city: data.name,
                country: data.city.country,
                fullData: data.list,
                dailyData: dailyData,
                description: data.list[0].weather[0].description,
                icon: data.list[0].weather[0].icon,
              },
            })
            console.log(this.state)
          })
          .catch((err) => {
            console.log(err)
            this.setState({
              error: true,
            })
          })
          .finally(() => {
            this.setState({
              loading: false,
            })
          }),
      )
    }
  }

  render() {
    const { loading, error, weatherDetails, weatherDetailsWeekly } = this.state

    // Conditionally render card content
    // let cardContent = <Preview />

    return (
      <div className="App">
        <Header
          color={
            assetMapper.colors[
              // Set header color based on weather condition; if error, set color to red
              error ? 'error' : this.state.weatherDetails.description
            ]
          }
          onClickHandler={this.tryAgainHandler}
        />
        <SearchBar
          value={this.state.searchBarInput}
          onChange={this.searchBarHandler}
          onKeyPress={this.setWeather}
          error={error}
        />
        {error && <ErrorNotice onClickHandler={this.tryAgainHandler} />}
        {loading && <BounceLoader />}
        {!error && !loading && weatherDetails && weatherDetailsWeekly && (
          <>
            <WeatherDetails
              data={weatherDetails}
              color={
                assetMapper.colors[
                  // Set header color based on weather condition; if error, set color to red
                  error ? 'error' : weatherDetails.description
                ]
              }
              onClickHandler={this.tryAgainHandler}
              // src={
              //   assetMapper.icons[
              //     error ? 'error' : this.state.weatherDetails.description
              //   ]
              // }
            />
            <WeatherDetailsWeekly
              {...weatherDetailsWeekly}
              onClickHandler={this.tryAgainHandler}
              // src={
              //   assetMapper.icons[
              //     error ? 'error' : this.state.weatherDetails.description
              //   ]
              // }
            />
          </>
        )}
      </div>
    )
  }
}

export default App
