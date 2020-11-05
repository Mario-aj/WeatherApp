import styled from 'styled-components';

export const Container = styled.li`
    max-width: 260px;
    display: flex;
    flex-direction: column;

    background: #7159c1;
    padding: 16px;
    border-radius: 6px;

    header.main-header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h1,
        span {
            font-size: 1.5rem;
            color: #fff;
            line-height: 2rem;
        }

        h1 {
            font-size: 1.7rem;
            font-weight: bold;
            line-height: 2rem;
            color: #fff;
        }
    }

    div.main-content {
        margin: 32px 0;
        display: flex;
        align-items: center;

        img {
            height: 36px;
            width: 36px;
            border-radius: 50%;
            margin-left: 32px;
        }

        strong {
            font-size: 3.3rem;
            line-height: 2.6rem;
            color: #fff;
            font-weight: bold;
        }
    }

    footer {
        display: flex;
        align-items: center;

        p {
            margin-right: 8px;
            color: #fff;
            font-size: 1.4rem;
            line-height: 1.8rem;

            span {
                color: #fff;
                font-size: 1.2rem;
            }
        }
    }
`;
