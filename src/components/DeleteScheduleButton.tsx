import { deleteSchedule } from "../utils/supabaseFunctions";

interface Props {
    id: number;
    fetchSchedules: () => void;
}

export default function DeleteScheduleButton({ id, fetchSchedules }: Props) {
    const handleClick = async () => {
        await deleteSchedule(id);
        fetchSchedules();
    };

    return (
        <div>
            <button
                onClick={handleClick}
                className="delete-button"
            >
                Delete
            </button>
        </div>
    );
}
