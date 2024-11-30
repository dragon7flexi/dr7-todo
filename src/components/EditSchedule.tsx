interface Props {
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}


export default function EditSchedule({ setIsEditing }: Props) {
    const handleClick = () => {
        setIsEditing(false)
    }

    return (
        <div>
            EditSchedule


            <button
                className="quit-button"
                onClick={handleClick}
            >Quit</button>
        </div>
    );
}