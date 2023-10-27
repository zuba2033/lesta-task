
import { iVehicleCard } from "../../types/types";

import './VehicleCard.scss';

const VehicleCard = (props: iVehicleCard) => {

    const { title, type, typeIcon, nation, nationIcon, levelRoman, description, mainIcon} = props;

    return (
        <li className="card">
            <div className="card-imageWrap">
                <img className="card-image" src={mainIcon} alt="ship" />
                <img className="card-typeIcon" src={typeIcon} alt="ship type" />
                <h2 className="card-title">{title}</h2>
                <div className="card-level">{levelRoman}</div>
            </div>
            <div>{type}</div>
            <div>
                <img className="card-nationIcon" src={nationIcon} alt="nation" />
                {nation}
            </div>
            <p>{description}</p>
        </li>
    )
}

export default VehicleCard;