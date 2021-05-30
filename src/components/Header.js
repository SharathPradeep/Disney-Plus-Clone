import styled from 'styled-components';
import { auth, provider } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectUserName, selectUserPhoto, setUserLoginDetails, setSignOutState } from '../Features/user/userSlice';
import { useEffect } from 'react';

const Header = (props) => {

    const dispatch = useDispatch();
    let history = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUser(user);
                history.push("/home");
            }
        });
    }, [userName]);

    const handleAuth = () => {
        if (!userName) {
            auth.signInWithPopup(provider)
                .then((result) => {
                    setUser(result.user);
                })
                .catch((error) => {
                    alert(error.message);
                });
        } else {
            auth.signOut().then(() => {
                dispatch(setSignOutState());
                console.log("Signed Out");
                history.push("/");
            }).catch((error) => {
                alert(error);
            })
        }

    }

    const setUser = (user) => {
        dispatch(setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL
        }))
    }

    return (
        <Nav>
            <Logo>
                <img src="/images/logo.svg" alt="Disney+" />
            </Logo>
            {
                (!userName) ?
                    (<Login onClick={handleAuth}>LOGIN</Login>)
                    :
                    (<>
                        <NavMenu>
                            <a href="/home">
                                <img src="/images/home-icon.svg" alt="Home" />
                                <span>HOME</span>
                            </a>
                            <a>
                                <img src="/images/search-icon.svg" alt="Search" />
                                <span>SEARCH</span>
                            </a>
                            <a>
                                <img src="/images/watchlist-icon.svg" alt="Watchlist" />
                                <span>WATCHLIST</span>
                            </a>
                            <a>
                                <img src="/images/original-icon.svg" alt="Originals" />
                                <span>ORIGINALS</span>
                            </a>
                            <a>
                                <img src="/images/movie-icon.svg" alt="Movies" />
                                <span>MOVIES</span>
                            </a>
                            <a>
                                <img src="/images/series-icon.svg" alt="Series" />
                                <span>SERIES</span>
                            </a>
                        </NavMenu>
                        <SignOut>
                            <UserImg src={userPhoto} alt={userName} />
                            <DropDown><span onClick={handleAuth}>Sign Out</span></DropDown>
                        </SignOut>
                    </>
                    )
            }
        </Nav>
    )
}

const Nav = styled.nav`
position: fixed;
top: 0;
left: 0;
right: 0;
height: 70px;
background-color: #090b13;
opacity: 0.95;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 36px;
z-index: 3;
letter-spacing: 16px;
`;

const Logo = styled.a`
padding: 0;
width: 80px;
cursor: pointer;
max-height: 70px;
font-size: 0;
display: inline-block;

img{
    display: block;
    width: 100%;
    min-width: 70px;
}
`;

const NavMenu = styled.div`
align-items: center;
display: flex;
flex-flow: row nowrap;
height: 100%;
justify-content: flex-end;
margin-right: auto;
padding: 0;
position: relative;
margin-left: 25px;

a{
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    font-size: 14px;

    img{
        height: 20px;
        min-width: 20px;
        width: 20px;
        margin-top: -2px;
    }

    span{
        color: rgb(249,249,249);
        white-space: nowrap;
        position: relative;
        margin-left: 5px;
        letter-spacing: 2px;

        &:before{
            background-color: rgb(249,249,249);
            border-radius: 0px 0px 4px 4px;
            bottom: -6px;
            content: '';
            opacity: 0;
            height: 2px;
            position: absolute;
            right: 0px;
            transform-origin: left center;
            transform: scaleX(0);
            transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
            visibility: hidden;
            width: auto;
            left: 0px;
        }
    }
    &:hover{
        span:before{
            transform: scaleX(1);
            visibility: visible;
            opacity: 1 !important;
        }
    }
}

@media only screen and (max-width: 992px){
    display: none;
}
`;

const Login = styled.a`
letter-spacing: 2px;
border: 1px solid #f9f9f9;
padding: 8px 14px;
border-radius: 4px;
transition: all 0.2s ease 0s;
font-weight: bold;
cursor: pointer;

&:hover{
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
}
`;

const UserImg = styled.img`
height: 100%;
border-radius: 50%;
padding: 10px;
`;

const DropDown = styled.div`
position:absolute;
top: 50px;
background: rgb(19,19,19);
border: 1px solid rgba(151,151,151,0.34);
border-radius: 4px;
box-shadow: rgba(0 0 0 / 50%) 0px 0px 18px 0px;
padding: 10px;
right: 0;
font-size: 14px;
letter-spacing: 2px;
white-space: nowrap;
cursor: pointer;
width: 100px;
opacity: 0;
`;

const SignOut = styled.div`
position: relative;
height: 58px;
width: 58px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;

&:hover{
    ${DropDown}{
        opacity: 1;
        transition-duration: 1s;
    }
}
`;


export default Header;