import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <div>
            <li>Page not found :C</li>
            <Link to={"/"}>Главная</Link>
            <img
                src="/public/404.gif"
                alt=""
            />
        </div>
    );
}

export default NotFoundPage;
