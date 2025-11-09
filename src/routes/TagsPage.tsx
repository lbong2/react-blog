import { TagCloud } from '../components/TagCloud';
import { getAllTags } from '../lib/posts';

const tags = getAllTags();

export const TagsPage = () => (
  <section className="space-y-6">
    <header className="space-y-2">
      <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
        Taxonomy
      </p>
      <h1 className="text-3xl font-semibold text-slate-900">전체 태그</h1>
      <p className="text-sm text-slate-500">
        태그를 선택하면 해당 글 목록으로 이동합니다.
      </p>
    </header>

    <TagCloud tags={tags} />
  </section>
);
