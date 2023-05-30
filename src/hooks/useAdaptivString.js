import { useState, useEffect } from 'react';
import { useWindowResize } from './useWindowResize';

export const useAdaptivString = str => {
  const [normalizeString, setNormalizeString] = useState('');
  const { width } = useWindowResize();
  useEffect(() => {
    if (!str) return;
    if (width > 767) {
      return setNormalizeString(
        str.length > 25 ? str.slice(0, 22) + '...' : str
      );
    } else {
      return setNormalizeString(
        str.length > 18 ? str.slice(0, 15) + '...' : str
      );
    }
  }, [str, width]);
  return normalizeString;
};
