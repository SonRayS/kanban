import { Container } from "../GlobalStyle/Global.style";
import { Main, MainBlock, MainContents } from "./MainContent.style";

function MainContent({ children }) {
    return (
        <Main>
            <Container>
                <MainBlock>
                    <MainContents>{children}</MainContents>
                </MainBlock>
            </Container>
        </Main>
    );
}

export default MainContent;
