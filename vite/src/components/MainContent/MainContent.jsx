import { Container } from "../GlobalStyle/Global.style";
import { Main, MainBlock, MainContents } from "./MainContent.style";
import useTheme from "../Hooks/useTheme";

function MainContent({ children }) {
    return (
        <Main $Theme={useTheme().theme}>
            <Container>
                <MainBlock>
                    <MainContents>{children}</MainContents>
                </MainBlock>
            </Container>
        </Main>
    );
}

export default MainContent;
