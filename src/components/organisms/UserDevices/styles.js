import styled from "styled-components";

export const ShowDevicesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
`

export const DevicesContainer = styled.div`
    width: 90%;
`

export const DevicesList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`