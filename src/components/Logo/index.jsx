import { Box } from './Logo.Styled';
import { Link } from 'react-router-dom';

import logo_desktop_1x from '../../images/logo_desktop_1x.webp';
import logo_desktop_2x from '../../images/logo_desktop_2x.webp';
import logo_tablet_1x from '../../images/logo_tablet_1x.webp';
import logo_tablet_2x from '../../images/logo_tablet_2x.webp';
import logo_mobile_1x from '../../images/logo_mobile_1x.webp';
import logo_mobile_2x from '../../images/logo_mobile_2x.webp';

export const Logo = () => {
  const isLoggedIn = true;
  return (
    <Link to={isLoggedIn ? '/diary' : '/login'}>
      <Box>
        <picture>
          <source
            srcSet={`${logo_desktop_1x} 1x, ${logo_desktop_2x} 2x`}
            media="(min-width: 1280px)"
          />
          <source
            srcSet={`${logo_tablet_1x} 1x, ${logo_tablet_2x} 2x`}
            media="(min-width: 768px)"
          />
          <source
            srcSet={`${logo_mobile_1x} 1x, ${logo_mobile_2x} 2x`}
            media="(min-width: 320px)"
          />
          <img src={logo_mobile_1x} alt="Logotype" />
        </picture>
      </Box>
    </Link>
  );
};
