import { useSetRecoilState } from "recoil";
import "../styles/Modal.css";
import { deleteSchedule } from "../utils/supabaseFunctions";
import { SchedulesAtom } from "../store/scheduleAtom";
import { ScheduleType } from "../types/scheduleTypes";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    id: number;
}

export default function DeleteConfirm({ isOpen, onClose, id }: Props) {
    if (!isOpen) return null;

    const setSchedule = useSetRecoilState(SchedulesAtom);

    const onDelete = () => {
        deleteSchedule(id);

        setSchedule((prevSchedules: ScheduleType[]) => 
            prevSchedules.filter(schedule => schedule.id !== id)
        );
    };


    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="delete-danger" onClick={onDelete}>Delete</button>
                <button className="modal-close" onClick={onClose}>
                    Quit
                </button>
            </div>
        </div>
    )
}