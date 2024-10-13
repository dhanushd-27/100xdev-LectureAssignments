import React, { useContext } from 'react'
import { BulbContext } from '../App'
const BulbState = () => {

    const { bulbOn } = useContext(BulbContext)

    return (
        <div>
            {bulbOn ? "Bulb On" : "Bulb Off"}
        </div>
    )
}

export default BulbState
