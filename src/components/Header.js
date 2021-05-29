import styled from 'styled-components';
import { auth, provider } from '../firebase';

const Header = (props) => {
    const handleAuth = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                alert(error.message);
            });
    }

    return (
        <Nav>
            <Logo>
                <img src="/images/logo.svg" alt="Disney+" />
            </Logo>
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
            <Login onClick={handleAuth}>LOGIN</Login>
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

export default Header;