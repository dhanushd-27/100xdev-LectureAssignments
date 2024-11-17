import menu from "../assets/menu.svg";
import { PublicPrivate } from "./PublicPrivate";
import play from "../assets/play.svg";
import fork from "../assets/fork.svg"
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isOpenAtom } from "../recoil/atom";

const SummaryCard = () => {
    const setIsOpen = useSetRecoilState(isOpenAtom);
    const isOpen = useRecoilValue(isOpenAtom);

    return (
        <div className={ `relative bg-leetcode-grey w-80 h-[278px] rounded-lg `}>
            <button className='absolute top-3 left-3 invert w-4' onClick={ () => { setIsOpen(!isOpen) } } ><img src={ menu } /></button>

            <div className="flex flex-col items-center relative top-7">
                <img src="https://assets.leetcode.com/favorite/default_favorite_cover.png" alt="" className="w-16"/>
                <h1 className="text-white text-2xl">Favorite</h1>
                <div className="text-white flex items-center gap-2 z-10">Orca · 19 questions · { <PublicPrivate/> }</div>
            </div>

            <button className="absolute left-20 top-[170px] flex gap-2 items-center bg-white py-2 px-4 rounded-full" > <img src={ play } alt="" className="w-3"/> Practive</button>
            <button className="w-10 h-10 bg-leetcode-lightgrey flex items-center justify-center rounded-full absolute top-[170px] left-[200px]"> <img src={ fork }alt="" className="w-4 invert" /></button>

            <button className="text-white absolute top-56 left-6 bg-leetcode-lightgrey px-2 py-2 text-xs rounded-md">
                Progress: 19 Solved
            </button>
        </div>
    )
}

export default SummaryCard
