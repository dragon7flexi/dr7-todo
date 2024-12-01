import { useState } from "react";
import { ScheduleType } from "../types/scheduleTypes";
import DeleteScheduleButton from "./DeleteScheduleButton";
import EditSchedule from "./EditSchedule";
import EditButton from "./EditButton";

interface Props {
    schedule: ScheduleType;
}

export default function Schedule({ schedule }: Props) {
    const [isEditing, setIsEditing] = useState<boolean>(false);

    return (
        <div>
            {!isEditing ? (
                <div>
                    <p>{schedule.start_time.toString()}</p>
                    <p>{schedule.end_time.toString()}</p>
                    <p>{schedule.title}</p>
                    <EditButton setIsEditing={setIsEditing} />
                    <DeleteScheduleButton id={schedule.id} />
                </div>
            ) : (
                <EditSchedule setIsEditing={setIsEditing} schedule={schedule} />
            )}
            <div className="border-line"></div>
        </div>
    );
}