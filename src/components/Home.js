import styled from 'styled-components';
import ImgSlider from '../components/ImgSlider';
import Viewers from '../components/Viewers';
import Recommends from '../components/Recommends';
import NewDisney from '../components/NewDisney';
import Originals from '../components/Originals';
import Trending from './Trending';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import db from '../firebase';
import { setMovies } from '../Features/Movies/moviesSlice';
import { selectUserName } from '../Features/user/userSlice';


const Home = (props) => {

    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let recommends = [];
    let newDisney = [];
    let originals = [];
    let trending = [];

    useEffect(() => {
        db.collection("movies").onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
                switch (doc.data().type) {
                    case 'recommend':
                        recommends = [...recommends, { id: doc.id, ...doc.data() }];
                        break;
                    case 'new':
                        newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
                        break;
                    case 'original':
                        originals = [...originals, { id: doc.id, ...doc.data() }];
                        break;
                    case 'trending':
                        trending = [...trending, { id: doc.id, ...doc.data() }];
                        break;
                }
            });
        });

        dispatch(setMovies({
            recommends: recommends,
            newDisney: newDisney,
            originals: originals,
            trending: trending
        }))
    }, [userName]);

    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Recommends />
            <NewDisney />
            <Originals />
            <Trending />
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