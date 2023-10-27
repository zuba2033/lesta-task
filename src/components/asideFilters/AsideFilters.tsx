import { iAsideFilters } from '../../types/types';

import NationFilter from '../nationFilter/NationFilter';
import VehicleTypeFilter from '../vehicleTypeFilter/VehicleTypeFilter';
import LevelFilter from '../levelFilter/LevelFilter';

import './AsideFilters.scss';

const AsideFilters = (props : iAsideFilters) => {

    const { onFilterChanged, 
        nationsData, 
        vehicleTypesData,
        levelsData,
        activeLevelFilter, 
        activeNationFilter,
        activeTypeFilter } = props;

    const onFilterClick = (event: React.MouseEvent<HTMLLIElement | HTMLButtonElement >, filter: string): void => {
        const value = event.currentTarget.dataset.value || '';
        onFilterChanged(value, filter)
    }

    return (
        <aside className='aside'>
            <LevelFilter
                levelsData={levelsData}
                activeLevelFilter={activeLevelFilter}
                onFilterClick={onFilterClick}/>
            <VehicleTypeFilter
                vehicleTypesData={vehicleTypesData}
                activeTypeFilter={activeTypeFilter}
                onFilterClick={onFilterClick}
                />
            <NationFilter
                nationsData={nationsData}
                activeNationFilter={activeNationFilter}
                onFilterClick={onFilterClick}/>
        </aside>
    )
}

export default AsideFilters;