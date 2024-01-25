import "./App.css";
import ExitMenu from "./components/ExitMenu/ExitMenu.jsx";
import MainHeader from "./components/Header/Header.jsx";
import CreateTask from "./components/CreateTask/CreateTask.jsx";
import TaskEditor from "./components/TaskEditor/TaskEditor.jsx";
import WithoutStatus from "./components/WithoutStatus/WithoutStatus.jsx";
import NeedsToBeDone from "./components/NeedsToBeDone/NeedsToBeDone.jsx";
import InProgress from "./components/InProgress/InProgress.jsx";
import StatusTesting from "./components/StatusTesting/StatusTesting.jsx";
import StatusReady from "./components/StatusReady/StatusReady.jsx";

function App() {
    return (
        <>
            <div class="wrapper">
                {ExitMenu()}
                <div
                    class="pop-new-card"
                    id="popNewCard"
                >
                    {CreateTask()}
                </div>

                <div
                    class="pop-browse"
                    id="popBrowse"
                >
                    <div class="pop-browse__container">{TaskEditor()}</div>
                </div>

                <header class="header">
                    <div class="container">{MainHeader()}</div>
                </header>
                <main class="main">
                    <div class="container">
                        <div class="main__block">
                            <div class="main__content">
                                {WithoutStatus()}
                                {NeedsToBeDone()}
                                {InProgress()}
                                {StatusTesting()}
                                {StatusReady()}
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            <script src="js/script.js"></script>
        </>
    );
}

export default App;
