import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Card(props) {
    const { data } = props;

    return (
        <Container>
            <header className="main-header">
                <h1>
                    {data.city}, {data.country}
                </h1>
                <span>{data.date}</span>
            </header>

            <div className="main-content">
                <strong>{data.temperature}*C</strong>
                <img
                    src="https://townsquare.media/site/490/files/2019/01/GettyImages-1063607204.jpg"
                    alt="icon"
                />
            </div>

            <footer>
                <p>
                    Sensação <span>{data.feelslike}*C</span>
                </p>
                <p>
                    Humidade <span>{data.humidity}%</span>
                </p>
                <p>
                    Vento <span>{data.wind}km/h</span>
                </p>
            </footer>
        </Container>
    );
}

Card.propTypes = {
    data: PropTypes.shape().isRequired,
};

export default Card;
