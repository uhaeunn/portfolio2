import'./Tabbtn.css';

export default function TabButton(props) {

    return (
        <button onClick={() => props.onSelect(props.name)}
        className = {props.className}>
            {props.name}
        </button>
    );
}

