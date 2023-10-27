import { useState, useEffect } from 'react';

import { iVehicleCard } from "../../types/types";
import VehicleCard from "../vehicleCard/VehicleCard";

import './VehiclesList.scss';

const VehiclesList = ({ vehicles } : {vehicles: iVehicleCard[]}) => {

    const [visibleItemsCount, setVisibleItemsCount] = useState<number>(10);
    const itemsPerPage = 10;

    useEffect(() => {
        if (vehicles.length <= 10) setVisibleItemsCount(10);
    }, [vehicles])

    const showMoreItems = () => {
        setVisibleItemsCount((visibleItemsCount) => visibleItemsCount + itemsPerPage);
    }

    const renderContent = () => {

        if (vehicles.length === 0) {
            return (
                <h2 className='vehicles-empty'>No ships found.<br/>Try to change filters!</h2>
            )
        }

        else {
            return (
                <>
                    <ul className='vehicles-list'>
                        {vehicles.slice(0, visibleItemsCount).map((vehicle, i) => {
                            return (
                            <VehicleCard
                                key={i}
                                {...vehicle}
                            />
                            )
                        })}
                    </ul>
                    {
                        vehicles.length <= 10 || vehicles.length <= visibleItemsCount ? 
                            null :
                        <button 
                            className='vehicles-button'
                            onClick={showMoreItems}>
                            Show more
                        </button> 
                    }
                </>
            )
        }
    }

    return (
        <div className='vehicles'>
            {renderContent()}
        </div>
    )
}

export default VehiclesList;