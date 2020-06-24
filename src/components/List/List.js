import React from 'react'

import classes from './List.module.css'

const List = ({ radioStationList }) => {
    return (
        <div className={classes.List}>
            {radioStationList.map((station) => (
                <div key={station.id} className={classes.radioStation}>
                    <span className={classes.radioName}>{station.radioStation}</span>
                    <span className={classes.frequency}>{station.frequency}</span>
                </div>
            ))}
        </div>
    )
}

export default List
