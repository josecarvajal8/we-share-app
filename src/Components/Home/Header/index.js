import React from 'react'
import _ from '../../../Helpers/Utilities'
import './style.css'
export default ({ title }) => {
    return (
        <div>
            <div className="header">
                <h1 className="title">{_.capitalize(title)}</h1>
            </div>
        </div>
    )
}