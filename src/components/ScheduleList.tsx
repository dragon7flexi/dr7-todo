import { ScheduleType } from "../types/scheduleTypes";
import Schedule from "./Schedule";

interface Props {
    schedules: ScheduleType[];
    setSchedules: React.Dispatch<React.SetStateAction<ScheduleType[]>>;
    fetchSchedules: () => void;
}

export default function ScheduleList({ schedules, setSchedules, fetchSchedules }: Props) {
    return (
        <div>
            {schedules.map((schedule: ScheduleType) => (
                <div key={schedule.id}>
                    <Schedule schedule={schedule} setSchedules={setSchedules} fetchSchedules={fetchSchedules}/>
                </div>
            ))}
        </div>
    );
}