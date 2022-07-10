import './NextDaysForecast.css';
import React from "react";
import RainyIcon from '../Icons/rainy-day.png'

export const NextDaysForecast: React.FC = () => {
    const degreesMin = 12;
    const degreesMax = 25;

    return (
        <>
            <NextDaysForecastItem
                day={Day.SUNDAY}
                icon={RainyIcon}
                degreesMin={degreesMin} degreesMax={degreesMax}
                likelyDegreesMin={12} likelyDegreesMax={23}/>
            <NextDaysForecastItem
                day={Day.MONDAY}
                icon={RainyIcon}
                degreesMin={degreesMin} degreesMax={degreesMax}
                likelyDegreesMin={12} likelyDegreesMax={23}/>
            <NextDaysForecastItem
                day={Day.TUESDAY}
                icon={RainyIcon}
                degreesMin={degreesMin} degreesMax={degreesMax}
                likelyDegreesMin={12} likelyDegreesMax={23}/>
            <NextDaysForecastItem
                day={Day.WEDNESDAY}
                icon={RainyIcon}
                degreesMin={degreesMin} degreesMax={degreesMax}
                likelyDegreesMin={12} likelyDegreesMax={23}/>
            <NextDaysForecastItem
                day={Day.THURSDAY}
                icon={RainyIcon}
                degreesMin={degreesMin} degreesMax={degreesMax}
                likelyDegreesMin={12} likelyDegreesMax={23}/>
        </>
    )
}

enum Day {
    MONDAY = 'Mon',
    TUESDAY = 'Tue',
    WEDNESDAY = 'Wed',
    THURSDAY = 'Thu',
    FRIDAY = 'Fri',
    SATURDAY = 'Sat',
    SUNDAY = 'Sun'
}

interface NextDaysForecastItemProps {
    day: Day;
    icon: string;
    degreesMin: number;
    degreesMax: number;
    likelyDegreesMin: number;
    likelyDegreesMax: number;
}

const NextDaysForecastItem: React.FC<NextDaysForecastItemProps> = ({
                                                                       day,
                                                                       degreesMax,
                                                                       degreesMin,
                                                                       icon,
                                                                       likelyDegreesMax,
                                                                       likelyDegreesMin
                                                                   }) => {
    return (
        <div className="nextdaysforecastitem">
            <div className="day">
                {day}
            </div>
            <img height="25" src={icon} alt=""/>
            <div className="degreeRangeDisplay">
                <div className="degreesMin">
                    {degreesMin}°
                </div>
                <div className="degreeRange">

                </div>
                <div className="degreesMax">
                    {degreesMax}°
                </div>
            </div>
        </div>
    )
}
