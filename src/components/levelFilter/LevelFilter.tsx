import { iLevelFilter } from "../../types/types";

import './LevelFilter.scss';

const LevelFilter = ({levelsData, onFilterClick, activeLevelFilter} : iLevelFilter) => {

    const levels = ['All', ...levelsData];
    console.log(levels);

    return (
        <div className='levelFilter'>
            {
                levels.map((level, i) => {
                    return (
                        <button 
                            key={i} 
                            onClick={(e) => onFilterClick(e, 'level')}
                            data-value={level}
                            className={activeLevelFilter === level ? 'levelFilter-button active' : 'levelFilter-button'}
                            >
                            {level}
                        </button>
                    )
                })
            }
        </div>
    )
}

export default LevelFilter;