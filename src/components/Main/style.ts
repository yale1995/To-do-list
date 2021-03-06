import styled from 'styled-components'

export const Container = styled.main`

position:relative;
border-radius: 1rem;

background: #FFFFFF;


max-width:1120px;
margin: 0 auto;
margin-top: -10rem;
padding: 70px 60px;

header{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 3rem;

    h2{
        color: black;
        font-size: 2.25rem;
    }

    .input-group{
            display:flex;
            gap:0.25rem;
            align-items: center;

            background: #fff;
            font-size: 1rem;

            input{
                flex: 1;
                background:#EBEBEB;
                border: 0;
                padding: 12px 24px;

                border-radius: 8px;
                border:0;

                &::placeholder{
                    color:#A09CB1;

                }

            
            }

            button{
                font-weight: 600;
                border-radius: 8px;
                border: 0;
                background: #3FAD27;
                color: #fff;
                display:flex;
                flex-direction:row;
                align-items: center;

                padding: 14px;
                transition: filter 0.2s;

                &:hover{
                        filter: brightness(0.95);
                    }

            }
    }
}

`
export const List = styled.div`
margin-top:2rem;

ul{
    list-style:none;

    li{
        display:flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #EBEBEB;
        padding: 1rem;

        div{

            display: flex;
            align-items: center;
            gap: 14px;
            outline: 0;

            p{
                font-size: 1rem;

            }

            &.completed{

                p{
                    text-decoration:line-through;
                    opacity: 0.6;
                }
            }

            .checkbox-container{
                display: block;
                position: relative;
                padding-left: 14px;
                margin-bottom: 18px;

                input{
                    position: absolute;
                    opacity: 0;
                    cursor: pointer;
                    height:0;
                    width: 0;

                    &:checked{
                        &~.checkmark{
                            background: #273FAD;
                        }
                        &~.checkmark:after{
                            display:block
                        }
                    }
                }

                .checkmark{
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 16px;
                    height: 16px;
                    background-color: #EBEBEB;
                    border-radius: 2px;

                    &:after{
                        content:"";
                        position:absolute;
                        display:none;
                        left:6px;
                        top:3px;
                        width: 3px;
                        height: 6px;
                        border: solid white;
                        border-width: 0 2px 2px 0;
                        transform: rotate(45deg)

                    }
                }
            }

        }

    }

    button{
        background: transparent;
        border:0;

        svg{
            color:#ad273f

        }

        &:hover{
            svg{
                filter:brightness(0.5)
            }
        }
    }
}

`