import type { CSSProperties } from 'react';
import { useEffect, useId, useRef } from 'react';

import { siteConfig } from '../../config/siteConfig';

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>>;
  }
}

type AdsenseSlotKey = keyof NonNullable<typeof siteConfig.adsense>['slots'];

interface AdsenseSlotProps {
  slotKey: AdsenseSlotKey;
  className?: string;
  style?: CSSProperties;
}

export const AdsenseSlot = ({
  slotKey,
  className = '',
  style,
}: AdsenseSlotProps) => {
  const id = useId();
  const insRef = useRef<HTMLModElement | null>(null);
  const adsense = siteConfig.adsense;
  const clientId = adsense?.clientId;
  const slot = adsense?.slots?.[slotKey];

  useEffect(() => {
    if (!adsense?.enabled || !clientId || !slot) {
      return;
    }

    const target = insRef.current;
    if (!target) return;

    if (
      target.getAttribute('data-adsbygoogle-status') === 'done' ||
      target.getAttribute('data-ad-status') === 'done'
    ) {
      return;
    }

    try {
      target.setAttribute('data-adsbygoogle-status', 'done');
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.warn('AdSense push error', error);
    }
  }, [adsense, clientId, slot]);

  if (!adsense?.enabled || !clientId || !slot) {
    return null;
  }

  return (
    <ins
      key={id}
      ref={insRef}
      className={`adsbygoogle block w-full ${className}`}
      style={{ display: 'block', minHeight: '120px', ...style }}
      data-ad-client={clientId}
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
};
