import styled from "styled-components";


export const Container = styled.div`
    margin-top: 30px;

    .content{
        padding: 80px 20px;
        max-width: 900px;
        margin: auto;
        
        .title{
            display: flex;
            background: #8D24B4;
            justify-content: center;
            align-items: center;
            padding: 30px;

            h2{
                color: #fff;
            }
        }
        .text{
            display: flex;
            flex-direction: column;
            justify-content: center;

            h4{
                margin-bottom: 10px;
                margin-top: 15px;
                font-size: 1.5em;
            }
            p{
                margin-bottom:10px ;
            }

            ul {
                padding-left: 20px; /* aligns bullet with p */
            }
            ul li{
                margin-bottom: 10px;
                padding-left: 10px; /* shifts li content inward */
            }
        }
    }   
`