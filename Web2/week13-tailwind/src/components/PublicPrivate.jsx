import { useState } from "react";
import down from "../assets/down.svg"

export const PublicPrivate = () => {
    const logoLink =  ["https://img.icons8.com/ios/50/globe--v1.png","https://img.icons8.com/forma-bold-filled/24/lock.png"];

    const [isOpen, setOpen] = useState(false);
    const [currentOption, setCurrentOption] = useState("Private");
    const [currentLogo, setCurrentLogo ] = useState(logoLink[1]);

    function updateVariables(option, logo){
        setCurrentOption(option);
        setCurrentLogo(logo);
        setOpen(false)
    }

    return(
        <> 
            <div onClick={() => { setOpen((o) => !o)} } className="cursor-grab inline-flex gap-1 items-center" >
                <img src={ currentLogo } alt="" className="invert w-[15px] h-[15px]" />
                <p>{ currentOption }</p>
                <img src={ down } alt="" className="invert w-4"/>
            </div>

            { isOpen ?  <div className="grid grid-rows-2 absolute top-32 right-9 bg-leetcode-lightgrey p-2 rounded-md z-10 w-24 h-18">
                            <button className="flex gap-1 items-center justify-center hover:bg-leetcode-darkgrey p-1 rounded-md cursor-grab"  onClick={ () => { 
                                updateVariables("Public", logoLink[0]);
                            }}> <img className="w-4 h-4 invert" src={ logoLink[0] } alt="globe--v1" /> Public</button>
                            <button className="flex gap-1 items-center justify-center hover:bg-leetcode-darkgrey p-1 rounded-md cursor-grab"  onClick={() => { 
                                    updateVariables("Private", logoLink[1]);
                                }}> <img className="w-4 h-4 invert" src={ logoLink[1] } alt="lock" /> Private</button>
                        </div>
            : null }
        </>
    )
}