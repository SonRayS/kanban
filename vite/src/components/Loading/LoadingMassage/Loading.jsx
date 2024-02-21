import { Loading } from "./Loading.style";

function LoadPage() {
    return (
        <Loading>
            <li>Loading...</li>
            <img
                src="/public/loading.gif"
                alt=""
            />
        </Loading>
    );
}

export default LoadPage;
