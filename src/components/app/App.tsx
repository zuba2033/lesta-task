import { useEffect, useState, useMemo } from 'react';
import { useApiService } from '../../hooks/service';
import { iActiveFilter, iNationData, iVehicleCard, iVehicleTypesData } from '../../types/types';

import logo from '../../assets/logo.png';

import VehiclesList from '../vehiclesList/VehiclesList';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import AsideFilters from '../asideFilters/AsideFilters';
import Header from '../header/Header';

import { getLevels, getNations, getVehicleTypes } from '../../utils/utils';

import './App.scss'

function App() {

  const [vehicles, setVehicles] = useState<iVehicleCard[]>([]);
  const [activeFilter, setActiveFilter] = useState<iActiveFilter>({
    nation: 'All',
    type: 'All',
    level: 'All'
  });

  const nationsData : iNationData[] = getNations(vehicles);
  const vehicleTypesData : iVehicleTypesData[] = getVehicleTypes(vehicles);
  const levelsData: string[] = getLevels(vehicles);

  const filteredVehicles = useMemo(() => {
    return vehicles.filter((vehicle) => {
      return (
        (activeFilter.level === 'All' || vehicle.levelRoman === activeFilter.level) &&
        (activeFilter.type === 'All' || vehicle.type === activeFilter.type) &&
        (activeFilter.nation === 'All' || vehicle.nation === activeFilter.nation)
      );
    });
  }, [vehicles, activeFilter]);

  const { getVehicles, process, setProcess, clearError } = useApiService();

  const onRequest = () => {
    getVehicles()
      .then((response) => {
        setVehicles(response);
        setProcess('waiting');
    })
  }

  const onFilterChanged = (value: string, filter : string) => {
    setActiveFilter((activeFilter) => ({ 
        ...activeFilter,
        [filter]: value
      }));
  }
  
  useEffect(() => {
    onRequest();
  }, []);

  const renderContent = () => {

    if (process === 'loading') return <Spinner/>
    
    if (process === 'error') return (
      <ErrorMessage 
        onRequest={onRequest} 
        clearError={clearError}/>
    )
    
    else {
       return (
        <>
          <AsideFilters
            activeLevelFilter={activeFilter.level}
            activeNationFilter={activeFilter.nation}
            activeTypeFilter={activeFilter.type}
            levelsData={levelsData}
            nationsData={nationsData} 
            vehicleTypesData={vehicleTypesData}
            onFilterChanged={onFilterChanged}/>
          <VehiclesList vehicles={filteredVehicles}/>
        </>
       ) 
    }
  } 

  return (
    <div className='app'>
      <div className='app-logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='app-container'>
        <Header/>
        <main className='app-content'>
          {renderContent()}
        </main>
      </div>
    </div>
  )
}

export default App;
