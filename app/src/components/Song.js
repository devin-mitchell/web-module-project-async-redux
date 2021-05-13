import React from 'react'
import { connect } from 'react-redux'
import { fetchSongInfo } from '../actions';
import styled from 'styled-components';
import { useEffect } from 'react';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    width: 75%;
    margin: 0 auto;
    background-color: #4ca1a3;
    border: 10px solid #a5e1ad; 
    box-shadow: 20px 20px 20px #21094e;
    border-radius: 20px;
    font-family: sans-serif;
    text-align: center;

    img {
        border: 5px solid #511281;
        border-radius: 15px;
        box-shadow: 10px 10px 5px #21094e;
    }

    h1{
        color: #f9f1f1;
        font-size: 1.5rem;
        margin: 20px 20px;
        
    }
    h2{
        color: #f9f1f1;
        transition: all 500ms ease-in-out;
        margin: 20px 20px;
        

        &:hover {
            transform: scale(1.2);
            border-bottom: 2px solid #f9f1f1;
        }
    }

    button{
        color: #f9f1f1;
        background: #511281;
        padding: 5px 25px;
        border-radius: 5px;
        margin-bottom: 15px;
        box-shadow: 5px 5px 5px #21094e;

        &:active {
            box-shadow: 2px 2px 2px #21094e;
            transform: translate(2px, 2px)
        }
    }
`

const  Song = (props) => {

    useEffect(() => {
        props.fetchSongInfo()
    }, [])

    const handleClick = () => {
        props.fetchSongInfo()
    }

    return (
        <Container>
            <h1>Which IVOURIES song are you!?</h1>
            <img src={props.songInfo.artworkUrl100} alt='ivouries is cool'/>
            <a href={props.songInfo.previewUrl}>
                <h2>{props.songInfo.trackName}</h2>
            </a>
            <button onClick={handleClick}>get song</button>
        </Container>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        songInfo: state.songInfo
    }
}

export default connect(mapStateToProps, { fetchSongInfo })(Song);