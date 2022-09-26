import styled from "styled-components";

export const DeviceItem = styled.li`
    height: 150px;
    background-color: white;
    margin: 1em 1em 1em 0;
    border-radius: 5px;
    box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);

`

export const DeviceCard = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
`

export const DevicePhotoContainer = styled.div`
    width: 30%;

    img{
        width: 100px;
    }
`

export const DeviceInfoContainer = styled.div`
    width: 50%;
    
    .device-name{
        white-space: nowrap;
        max-width: 150px;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 23px;

    }
    div p{
        font-size: 12px;
    }
`

export const DeviceButtonContainer = styled.div`
    width: 20%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    button{
        cursor: pointer;
        border: 1px solid ${({theme}) => theme.colors.secondaryColor}
    }

    .inactive{
        background-color: transparent;
        border: 1px solid ${({theme}) => theme.colors.secondaryColor};
        border-radius: 50px;
    }
    .inactive:hover{
        background-color: ${({theme}) => theme.colors.secondaryColor};
    }
    
    .active{
        border-radius: 50px;
        background-color: ${({theme}) => theme.colors.secondaryColor};
    }


    button:hover img{
        filter: invert(100);
    }
    img{
        padding: 4px;
        width: 20px;
    }

    .info-btn{
        font-size: 20px;
        border-radius: 50px;
        background-color: #BBCAD2;
        border: none;
    }

    .info-btn:hover{
        color: ${({theme}) => theme.colors.secondaryColor};
    }

`