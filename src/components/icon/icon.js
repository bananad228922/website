import classNames from "classnames"
import styled, {css} from "styled-components"


const transitionStyles= css`
    color: ${({darkmode}) => darkmode ? "white" : "black"};
    height: inherit;
`

const StyledAddIcon = styled.div`
    ${transitionStyles}
    
`

const StyledSubIcon = styled.div`
    ${transitionStyles}
    display: flex;
    align-items: center;
`


export function AddIcon({darkmode=false}) {
    return (
        <StyledAddIcon darkmode={darkmode}>
            <svg xmlns="http://www.w3.org/2000/svg" width="inhert" height="inherit" viewBox="0 0 122.156 122.156">
                <g transform="translate(-941 -153.844)">
                    <path d="M20856,286.392h112.156" transform="translate(-19910 -71.47)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="10"/>
                    <path d="M0,0H112.156" transform="translate(1002.078 158.844) rotate(90)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="10"/>
                </g>
            </svg>
        </StyledAddIcon>
    )
}


export function SubIcon({darkmode=false}) {
    return (
        <StyledSubIcon darkmode={darkmode}>
            <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="10" viewBox="0 0 122.156 10">
                <g transform="translate(-941 -209.922)">
                    <path d="M20856,286.392h112.156" transform="translate(-19910 -71.47)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="10"/>
                </g>
            </svg>
        </StyledSubIcon>
    )
}