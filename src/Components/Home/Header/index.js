import React from 'react'
import _ from '../../../Helpers/Utilities'
import './style.css'
export default () => {
    const tittle = _.capitalize('we share')
    return (
        <div>
            <div className="header">
                <h1 className="title">{tittle}</h1>
            </div>
        </div>
    )
}