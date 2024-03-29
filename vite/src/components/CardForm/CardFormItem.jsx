import { Link } from "react-router-dom";
import * as C from "./CardForm.style";

function CardForm({ statusTask, taskType, date, id }) {
    /*  console.log("status", statusTask, "taskType", taskType, "date", date, "id", id); */
    return (
        <C.Card>
            <C.CardsItem>
                <C.CardsCard>
                    <C.CardGroup>
                        <C.CardTopic $topicColor={C.topicName[statusTask]}>
                            <C.TopicText>{statusTask}</C.TopicText>
                        </C.CardTopic>
                        <Link to={`card/${id}`}>
                            <C.CardBtn>
                                <div></div>
                                <div></div>
                                <div></div>
                            </C.CardBtn>
                        </Link>
                    </C.CardGroup>
                    <C.CardContent>
                        <Link to={`card/${id}`}>
                            <C.CardTitle>{taskType}</C.CardTitle>
                        </Link>
                        <C.CardDate>
                            <C.CardDateSvg
                                xmlns="http://www.w3.org/2000/svg"
                                width="13"
                                height="13"
                                viewBox="0 0 13 13"
                                fill="none"
                            >
                                <g clipPath="url(#clip0_1_415)">
                                    <path
                                        d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                                        stroke="#94A6BE"
                                        strokeWidth="0.8"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                                        stroke="#94A6BE"
                                        strokeWidth="0.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_415">
                                        <rect
                                            width="13"
                                            height="13"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </C.CardDateSvg>
                            <C.CardDateText>{date}</C.CardDateText>
                        </C.CardDate>
                    </C.CardContent>
                </C.CardsCard>
            </C.CardsItem>
        </C.Card>
    );
}

export default CardForm;
