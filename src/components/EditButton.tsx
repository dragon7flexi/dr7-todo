interface Props {
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function EditButton({ setIsEditing }: Props) {
    const handleClick = () => {
        setIsEditing(true);
    };

    return (
        <div>
            <button
                className="edit-button"
                onClick={handleClick}
            >Edit</button>
        </div>
    );
}