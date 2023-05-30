import {
  BackgroundStyled,
  ImgLeaves,
  ImgLeavesTablet,
} from './BarBackground.styled';
import {
    leaves_desktop_calculator_1x,
    leaves_desktop_calculator_2x,
    leaves_tablet_calculator_1x,
    leaves_tablet_calculator_2x
} from './BarBackgroundImg';

export const BarBackground = ({ children }) => {
  return (
    <BackgroundStyled>
      <ImgLeaves alt="im" src={leaves_desktop_calculator_1x}
        srcSet={`${leaves_desktop_calculator_2x} 2x`} />

      {/* Tablet------------------------------------------------------------- */}

      <ImgLeavesTablet
        alt="im"
        src={leaves_tablet_calculator_1x}
        srcSet={`${leaves_tablet_calculator_2x} 2x`}
      />
      {children}
    </BackgroundStyled>
  );
};
