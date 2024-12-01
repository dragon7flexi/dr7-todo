import { useState } from "react";
import { deleteSchedule } from "../utils/supabaseFunctions";
import DeleteConfirm from "./DeleteConfirm";

interface Props {
    id: number;
}

export default function DeleteScheduleButton({ id }: Props) {
    const [isDeleteConfirmOpen, SetDeleteConfirmOpen] = useState<boolean>(false);

    const openDeleteConfirm = () => {
        SetDeleteConfirmOpen(true);
    }

    const closeDeleteConfirm = () => {
        SetDeleteConfirmOpen(false);
    }


    return (
        <div>
            <button
                onClick={openDeleteConfirm}
                className="delete-button"
            >
                Delete
            </button>

            <DeleteConfirm isOpen={isDeleteConfirmOpen} onClose={closeDeleteConfirm} id={id} />
        </div>
    );
}
