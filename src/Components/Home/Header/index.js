import React from 'react'
import _ from '../../../Helpers/Utilities'
import './style.css'
export default ({ title }) => {
    const btns = ['Home', 'About', 'Devs']
    const listBtns = (data) => data.map(el => <div className='btns'><p className='textBtns'>{el}</p></div>)
    return (
        <div>
            <div className='header'>
                <div className='containerList'>
                    {listBtns(btns)}
                </div>
                <h1 className='title'>{_.capitalize(title)}</h1>
            </div>
        </div>
    )
}