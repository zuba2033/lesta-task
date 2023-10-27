import { iVehicleTypeFilter } from '../../types/types';

import './VehicleTypeFilter.scss';

const VehicleTypeFilter = ({vehicleTypesData, onFilterClick, activeTypeFilter} : iVehicleTypeFilter) => {

   const vehicleTypes = [{type: 'All', typeIcon: null}, ...vehicleTypesData];

    return (
        <div className='typeFilter'>
            {vehicleTypes.map((type, i) => {
                    return (
                        <button 
                            className={activeTypeFilter === type.type ? 'typeFilter-button active' : 'typeFilter-button'}
                            key={i}
                            data-value={type.type}
                            onClick={(e) => onFilterClick(e, 'type')}>
                            <div className='typeFilter-name' >{type.type}</div>
                            {
                                type.typeIcon ? <img src={type.typeIcon} alt='ship-type' /> : null
                            }
                        </button>
                    )
                })
            }
        </div>
    )
}

export default VehicleTypeFilter;