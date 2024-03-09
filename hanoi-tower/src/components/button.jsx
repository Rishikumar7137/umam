export const Button = ({onClick, title, txtCol, bgCol}) =>{
    return (
        <button className={`font-bold px-4 py-1 rounded-lg shadow-lg transition bg-${bgCol} text-${txtCol}`} onClick={onClick}> {title} </button>
    );
}