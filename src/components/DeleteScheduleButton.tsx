import { deleteSchedule } from "../utils/supabaseFunctions";

interface Props {
    id: number;
    onDelete: () => void;
}

export default function DeleteScheduleButton({ id, onDelete }: Props) {
    const handleClick = async () => {
        await deleteSchedule(id);
        onDelete(); // Trigger the re-fetch after deletion
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
