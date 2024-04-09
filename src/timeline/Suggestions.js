import React from 'react';
import "./Suggestions.css";
import { Avatar } from '@mui/material';

function Suggestions() {
  return (
    <div className='Sugessions'>
        <div className='sugessions__title'>Sugessions for you</div>
        <div className='sugessions__usernames'>


            <div className='sugessions__username'>
                <div className='username__left'>
                    <span className='avatar'>
                        <Avatar>R</Avatar>
                    </span>
                    <div className='userName__info'>
                        <span className='username'>Romeo_ </span>
                        <span className='relations'>New to Instagram</span>
                    </div>
                </div>
                <button className='follow__button'>Follow</button>
            </div>

            <div className='sugessions__username'>
                <div className='username__left'>
                    <span className='avatar'>
                        <Avatar>R</Avatar>
                    </span>
                    <div className='userName__info'>
                        <span className='username'>Romeo_</span>
                        <span className='relations'>New to Instagram</span>
                    </div>
                </div>
                <button className='follow__button'>Follow</button>
            </div>

            <div className='sugessions__username'>
                <div className='username__left'>
                    <span className='avatar'>
                        <Avatar>R</Avatar>
                    </span>
                    <div className='userName__info'>
                        <span className='username'>Romeo_</span>
                        <span className='relations'>New to Instagram</span>
                    </div>
                </div>
                <button className='follow__button'>Follow</button>
            </div>

            <div className='sugessions__username'>
                <div className='username__left'>
                    <span className='avatar'>
                        <Avatar>R</Avatar>
                    </span>
                    <div className='userName__info'>
                        <span className='username'>Romeo_</span>
                        <span className='relations'>New to Instagram</span>
                    </div>
                </div>
                <button className='follow__button'>Follow</button>
            </div>
        </div>
    </div>
  )
}

export default Suggestions