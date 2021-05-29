import styled from 'styled-components';


const Login = (props) => {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src='/images/cta-logo-one.svg' alt="Logo-One" />
                    <SignUp>GET ALL THERE</SignUp>
                    <Description>Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.</Description>
                    <CTALogoTwo src='/images/cta-logo-two.png' alt="Logo-Two" />
                </CTA>
            </Content>
        </Container>
    )
}

const Container = styled.section`
overflow: hidden;
display: flex;
flex-direction: column;
height: 100vh;
text-align: center;
background: url("/images/login-background.jpg") no-repeat top;
z-index: -1;
height: 100vh;
background-attachment: fixed;
background-size: cover;
`;

const Content = styled.div`
margin-bottom: 10vw;
display: flex;
flex-direction: column;
min-height: 100vh;
width: 100%;
justify-content: center;
align-items: center;
padding: 80px 40px;
height: 100%;
`;

const CTA = styled.div`
max-width: 650px;
flex-wrap: wrap;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 0;
text-align: center;
width: 100%;
`;

const CTALogoOne = styled.img`
margin-bottom: 12px;
max-width: 600px;
min-height: 1px;
width: 100%;
display: block;
`;

const SignUp = styled.a`
font-weight: bold;
color: #f9f9f9;
background-color: #0063e5;
margin-bottom: 12px;
width: 100%;
letter-spacing: 1.5px;
font-size: 18px;
padding: 16.5px 0;
border: 1px solid transparent;
border-radius: 4px;
cursor: pointer;

&:hover{
    background-color: #0483ee;
}
`;

const Description = styled.p`
color: hsla(0, 0%, 95.3%, 1);
margin: 0  0 24px;
line-height: 1.5;
letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
max-width: 600px;
width: 100%;
margin-bottom: 20px;
vertical-align: bottom;
`;


export default Login;