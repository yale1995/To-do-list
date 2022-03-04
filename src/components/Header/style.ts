import styled from 'styled-components'

export const Container = styled.header`
background: #273FAD;
padding-top: 2rem;
transition: background 2s;


&.black {
    transition: background 2s;
    background: black;

    button{
        background: black;
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
        background: #273FAD;
        color: white;
        font-weight: 600;
        font-size:1rem;
        border: 0;
        border: 1px solid white;
        
        &:hover{
                        filter: brightness(0.7);
                    }
    }
`
