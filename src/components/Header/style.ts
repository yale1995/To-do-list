import styled from 'styled-components'

export const Container = styled.header`
background: #273FAD;
padding-top: 2rem;

&.black {
    transition: background 1s;
    background: black;

    button{
        background: white;
        color: black;
    }
}
`

export const Content = styled.div`

max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 12rem;

    display: flex;
    justify-content: center;
    align-items: center;
    justify-content:space-around;

    button{
        padding: 1rem 3rem;
        border-radius: .25rem;
        background-color: black;
        color: white;
        font-weight: 600;
        font-size:1rem;
        border: 0;
    }
`
