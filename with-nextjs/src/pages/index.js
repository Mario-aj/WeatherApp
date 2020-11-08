import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
import { useState } from 'react';
import {
    Container,
    Header,
    Content,
    Form,
    Search,
    Footer,
} from '../styles/index';
import Services from '../services/api';

export default function Home({ weathers, week }) {
    const [search, setSearch] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(search);
        setSearch('');
    };
    return (
        <Container>
            <Header>
                <div>
                    <h1>Welcome to weather-maj</h1>
                </div>
            </Header>

            <Content>
                <Search>
                    <Form onSubmit={handleSubmit}>
                        <input
                            onChange={e => setSearch(e.target.value)}
                            placeholder="Luanda, AO"
                            type="text"
                        />
                        <button type="submit">
                            <FaSearch size={20} color="#fff" />
                        </button>
                    </Form>

                    <div className="location">
                        <FaMapMarkerAlt size={30} color="#fff" />

                        <p>
                            <strong>
                                {weathers.city}, {weathers.country}
                            </strong>

                            <span>{weathers.time}</span>
                        </p>
                    </div>
                </Search>

                <Footer>
                    <div className="main-content">
                        <div className="weather-graus">
                            <strong>{weathers.temperature}*C</strong>
                            <img src={weathers.icon} alt="icon" />
                        </div>

                        <div className="weather-info">
                            <p>{weathers.day}</p>
                            <span>Humidity: {weathers.humidity}%</span>
                            <span>Feelslike: {weathers.feelslike}*C</span>
                            <span>Wind: {weathers.wind}km/h</span>
                        </div>
                    </div>

                    <ul>
                        {week.map(item => (
                            <li key={item.temperature}>
                                <p>{item.day}</p>
                                <img src={item.icon} alt="icon" />
                                <span>{item.temperature}*C</span>
                            </li>
                        ))}
                    </ul>
                </Footer>
            </Content>
        </Container>
    );
}

export const getServerSideProps = async () => {
    const response = await Services.api.get(
        `/current.json?key=${Services.key}&q=${'Luanda'}`
    );

    const { current, location } = response.data;

    const moment = require('moment');
    const data = {
        day: moment(location.localtime).format('dddd'),
        date: moment(location.localtime).format('ddd, MMM'),
        time: moment(location.localtime).format('hh:mm'),
        city: location.name,
        icon: current.condition.icon,
        country: location.country,
        temperature: current.temp_c,
        feelslike: current.feelslike_c,
        humidity: current.humidity,
        wind: current.wind_kph,
    };

    const responseWeek = await Services.api.get(
        `/forecast.json?key=${Services.key}&q=${'Luanda'}&days=${6}`
    );

    const weekData = responseWeek.data.forecast.forecastday.map(item => {
        return {
            day: moment(item.date).format('ddd'),
            icon: item.day.condition.icon,
            temperature: item.day.maxtemp_c,
        };
    });

    return {
        props: {
            weathers: data,
            week: weekData,
        },
    };
};
