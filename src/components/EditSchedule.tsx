import { useSetRecoilState } from "recoil";
import { SchedulesAtom } from "../store/scheduleAtom";
import { useForm } from "react-hook-form";
import { RawScheduleCreateForm, ScheduleType } from "../types/scheduleTypes";
import { convertToUpdateScheduleProps } from "../utils/scheduleUtils";
import { updateSchedule } from "../utils/supabaseFunctions";

interface Props {
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
    schedule: ScheduleType;
}

export default function EditSchedule({ setIsEditing, schedule }: Props) {
    const handleQuitClick = () => {
        setIsEditing(false)
    }
    
    const setSchedules = useSetRecoilState(SchedulesAtom);

    const {
        register,
        handleSubmit,
    } = useForm<RawScheduleCreateForm>();

    const onSubmit = async (data: RawScheduleCreateForm) => {
        const props = convertToUpdateScheduleProps(data, schedule.id);

        try {
            const succeedData = await updateSchedule(props)

            if (succeedData) {
                setSchedules(prevSchedules => [
                    ...prevSchedules.filter(schedule => schedule.id !== schedule.id), // Remove the old schedule
                    ...(Array.isArray(succeedData) ? succeedData : [succeedData])    // Add the updated schedule(s)
                ]);

                setIsEditing(false);
            } else {
                console.error("No date returned from updateSchedule");
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
                    defaultValue={schedule.title}
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

            <button
                className="quit-button"
                onClick={handleQuitClick}
            >Quit</button>
        </div>
    );
}