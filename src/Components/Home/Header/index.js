import React from 'react'
import logo from '../../../logo.svg'
import _ from '../../../Helpers/Utilities'
import './style.css'
export default () => {
    const tittle = _.capitalize('we share')
    return (
        <div>
            <header className="App-header">
                <h1 className="App-title">{tittle}</h1>
            </header>
        </div>
    )
}