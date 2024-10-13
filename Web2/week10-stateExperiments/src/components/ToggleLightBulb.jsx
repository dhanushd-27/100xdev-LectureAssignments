import React, { useContext } from 'react'
import { BulbContext } from '../App'

const ToggleLightBulb = () => {

    const {setBulbOn, bulbOn} = useContext(BulbContext)

    function changeState(){
        setBulbOn(!bulbOn)
    }

    return (

        <div>
            <button onClick={changeState}>Toggle</button>
        </div>
    )
}

export default ToggleLightBulb
