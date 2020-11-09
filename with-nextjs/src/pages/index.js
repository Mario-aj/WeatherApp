import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
import { useState } from 'react';
import axios from 'axios';
import {
    Container,
    Header,
    Content,
    Form,
    Search,
    Footer,
} from '../styles/index';
import Server from '../lib/uteis';

export default function Home({ weathers, week }) {
    const [search, setSearch] = useState('');
    const [currentSearch, setCurrentSearch] = useState([]);
    const [currentSearchOfWeek, setCurrentSearchOfWeek] = useState([]);

    const handleSubmit = async e => {
        e.preventDefault();

        const response = await Server.getDataPeerWeek(search);

        setCurrentSearch(response.data);
        setCurrentSearchOfWeek(response.weekData);
        setSearch('');
    };
    return (
        <Container>
            <Header>
                <div>
                    <h1>Welcome to the weather-maj</h1>
                </div>
            </Header>

            <Content>
                <Search>
                    <Form onSubmit={handleSubmit}>
                        <input
                            onChange={e => setSearch(e.target.value)}
                            placeholder="type here!"
                            type="text"
                            value={search}
                        />
                        <button type="submit">
                            <FaSearch size={20} color="#fff" />
                        </button>
                    </Form>

                    <div className="location">
                        <FaMapMarkerAlt size={30} color="#fff" />

                        <p>
                            <strong>
                                {currentSearch.city || weathers.city},{' '}
                                {currentSearch.country || weathers.country}
                            </strong>

                            <span>{currentSearch.time || weathers.time}</span>
                        </p>
                    </div>
                </Search>

                <Footer>
                    <div className="main-content">
                        <div className="weather-graus">
                            <strong>
                                {currentSearch.temperature ||
                                    weathers.temperature}
                                *C
                            </strong>
                            <img
                                src={currentSearch.icon || weathers.icon}
                                alt="icon"
                            />
                        </div>

                        <div className="weather-info">
                            <p>{currentSearch.day || weathers.day}</p>
                            <span>
                                Humidity:{' '}
                                {currentSearch.humidity || weathers.humidity}%
                            </span>
                            <span>
                                Feelslike:{' '}
                                {currentSearch.feelslike || weathers.feelslike}
                                *C
                            </span>
                            <span>
                                Wind: {currentSearch.wind || weathers.wind}km/h
                            </span>
                        </div>
                    </div>

                    <ul>
                        {currentSearchOfWeek.length > 0
                            ? currentSearchOfWeek.map(item => (
                                  <li key={item.temperature}>
                                      <p>{item.day}</p>
                                      <img src={item.icon} alt="icon" />
                                      <span>{item.temperature}*C</span>
                                  </li>
                              ))
                            : week.map(item => (
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

export async function getServerSideProps() {
    const userLocation = await axios('http://ip-api.com/json');

    const response = await Server.getData(userLocation.data.city);

    return {
        props: {
            weathers: response.weathers,
            week: response.week,
        },
    };
}
