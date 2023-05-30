import { StyledButton } from './Button.styled';
export const Button = ({
  text,
  type,
  color,
  bg,
  w,
  h,
  font,
  radius,
  sh,
  shHov,
}) => (
  <StyledButton
    type={type || 'button'}
    color={color}
    bg={bg}
    width={w}
    height={h}
    font={font}
    radius={radius}
    shadow={sh}
    colorHover={bg}
    bgHover={color}
    shadowHover={shHov}
  >
    {text}
  </StyledButton>
);

export const ButtonAuth = ({ text }) => (
  <StyledButton type="submit" width="182px" height="44px">
    {text}
  </StyledButton>
);

export const ButtonLinkAuth = ({ text }) => (
  <StyledButton
    color="#FC842D"
    bg="#FFF"
    width="182px"
    height="44px"
    shadow="none"
    shadowHover="0px 4px 10px 0px #fc842d80"
  >
    {text}
  </StyledButton>
);
