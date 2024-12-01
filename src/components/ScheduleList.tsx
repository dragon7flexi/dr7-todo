import { useRecoilValue } from "recoil";
import { ScheduleType } from "../types/scheduleTypes";
import Schedule from "./Schedule";
import { SchedulesAtom } from "../store/ScheduleAtom";

export default function ScheduleList() {
    const schedules = useRecoilValue(SchedulesAtom);

    return (
        <div>
            {schedules.map((schedule: ScheduleType) => (
                <div key={schedule.id}>
                    <Schedule schedule={schedule} />
                </div>
            ))}
        </div>
    );
}