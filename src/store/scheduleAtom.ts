import { atom } from "recoil";
import { ScheduleType } from "../types/scheduleTypes";

export const SchedulesAtom = atom<ScheduleType[]>({
    key: 'SchedulesAtom',
    default: []
})