export interface iVehicle {
    title: string;
    description: string;
    icons: {
        large: string | null;
        medium: string | null;
    };
    level: number;
    type: {
        name: string;
        title: string;
        icons: {
            default: string;
        };
    };
    nation: {
        name: string;
        title: string;
        color: string;
        icons: {
            small: string | null;
            medium: string | null;
            large: string | null;
        };
    };
}

export interface iVehicleCard  {
    title: string,
    description: string,
    nation: string,
    nationIcon: string,
    type: string,
    typeIcon: string,
    level: number,
    levelRoman: string,
    mainIcon: string
}

export interface iNationData {
    nation: string,
    nationIcon: string | null
}

export interface iVehicleTypesData {
    type: string,
    typeIcon: string | null 
}

export interface iFilter {
    onFilterClick: (e: React.MouseEvent<HTMLLIElement | HTMLButtonElement>, filter: string) => void;
}

export interface iNationFilter extends iFilter {
    activeNationFilter: string,
    nationsData: iNationData[],
}

export interface iVehicleTypeFilter extends iFilter {
    activeTypeFilter: string,
    vehicleTypesData: iVehicleTypesData[],
}

export interface iLevelFilter extends iFilter {
    activeLevelFilter: string,
    levelsData: string[]
}

export interface iAsideFilters extends 
                            Omit<iNationFilter, 'onFilterClick'>, 
                            Omit<iVehicleTypeFilter, 'onFilterClick'>,
                            Omit<iLevelFilter, 'onFilterClick'> {
    onFilterChanged: (e: string, filter: string) => void
}

export interface iActiveFilter {
    type: string,
    level: string,
    nation: string
}

