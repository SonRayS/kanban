import { Loading, Loading_li, Loading_img } from "./Loading.style";

function LoadPage() {
    return (
        <Loading>
            <Loading_li>Loading...</Loading_li>
            <Loading_img
                src="/public/loading.gif"
                alt=""
            />
        </Loading>
    );
}

export default LoadPage;
