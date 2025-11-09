import { CSSProperties, useEffect, useId, useRef } from 'react';

import { siteConfig } from '../../config/siteConfig';

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>>;
  }
}

interface AdsenseSlotProps {
  slotKey: keyof typeof siteConfig.adsense.slots;
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
  const clientId = siteConfig.adsense.clientId;
  const slot = siteConfig.adsense.slots[slotKey];

  useEffect(() => {
    if (!siteConfig.adsense.enabled || !clientId || !slot) {
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
  }, [clientId, slot]);

  if (!siteConfig.adsense.enabled || !clientId || !slot) {
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
