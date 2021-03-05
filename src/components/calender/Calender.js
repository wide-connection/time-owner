import React from 'react';
import './Calender.css';
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule';

const Calender = () => {

    return (
        <div className="calender">
            <ScheduleComponent currentView="Day">
                <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
            </ScheduleComponent>
        </div>
    )
}

export default Calender;