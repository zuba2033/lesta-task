import { useHttp } from './http.hook';
import { iVehicle, iVehicleCard } from '../types/types';
import { convertToRoman } from '../utils/utils';

type Response = {
  data: {
    vehicles: iVehicle[]
  }
}

export function useApiService() {

    const { process, setProcess, request, clearError } = useHttp();

    const _apiEndpoint = "https://vortex.korabli.su/api/graphql/glossary/";

    const _query = {
        "operationName": "",
        "query": `{
          vehicles {
            title
            description
            icons {
              large
              medium
            }
            level
            type {
              name
              title
              icons {
                default
              }
            }
            nation {
              name
              title
              color
              icons {
                small
                medium
                large
              }
            }
          }
        }`,
        "variables": {}
    };

    const transformVehicleData = (data: iVehicle[]) =>  {
      const transformedData = data.map((vehicle) => {
        return {
          title: vehicle.title,
          description: vehicle.description,
          nation: vehicle.nation.title,
          nationIcon: vehicle.nation.icons.small,
          type: vehicle.type.title,
          typeIcon: vehicle.type.icons.default,
          level: vehicle.level,
          levelRoman: convertToRoman(vehicle.level),
          mainIcon: vehicle.icons.medium
        }
      })
      return transformedData;
    }

    const getVehicles = async () => {

      const response = await request<Response>(
        _apiEndpoint, 
          "POST",
          JSON.stringify(_query)
        )
      const vehicles = transformVehicleData(response.data.vehicles);

      return vehicles as iVehicleCard[];
    }

    return { getVehicles, process, setProcess, clearError }
  }