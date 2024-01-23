import "./App.css";
import exitMenu from "./components/exitMenu/ExitMenu.jsx";
import mainHeader from "./components/header/header.jsx";
import createTask from "./components/createTask/createTask.jsx";
import taskEditor from "./components/taskEditor/taskEditor.jsx";
import withoutStatus from "./components/withoutStatus/withoutStatus.jsx";
import needsToBeDone from "./components/needsToBeDone/needsToBeDone.jsx";
import inProgress from "./components/inProgress/inProgress.jsx";
import statusTesting from "./components/statusTesting/statusTesting.jsx";
import statusReady from "./components/statusReady/statusReady.jsx";

function App() {
    return (
        <>
            <div class="wrapper">
                {exitMenu()}
                <div
                    class="pop-new-card"
                    id="popNewCard"
                >
                    {createTask()}
                </div>

                <div
                    class="pop-browse"
                    id="popBrowse"
                >
                    <div class="pop-browse__container">{taskEditor()}</div>
                </div>

                <header class="header">
                    <div class="container">{mainHeader()}</div>
                </header>
                <main class="main">
                    <div class="container">
                        <div class="main__block">
                            <div class="main__content">
                                {withoutStatus()}
                                {needsToBeDone()}
                                {inProgress()}
                                {statusTesting()}
                                {statusReady()}
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
