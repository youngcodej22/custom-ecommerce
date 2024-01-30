import React from 'react'
import MainVisual from '../MainVisual/MainVisual'

import './Container.scss'

// ! container classname은 styles/general에 연결
const Container = () => {
    return (
        <div className="container">
            <MainVisual />
        </div>
    )
}

export default Container