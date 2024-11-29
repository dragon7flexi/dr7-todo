import { getAllSchedules } from "../utils/supabaseFunctions";
import { useEffect, useState } from "react";

import { ScheduleType } from "../types/scheduleTypes";
import ScheduleCreateForm from "./ScheduleCreateForm";
import DeleteScheduleButton from "./DeleteScheduleButton";

export default function Schedule() {
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
            {schedules.map((schedule: ScheduleType) => (
                <div key={schedule.id}>
                    <p>{schedule.start_time.toString()}</p>
                    <p>{schedule.end_time.toString()}</p>
                    <p>{schedule.title}</p>
                    {/* <DeleteScheduleButton id={schedule.id} onDelete={fetchSchedules} /> */}
                    <div className="border-line"></div>
                </div>
            ))}
        </div>
    );
}
