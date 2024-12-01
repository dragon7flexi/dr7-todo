import { AddScheduleProps, RawScheduleCreateForm, UpdateScheduleProps } from "../types/scheduleTypes";
import { concatenateTime } from "./Time";

export function convertToAddScheduleProps(data: RawScheduleCreateForm): AddScheduleProps {
    const start_time = concatenateTime(data.start_time_hour, data.start_time_minute);
    const end_time = concatenateTime(data.end_time_hour, data.end_time_minute);

    const props: AddScheduleProps = {
        title: data.title,
        start_time: start_time,
        end_time: end_time,
    };

    return props;
}

export function convertToUpdateScheduleProps(data: RawScheduleCreateForm, id: number): UpdateScheduleProps{
    const start_time = concatenateTime(data.start_time_hour, data.start_time_minute);
    const end_time = concatenateTime(data.end_time_hour, data.end_time_minute);

    const props: UpdateScheduleProps = {
        id: id,
        title: data.title,
        start_time: start_time,
        end_time: end_time,        
    };

    return props;
}