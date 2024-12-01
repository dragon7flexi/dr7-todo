export interface ScheduleType {
    id: number
    title: string
    start_time: Date
    end_time: Date
}

export interface RawScheduleCreateForm {
    title: string;
    start_time_hour: string;
    start_time_minute: string;
    end_time_hour: string;
    end_time_minute: string;
}

export interface AddScheduleProps {
    title: string
    start_time: string
    end_time: string
}

export interface UpdateScheduleProps {
    id: number
    title: string
    start_time: string
    end_time: string
}