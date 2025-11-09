import Giscus from '@giscus/react';

import { siteConfig } from '../config/siteConfig';

export const GiscusWidget = () => {
  if (!siteConfig.giscus.enabled) {
    return null;
  }

  return (
    <section className="mt-16 rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
      <Giscus
        id="comments"
        repo={siteConfig.giscus.repo}
        repoId={siteConfig.giscus.repoId}
        category={siteConfig.giscus.category}
        categoryId={siteConfig.giscus.categoryId}
        mapping={siteConfig.giscus.mapping}
        reactionsEnabled={siteConfig.giscus.reactionsEnabled}
        emitMetadata={siteConfig.giscus.emitMetadata}
        theme={siteConfig.giscus.theme}
        lang={siteConfig.giscus.lang}
      />
    </section>
  );
};
