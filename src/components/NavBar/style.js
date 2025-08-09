import styled from "styled-components";


export const NavBarDiv = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    background: #eaeaeaff;
    align-items: center;

    .logo{
        width: 300px;
    }

    .nav-link{
        display: flex;
        gap: 10px;

        a{
            display: inline-block;
            color: #8D24B4;
            padding: 5px 10px;
            transition: all 300ms ease-in;
            text-decoration: none;

            &:hover{
                background: #E5C932;
            }
        }
    }
`