import { getAllSchedules } from "../utils/supabaseFunctions";
import { useEffect, useState } from "react";

import { ScheduleType } from "../types/scheduleTypes";
import ScheduleCreateForm from "./ScheduleCreateForm";
import ScheduleList from "./ScheduleList";

export default function ScheduleTop() {
    const [schedules, setSchedules] = useState<ScheduleType[]>([]);

    const fetchSchedules = async () => {
        const schedules = await getAllSchedules();
        if (schedules) {
            console.table(schedules);
            setSchedules(schedules);
        } else {
            console.error("No schedules returned");
        }
    };

    useEffect(() => {
        fetchSchedules();
    }, []);

    return (
        <div>
            <h1>Schedules</h1>
            <ScheduleCreateForm onCreate={fetchSchedules}/>
            <ScheduleList schedules={schedules} setSchedules={setSchedules} fetchSchedules={fetchSchedules}/>
        </div>
    );
}
