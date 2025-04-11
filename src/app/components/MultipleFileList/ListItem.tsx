type ListItemProps = {
    title: string,
    onRemove: () => void
};

const ListItem: React.FC<ListItemProps> = ({
    title, onRemove
}) => {
    return (
        <li className="group relative transition hover:shadow-lg pr-10 p-2 bg-cyan-50 md:w-1/2 lg:w-1/4 min-h-16 mb-4 md:mb-3 md:mx-2 hover:bg-cyan-100">
            <button
                className="absolute transition-all top-3 right-2 bg-red-500 text-white p-0 w-7 h-7 opacity-75 group-hover:opacity-100 group-hover:top-2"
                onClick={() => onRemove()}
            >x</button>
            <p>{ title }</p>
        </li>
    );
};

export default ListItem;