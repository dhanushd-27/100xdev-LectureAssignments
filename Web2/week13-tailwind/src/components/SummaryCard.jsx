import menu from "../assets/menu.svg"
import lock from "../assets/lock.svg"

const SummaryCard = () => {
    return (
        <div className='relative bg-leetcode-grey w-80 h-60 rounded-lg'>
            <img src={ menu } className='relative top-3 left-3 invert w-4 '/>
            <div className="flex flex-col items-center relative top-7">
                <img src="https://assets.leetcode.com/favorite/default_favorite_cover.png" alt="" className="w-16"/>
                <h1 className="text-white text-2xl">Favorite</h1>
                <p className="text-white">Orca · 19 questions · <img src={ lock } className="invert w-3 inline-flex" /> Private</p>
            </div>
            <button className="text-white relative top-14 left-6 bg-leetcode-lightgrey px-2 py-2 text-xs rounded-md">
                Progress: 19 Solved
            </button>
        </div>
    )
}

export default SummaryCard
