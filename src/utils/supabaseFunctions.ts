import { AddScheduleProps, ScheduleType } from "../types/scheduleTypes";
import { supabase } from "./initSupabase";

const NAME_OF_SCHEDULE_TABLE = "schedule"

export async function getAllSchedules() {
     const res = await supabase
        .from(NAME_OF_SCHEDULE_TABLE)
        .select("*");

    return res.data;
}

export async function addSchedule({ title, start_time, end_time }: AddScheduleProps) {
    const res = await supabase
        .from(NAME_OF_SCHEDULE_TABLE)
        .insert({
            title: title,
            start_time: start_time,
            end_time: end_time
        });

    console.log(res);
}

export async function updateSchedule({ id, title, start_time, end_time }: ScheduleType) {
    const res = await supabase
        .from(NAME_OF_SCHEDULE_TABLE)
        .update({
            title: title,
            start_time: start_time,
            end_time: end_time,
        })
        .eq('id', id)

    console.log(res)
}

export async function deleteSchedule(id: number) {
    const res = await supabase
        .from(NAME_OF_SCHEDULE_TABLE)
        .delete()
        .eq('id', id);

    console.table(res);
}