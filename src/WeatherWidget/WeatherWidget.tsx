import './WeatherWidget.css';
import React from "react";
import CompassIcon from '../Icons/compass.png'
import PartlyCloudyIcon from '../Icons/clear-sky.png'
import CloudyIcon from '../Icons/cloud.png'
import RainyIcon from '../Icons/rainy-day.png'
import {NextDaysForecast} from "../NextDaysForecast/NextDaysForecast";

export const WeatherWidget: React.FC = () => {
    return (
        <div className="container">
            <div className="widget">
                <div className="widgetcontents">
                    <div className="header">
                        <div>
                            <div className="title">
                                <div id="titlefirstrow">
                                    Tartu {' '}
                                    <img height="11" src={CompassIcon} alt=""/>
                                </div>
                            </div>
                            <div className="title" id="titledegrees">
                                21°
                            </div>
                        </div>
                        <div className="description">
                            <img id="currentweathericon" height="20" src={PartlyCloudyIcon} alt=""/>
                            <div>
                                Partly Cloudy
                            </div>
                            <div>
                                H: 22° L: 14°
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="hourlybreakdown">
                        <HourlyBreakdownItem hour={17} icon={CloudyIcon} degrees={22}/>
                        <HourlyBreakdownItem hour={18} icon={CloudyIcon} degrees={21}/>
                        <HourlyBreakdownItem hour={19} icon={CloudyIcon} degrees={22}/>
                        <HourlyBreakdownItem hour={20} icon={CloudyIcon} degrees={19}/>
                        <HourlyBreakdownItem hour={21} icon={RainyIcon} degrees={18}/>
                        <HourlyBreakdownItem hour={22} icon={RainyIcon} degrees={17}/>
                    </div>
                    <hr/>
                    <div className="nextdaysforecast">
                        <NextDaysForecast/>
                    </div>
                </div>
            </div>
        </div>
    )
}

interface HourlyBreakdownItemProps {
    hour: number;
    icon: string;
    degrees: number;
}

const HourlyBreakdownItem: React.FC<HourlyBreakdownItemProps> = ({ hour, icon, degrees }) => {
    return (
        <div className="hourlybreakdownitem">
            <div>
                {hour}
            </div>
            <img height="25" src={icon} alt=""/>
            <div>
                {degrees}°
            </div>
        </div>
    )
}
