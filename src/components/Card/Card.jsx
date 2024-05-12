import { Link } from "react-router-dom";
import { getTopicColor } from "../../data";
import * as T from "./Card.styled";
import * as S from "./Cards.styled";
import { AppRoutes } from "../../App";

const Card = ({id, topic, title, date}) => {
    const topicColor = getTopicColor(topic)
    return ( 
<<<<<<< HEAD
<S.Item onClick={<Link to={AppRoutes.CARD}></Link>}>
=======
<S.Item>
>>>>>>> 03746107f18ac44098b8ea4d65260f527857be59
    <S.Card>
        <T.Group>
        <T.Topic $topicColor={topicColor}>
            <T.TopicText>{topic}</T.TopicText>
        </T.Topic>
            <a href="#popBrowse" target="_self">
                <T.Btn>
                    <T.BtnDiv></T.BtnDiv>
                    <T.BtnDiv></T.BtnDiv>
                    <T.BtnDiv></T.BtnDiv>
                </T.Btn>
            </a>
        </T.Group>
                <T.Content>
      <Link to={AppRoutes.CARD + "/" + id}>
            {/* <a href="" target="_blank"> */}
                <T.Title>{title}</T.Title>
      </Link>
            {/* </a> */}
            <T.Date>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <g clipPath="url(#clip0_1_415)">
                        <path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" strokeWidth="0.8" strokeLinejoin="round" />
                        <path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_415">
                            <rect width="13" height="13" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <T.DateP>{date}</T.DateP>
            </T.Date>
        </T.Content>
    </S.Card>
</S.Item> );
}
 
export default Card;