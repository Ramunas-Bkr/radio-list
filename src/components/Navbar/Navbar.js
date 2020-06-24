import React from 'react'

import Back from '../../images/back-arrow.png'
import Switch from '../../images/switch.png'
import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={classes.Navbar}>
            <div className={classes.navbarLinks}>
                <img className={classes.back} src={Back} alt="back-arrow" />
                <div className={classes.header}>Stations</div>
                <img className={classes.switch} src={Switch} alt="switch" />
            </div>
        </div>
    )
}

export default Navbar
