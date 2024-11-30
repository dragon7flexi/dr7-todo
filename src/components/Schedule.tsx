import { useState } from "react";
import { ScheduleType } from "../types/scheduleTypes";
import DeleteScheduleButton from "./DeleteScheduleButton";
import EditSchedule from "./EditSchedule";
import EditButton from "./EditButton";

interface Props {
    schedule: ScheduleType;
    setSchedules: React.Dispatch<React.SetStateAction<ScheduleType[]>>;
    fetchSchedules: () => void;
}

export default function Schedule({ schedule, setSchedules, fetchSchedules }: Props) {
    const [isEditing, setIsEditing] = useState<boolean>(false);

    return (
        <div>
            {!isEditing ? (
                <div>
                    <p>{schedule.start_time.toString()}</p>
                    <p>{schedule.end_time.toString()}</p>
                    <p>{schedule.title}</p>
                    <EditButton setIsEditing={setIsEditing} />
                </div>
            ) : (
                <EditSchedule setIsEditing={setIsEditing} />
            )}
            {/* <DeleteScheduleButton id={schedule.id} fetchSchedules={fetchSchedules} /> */}
            <div className="border-line"></div>
        </div>
    );
}