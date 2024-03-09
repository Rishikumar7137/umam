import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const Header = () =>{
    return (
        <>
        <div className="flex bg-yellow-300 h-10 w-full align-middle justify-center">
            <img src="/hanoi.jpg" alt="" />
            <p>Hanoi Towers</p>
            <a href="#">Follow Me on github</a>
            <FontAwesomeIcon icon="fa-brands fa-square-github" />
        </div>
        </>
    );
}