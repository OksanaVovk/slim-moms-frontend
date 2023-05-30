import { HidePasswordIcon, PasswordButton, ShowPasswordIcon } from "./ShowPasswordButton.stuled";

export const ShowPasswordButton = ({ handleClick, show }) => {
  return (
    <PasswordButton type="button" onClick={handleClick}>
      {show ? <ShowPasswordIcon /> : <HidePasswordIcon />}
    </PasswordButton>
  );
};