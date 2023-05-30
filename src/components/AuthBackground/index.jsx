import {
  BackgroundStyled,
  ImgBanana,
  ImgLeav,
  ImgStraw,
  ImgShadow,
  ImgBananaTablet,
  ImgLeavTablet,
  ImgStrawTablet,
  ImgShadowTablet,
} from './AuthBackground.styled';

import {
 banana_desktop_1x,
  banana_desktop_2x,
  leaves_desktop_home_1x,
  leaves_desktop_home_2x,
  strawberry_home_1x,
  strawberry_home_2x,
  shadow_desktop,
  banana_tablet_1x,
  banana_tablet_2x,
  leaves_tablet_home_1x,
  leaves_tablet_home_2x,
  strawberry_tablet_1x,
  strawberry_tablet_2x,
  shadow_tablet,
} from './AuthBackgroundImg';

export const AuthBackground = ({ children }) => {
  return (
    <BackgroundStyled>
      <ImgBanana
        alt="im"
        src={banana_desktop_1x}
        srcSet={`${banana_desktop_2x} 2x`}
        media="(min-width: 1280px)"
      />
      <ImgLeav
        alt="im"
        src={leaves_desktop_home_1x}
        srcSet={`${leaves_desktop_home_2x} 2x`}
        media="(min-width: 1280px)"
      />
      <ImgStraw
        height={279}
        width={286}
        alt="im"
        src={strawberry_home_1x}
        srcSet={`${strawberry_home_2x} 2x`}
        media="(min-width: 1280px)"
      />
      <ImgShadow alt="im" src={shadow_desktop} media="(min-width: 1280px)" />

      {/* Tablet------------------------------------------------------------- */}

      <ImgBananaTablet
        alt="im"
        media="(min-width: 768px)"
        src={banana_tablet_1x}
        srcSet={`${banana_tablet_2x} 2x`}
      />
      <ImgLeavTablet
        alt="im"
        media="(min-width: 768px)"
        src={leaves_tablet_home_1x}
        srcSet={`${leaves_tablet_home_2x} 2x`}
      />
      <ImgStrawTablet
        alt="im"
        media="(min-width: 768px)"
        src={strawberry_tablet_1x}
        srcSet={`${strawberry_tablet_2x} 2x`}
      />
      <ImgShadowTablet alt="im" media="(min-width: 768px)" src={shadow_tablet} />
      {children}
    </BackgroundStyled>
  );
};
