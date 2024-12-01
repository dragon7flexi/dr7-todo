import { useForm } from "react-hook-form"
import { RawScheduleCreateForm } from "../types/scheduleTypes";
import { addSchedule } from "../utils/supabaseFunctions";
import { convertToAddScheduleProps } from "../utils/scheduleUtils";
import { useRecoilState } from "recoil";
import { SchedulesAtom } from "../store/scheduleAtom";


export default function ScheduleCreateForm() {
    const [schedules, setSchedules] = useRecoilState(SchedulesAtom);

    const {
        register,
        handleSubmit,
    } = useForm<RawScheduleCreateForm>();

    const onSubmit = async (data: RawScheduleCreateForm) => {
        const props = convertToAddScheduleProps(data)

        try {
            const succeedData = await addSchedule(props)

            if (succeedData) {
                setSchedules([...schedules, ...succeedData]);
            } else {
                console.error("No date returned from addSchedule");
            }
        } catch (error) {
            console.error(error)
        }
    };
    
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