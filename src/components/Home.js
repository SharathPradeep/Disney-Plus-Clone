import styled from 'styled-components';
import ImgSlider from '../components/ImgSlider';

const Home = (props) => {
    return (
        <Container>
            <ImgSlider />
        </Container>
    )
}

const Container = styled.main`
position: relative;
overflow-x: hidden;
min-height: calc(100vh - 70px);
display: block;
top:70px;
padding: 0 calc(3.5vw + 5px);

&:after{
background: url('/images/home-background.png') center center / cover no-repeat fixed;
content: '';
position: absolute;
inset: 0px;
opacity: 1;
z-index: -1;
}
`;

export default Home;