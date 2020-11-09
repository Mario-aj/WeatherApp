import moment from 'moment';
import serverConnection from '../services/api';

export default {
    getData: async requestLocation => {
        const response = await serverConnection.api.get(
            `/current.json?key=${serverConnection.key}&q=${requestLocation}`
        );

        const { current, location } = response.data;

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

        const responseWeek = await serverConnection.api.get(
            `/forecast.json?key=${
                serverConnection.key
            }&q=${requestLocation}&days=${6}`
        );

        const weekData = responseWeek.data.forecast.forecastday.map(item => {
            return {
                day: moment(item.date).format('ddd'),
                icon: item.day.condition.icon,
                temperature: item.day.maxtemp_c,
            };
        });

        return {
            weathers: data,
            week: weekData,
        };
    },

    getDataPeerWeek: async search => {
        const response = await serverConnection.api.get(
            `/current.json?key=${serverConnection.key}&q=${search}`
        );

        const { current, location } = response.data;

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

        const responseWeek = await serverConnection.api.get(
            `/forecast.json?key=${serverConnection.key}&q=${search}&days=${6}`
        );

        const weekData = responseWeek.data.forecast.forecastday.map(item => {
            return {
                day: moment(item.date).format('ddd'),
                icon: item.day.condition.icon,
                temperature: item.day.maxtemp_c,
            };
        });

        return {
            data,
            weekData,
        };
    },
};
