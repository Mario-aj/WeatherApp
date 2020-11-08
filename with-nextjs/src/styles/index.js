import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;

    background: url('/assets/background.jpg');
    background-size: cover;
`;

export const Header = styled.div`
    width: 100%;
    height: 8%;
    position: relative;
    z-index: 1;

    background: #fff;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);

    div {
        width: 100%100%;
        height: 100%;
        max-width: 980px;
        margin: 0 auto;

        padding: 0 32px;

        display: flex;
        align-items: center;
        justify-content: center;

        h1 {
            color: #7159c1;
            font-size: 2rem;
        }
    }
`;

export const Content = styled.div`
    height: 92%;
    margin: 0 auto;
    display: grid;
    grid-template-rows: 2.5fr 1fr;
    grid-template-areas:
        'search'
        'footer';
`;

export const Search = styled.div`
    width: 100%;
    max-width: 980px;
    margin: 0 auto;
    grid-area: search;
    padding: 16px;

    display: flex;
    justify-content: space-between;

    .location {
        display: flex;
        flex-direction: column;

        align-items: flex-end;

        p {
            display: flex;
            flex-direction: column;

            align-items: flex-end;

            color: #fff;
            font-size: 1.6rem;

            span {
                font-size: 1.4rem;
            }
        }
    }
`;

export const Form = styled.form`
    display: flex;
    align-items: flex-start;
    justify-content: center;

    input {
        background: transparent;
        width: 150px;
        color: #fff;
        font-size: 1.6rem;

        &::placeholder {
            color: rgba(255, 255, 255, 0.9);
        }
    }

    button {
        background: transparent;
        cursor: pointer;
    }
`;

export const Footer = styled.div`
    grid-area: footer;
    background: #44475a;
    display: flex;

    justify-content: space-around;

    .main-content {
        display: flex;
        flex-direction: column;
        margin: 32px;

        .weather-graus {
            display: flex;
            align-items: center;

            strong {
                color: #fff;
                font-size: 5rem;
                margin-right: 16px;
            }
        }

        .weather-info {
            display: flex;
            margin-top: 12px;
            align-items: center;

            p {
                background: rgba(0, 0, 0, 0.5);
                padding: 3px 6px;
                border-radius: 12px;
                color: #fff;
                font-size: 1.6rem;
                text-transform: uppercase;
                font-weight: bold;
            }

            span {
                margin-left: 8px;
                color: #fff;
                font-size: 1.4rem;
                text-transform: uppercase;
                text-align: center;
                font-weight: bold;
            }
        }
    }
    ul {
        list-style: none;

        display: flex;
        margin: 32px;

        li {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border-right: 1px solid rgba(0, 0, 0, 0.3);
            padding: 0 20px;

            p {
                background: rgba(0, 0, 0, 0.5);
                padding: 3px 6px;
                border-radius: 12px;
                color: #fff;
                font-size: 1rem;
                text-transform: uppercase;
                font-weight: bold;
                margin-bottom: 16px;
            }

            span {
                color: #fff;
                margin-top: 8px;
                font-size: 1.4rem;
                font-weight: bold;
            }
        }

        li:first-child {
            border-left: 1px solid rgba(0, 0, 0, 0.3);
        }
    }

    @media (max-width: 768px) {
        display: block;

        .main-content {
            justify-content: center;
            align-items: center;

            margin-bottom: 16px;
            padding-bottom: 16px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.6);
        }

        ul {
            justify-content: center;
            align-items: center;
        }
    }
`;
