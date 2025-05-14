import styled, {css} from "styled-components"

const colors =  {
    green: "#65E898",
    greenHover: "#54cf83",
    black: "#000000",
    blackHover: "#0A0A0A",
    white: "#ffffff",
}

const kindStyled = {
    primary: css`
        background-color: ${colors.green};
        color: ${colors.black};

        &:hover {
            background-color: ${colors.greenHover};
        }
    `,
    secondary: css`
        background-color: ${colors.black};
        color: ${colors.white};

        &:hover {
            background-color: ${colors.blackHover};
        }
    `,
    "outline-primary": css`
        border: 1px solid ${colors.green};
        background-color: transparent;
        color: ${colors.green};

        &:hover {
            background-color: ${colors.green};
            color: ${colors.black};
    }
    `,
    "outline-secondary": css`
        border: 1px solid ${colors.black};
        background-color: ${colors.green};
        color: ${colors.black};

        &:hover {
            background-color: ${colors.black};
            color: ${colors.white};
        }
    `,
    "tab": css`
        border: 1px solid RGB(128, 128, 128);
        color: ${colors.white};

        &:hover {
            background-color: ${colors.white};);
            color: ${colors.black};
        }
    `,
}

const sizeStyled = {
    small: css`
        padding: 0 12px;
        height: 30px;
        font-size: 12px;
        fonst-wegiht: 500;
    `,
    medium: css`
        padding: 0 20px;
        height: 40px;
        font-size: 14px;
        font-weight: 600;
    `,
    large: css`
        padding: 0 40px;
        height: 60px;
        font-size: 16px;
        font-weight: 600;
    `,
}

const StyledButton = styled.button`
    border-style: none;
    border-radius: 999px;
    display: flex;
    align-items: center;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

    ${({kind}) => kindStyled[kind]}
    ${({size}) => sizeStyled[size]}
`



export const Button = ({
    children, 
    size = "medium",
    kind = "primary",
    onClick,
}) => {
    return (
        <StyledButton
            kind={kind}
            size={size}
            onClick={onClick}
        >
            {children}
        </StyledButton>
    );
}