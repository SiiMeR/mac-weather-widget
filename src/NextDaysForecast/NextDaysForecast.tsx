import './NextDaysForecast.css';
import React from "react";
import RainyIcon from '../Icons/rainy-day.png'

export const NextDaysForecast: React.FC = () => {
    const degreesMin = 12;
    const degreesMax = 25;

    const forecastMock = [
        {
            day: Day.SUNDAY,
            likelyDegreesMin: 12,
            likelyDegreesMax: 22
        },
        {
            day: Day.MONDAY,
            likelyDegreesMin: 12,
            likelyDegreesMax: 22
        },
        {
            day: Day.TUESDAY,
            likelyDegreesMin: 15,
            likelyDegreesMax: 21
        },
        {
            day: Day.WEDNESDAY,
            likelyDegreesMin: 13,
            likelyDegreesMax: 23
        },
        {
            day: Day.THURSDAY,
            likelyDegreesMin: 12,
            likelyDegreesMax: 23
        },
    ];

    return (
        <>
            {forecastMock.map(({day, likelyDegreesMin, likelyDegreesMax}) => {
                return (
                    <NextDaysForecastItem key={day}
                                          componentKey={day}
                                          day={day}
                                          icon={RainyIcon}
                                          degreesMin={degreesMin} degreesMax={degreesMax}
                                          likelyDegreesMin={likelyDegreesMin} likelyDegreesMax={likelyDegreesMax}/>
                )
            })}
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

interface ComponentKey {
    componentKey: string;
}

interface NextDaysForecastItemProps {
    day: Day;
    icon: string;
    degreesMin: number;
    degreesMax: number;
    likelyDegreesMin: number;
    likelyDegreesMax: number;
}

const NextDaysForecastItem: React.FC<ComponentKey & NextDaysForecastItemProps> = ({
                                                                                      componentKey,
                                                                                      day,
                                                                                      degreesMax,
                                                                                      degreesMin,
                                                                                      icon,
                                                                                      likelyDegreesMax,
                                                                                      likelyDegreesMin

                                                                                  }) => {
    const degreeDifference = degreesMax - degreesMin;
    const likelyDegreeDifference = likelyDegreesMax - likelyDegreesMin;
    const distanceFromStart = ((likelyDegreesMin - degreesMin) / degreeDifference) * 100.0;
    const gradientLength = (likelyDegreeDifference / degreeDifference) * 100.0;

    const gradientLengthPercent = `${Math.floor(gradientLength)}%`;
    const distanceFromStartPercent = `${Math.floor(distanceFromStart)}%`;

    return (
        <div className="nextdaysforecastitem">
            <div className="day">
                {day}
            </div>
            <img height="25" src={icon} alt=""/>
            <div className="degreeRangeDisplay">
                <div className="degreesMin">
                    {likelyDegreesMin}°
                </div>

                <div className="degreeRangeGradientBackground">
                    <div
                        className="degreeRangeGradient"
                        style={{
                            width: `${gradientLength}%`,
                            clipPath: `url("#degreeRangeGradientOverlayClipPath${componentKey}")`
                        }}
                    />
                </div>
                <div className="degreesMax">
                    {likelyDegreesMax}°
                </div>
                <svg viewBox="0 0 200 5" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <clipPath id={`degreeRangeGradientOverlayClipPath${componentKey}`}>
                            <rect id="clipPathRect" x={distanceFromStartPercent} color="#000000" width={gradientLengthPercent}
                                  height="100%" rx="3" ry="3"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </div>
    )
}
