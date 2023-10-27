import { iNationData, iVehicleCard, iVehicleTypesData } from "../types/types";

export function convertToRoman(number : number) {
    return [
        { value: 1000, char: 'M' },
        { value: 900, char: 'CM' },
        { value: 500, char: 'D' },
        { value: 400, char: 'CD' },
        { value: 100, char: 'C' },
        { value: 90, char: 'XC' },
        { value: 50, char: 'L' },
        { value: 40, char: 'XL' },
        { value: 10, char: 'X' },
        { value: 9, char: 'IX' },
        { value: 5, char: 'V' },
        { value: 4, char: 'IV' },
        { value: 1, char: 'I' }
    ].reduce((result, currentValue) => {
        while (number >= currentValue.value) {
            result += currentValue.char;
            number -= currentValue.value;
        }
        return result;
    }, '');
}

export function getNations(vehicles: iVehicleCard[]): iNationData[] {

    const nationsMap = new Map<string, string>();

    const nations = vehicles.reduce<iNationData[]>((result, vehicle) => {
        if (!nationsMap.has(vehicle.nation)) {
            nationsMap.set(vehicle.nation, vehicle.nationIcon);
            result.push({ nation: vehicle.nation, nationIcon: vehicle.nationIcon });
        }

        return result;
    }, []);

    return nations;
}

export function getLevels(vehicles: iVehicleCard[]): string[] {

    const set = new Set<string>();

    const sorted = vehicles.sort((a, b) => a.level - b.level)

    const levels = sorted.reduce<string[]>((result, vehicle) => {
        if (!set.has(vehicle.levelRoman)) {
            set.add(vehicle.levelRoman);
            result.push(vehicle.levelRoman)
        }
        return result;
    }, [])

    return levels;
}

export function getVehicleTypes(vehicles: iVehicleCard[]): iVehicleTypesData[] {

    const typesMap = new Map<string, string>();

    const typesData = vehicles.reduce<iVehicleTypesData[]>((result, vehicle) => {
        if (!typesMap.has(vehicle.type)) {
            typesMap.set(vehicle.type, vehicle.typeIcon);
            result.push({ type: vehicle.type, typeIcon: vehicle.typeIcon });
        }

        return result;
    }, []);

    return typesData;
}
