import { AddScheduleProps, UpdateScheduleProps } from "../types/scheduleTypes";
import { supabase } from "./initSupabase";

const NAME_OF_SCHEDULE_TABLE = "schedule"

export async function getAllSchedules() {
     const res = await supabase
        .from(NAME_OF_SCHEDULE_TABLE)
        .select("*")
        // .ilike("title", "%test%");

    return res.data;
}

export async function addSchedule({ title, start_time, end_time }: AddScheduleProps) {
    const res = await supabase
        .from(NAME_OF_SCHEDULE_TABLE)
        .insert({
            title: title,
            start_time: start_time,
            end_time: end_time
        })
        .select();

    return res.data;
}

export async function updateSchedule({ id, title, start_time, end_time }: UpdateScheduleProps) {
    const res = await supabase
        .from(NAME_OF_SCHEDULE_TABLE)
        .update({
            title: title,
            start_time: start_time,
            end_time: end_time,
        })
        .eq('id', id)
        .select()

    return res.data;
}

export async function deleteSchedule(id: number) {
    const res = await supabase
        .from(NAME_OF_SCHEDULE_TABLE)
        .delete()
        .eq('id', id);

    console.table(res);
}