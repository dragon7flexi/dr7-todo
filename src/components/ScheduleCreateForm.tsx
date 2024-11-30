import { useForm } from "react-hook-form"
import { AddScheduleProps } from "../types/scheduleTypes";
import { addSchedule } from "../utils/supabaseFunctions";
import { concatenateTime } from "../utils/Time";

interface rawFormData {
    title: string;
    start_time_hour: string;
    start_time_minute: string;
    end_time_hour: string;
    end_time_minute: string;
}

interface Props {
    onCreate: () => void
}

export default function ScheduleCreateForm({ onCreate }: Props) {
    const {
        register,
        handleSubmit,
    } = useForm<rawFormData>();

    const onSubmit = (data: rawFormData) => {
        const convertToAddScheduleProps = (data: rawFormData): AddScheduleProps => {
            const start_time = concatenateTime(data.start_time_hour, data.start_time_minute);
            const end_time = concatenateTime(data.end_time_hour, data.end_time_minute);

            const props: AddScheduleProps = {
                title: data.title,
                start_time: start_time,
                end_time: end_time,
            };

            return props
        };

        const props = convertToAddScheduleProps(data)
        addSchedule(props);

        onCreate()
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>タイトル</label>
                <input
                    type="text"
                    {...register("title")}
                    autoFocus
                />

                <label>開始時刻(hour)</label>
                <input
                    type="text"
                    {...register("start_time_hour")}
                />

                <label>開始時刻(minute)</label>
                <input
                    type="text"
                    defaultValue="00"
                    {...register("start_time_minute")}
                />

                <label>終了時刻(hour)</label>
                <input
                    type="text"
                    {...register("end_time_hour")}
                />

                <label>終了時刻(minute)</label>
                <input
                    type="text"
                    defaultValue="00"
                    {...register("end_time_minute")}
                />

                <button type="submit">作成</button>                
            </form>
        </div>
    );
}