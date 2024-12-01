import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import ScheduleCreateForm from "./ScheduleCreateForm";
import ScheduleList from "./ScheduleList";
import { SchedulesAtom } from "../store/ScheduleAtom";
import { getAllSchedules } from "../utils/supabaseFunctions";

export default function ScheduleTop() {
    const setSchedules = useSetRecoilState(SchedulesAtom);

    useEffect(() => {
        const loadSchedules = async () => {
            const schedules = await getAllSchedules();

            if (schedules) {
                setSchedules(schedules);
            } else {
                console.error("No schedules returned");
            }
        };

        loadSchedules();
    }, [setSchedules]);

    return (
        <div>
            <h1>Schedules</h1>
            <ScheduleCreateForm />
            <ScheduleList />
        </div>
    );
}
