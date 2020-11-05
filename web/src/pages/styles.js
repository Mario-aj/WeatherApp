import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 980px;
    margin: 0 auto;

    form {
        background: #fff;

        display: flex;
        padding: 16px 32px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        margin: 32px 0;

        input {
            border: 1px solid #ddd;
            margin-bottom: 8px;
        }
        input::placeholder {
            color: #999;
            font-size: 1.4rem;
        }

        button {
            background: #7159c1;
            color: #fff;
            font-size: 1.4rem;
            font-weight: bold;
            transition: all 0.3s;
            padding: 0 8px;
            margin-left: 4px;
        }
        button:hover {
            background: ${darken(0.05, '#7159c1')};
        }
    }
    ul {
        display: grid;
        width: 100%;
        grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
        grid-gap: 16px;
    }
`;
