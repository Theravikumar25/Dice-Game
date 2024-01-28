import styled from "styled-components";
export const Button=styled.button`
 button{
            color: white;
            padding: 10px, 18px, 10px, 18px;
            border: 1px solid black;
            border-radius: 5px;
            width: 220px;
            height: 44px;
            font-size: 16px;
            font-weight: 600;
            transition: 0ms.4s background ease-out;
            background-color: black;
            
            &:hover{
                color: black;
                background-color:white;
                cursor: pointer;
                transition: 0ms.3s background ease-in;
            }
        }

`;