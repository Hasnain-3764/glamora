import { useEffect, useState } from 'react';

const MOBILE_LAYOUT_QUERY = '(max-width: 767px)';
const REDUCED_EFFECTS_QUERY = '(max-width: 1023px), (pointer: coarse), (prefers-reduced-motion: reduce)';

function getMatch(query: string) {
  if (typeof window === 'undefined') {
    return false;
  }

  return window.matchMedia(query).matches;
}

export default function useMobileLayout() {
  const [isMobileLayout, setIsMobileLayout] = useState(() => getMatch(MOBILE_LAYOUT_QUERY));
  const [shouldReduceEffects, setShouldReduceEffects] = useState(() => getMatch(REDUCED_EFFECTS_QUERY));

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const mobileQuery = window.matchMedia(MOBILE_LAYOUT_QUERY);
    const reducedEffectsQuery = window.matchMedia(REDUCED_EFFECTS_QUERY);

    const update = () => {
      setIsMobileLayout(mobileQuery.matches);
      setShouldReduceEffects(reducedEffectsQuery.matches);
    };

    update();

    mobileQuery.addEventListener('change', update);
    reducedEffectsQuery.addEventListener('change', update);

    return () => {
      mobileQuery.removeEventListener('change', update);
      reducedEffectsQuery.removeEventListener('change', update);
    };
  }, []);

  return { isMobileLayout, shouldReduceEffects };
}
