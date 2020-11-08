import React, { useState } from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';
import { toast } from 'react-toastify';

import api from '../services/api';
import Api_ from '../config/api';
import { Container } from './styles';
import Card from '../components/card';

function main() {
    const [search, setSearch] = useState('');
    const [weathers, setWeathers] = useState([]);

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await api.get(
                `/current.json?key=${Api_.key}&q=${search}`
            );

            // console.log(response.data);
            const { current, location } = response.data;
            const data = {
                day: moment(location.localtime_epoch).format('dddd'),
                date: moment(location.localtime_epoch).format('ddd, MMM'),
                city: location.name,
                country: location.country,
                temperature: current.temp_c,
                feelslike: current.feelslike_c,
                humidity: current.humidity,
                wind: current.wind_kph,
            };
            setWeathers([data, ...weathers]);
            setSearch('');
        } catch (err) {
            toast.error('Ocorreu um erro!');
        }
    }
    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <input
                    name="name"
                    placeholder="type city's name"
                    onChange={(e) => setSearch(e.target.value)}
                />

                <button type="submit">search</button>
            </form>
            {weathers.length > 0 && (
                <ul>
                    {weathers.map((weather) => (
                        <Card key={weather.name} data={weather} />
                    ))}
                </ul>
            )}
        </Container>
    );
}

export default main;
