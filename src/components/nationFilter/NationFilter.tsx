import { iNationFilter } from '../../types/types';

import './NationFilter.scss';

const NationFilter = ({nationsData, onFilterClick, activeNationFilter} : iNationFilter) => {

    const nations = [{nation: 'All', nationIcon: null}, ...nationsData]
 
    return (
        <ul className='nationFilter'>
            {nations.map((nation, i) => {
                return (
                    <li className={activeNationFilter === nation.nation ? 'nationFilter-item active' : 'nationFilter-item'} 
                        key={i+1}
                        data-value={nation.nation}
                        onClick={(e) => onFilterClick(e, 'nation')}>
                        <div className='nationFilter-name'>
                            {nation.nation}
                        </div>
                        <div className='nationFilter-icon'>
                            {
                                nation.nationIcon ? <img src={nation.nationIcon} alt="nation" /> : null
                            }
                        </div>
                        <span className='triangle'></span>
                    </li>
                    )
                })
            }
    </ul>
    )
}

export default NationFilter;