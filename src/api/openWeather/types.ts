export type Main = {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf?: number;
}

export type Weather = {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export type Clouds = {
    all: number;
}

export type Wind = {
    speed: number;
    deg: number;
    gust: number;
}

export type Rain = {
    ['3h']: number;
}

export type Forecast = {
    dt: number;
    main: Main;
    weather: Weather[];
    clouds: Clouds;
    wind: Wind;
    visibility: number;
    pop: number;
    sys: {
        pod: string;
    };
    dt_txt: string;
    rain: Rain;
}

export type Coord = {
lat: number;
lon: number;
}

export type City = {
id: number;
name: string;
coord: Coord;
country: string;
population: number;
timezone: number;
sunrise: number;
sunset: number;
}

export type WeeklyForecastResponse = {
    cod: string;
    message: number;
    cnt: number;
    list: Forecast[];
    city: City;
}

export type DayWeatherResponse= {
    coord: Coord;
    weather: Weather[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: {
        type: number;
        id: number;
        country: string;
        sunrise: number;
        sunset: number;
    };
    timezone: number;
    id: number;
    name: string;
    cod: number;
}
