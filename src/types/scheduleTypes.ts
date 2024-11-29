export interface ScheduleType {
    id: number
    title: string
    start_time: Date
    end_time: Date
}

export interface AddScheduleProps {
    title: string
    start_time: string
    end_time: string
}
