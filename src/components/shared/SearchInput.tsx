import type { ChangeEvent } from 'react';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const SearchInput = ({
  value,
  onChange,
  placeholder = '검색어를 입력하세요...',
}: SearchInputProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    onChange(event.target.value);

  return (
    <div className="relative">
      <input
        type="search"
        value={value}
        onChange={handleChange}
        className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm text-slate-700 shadow-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
        placeholder={placeholder}
        aria-label="블로그 검색"
      />
      <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-400">
        ⌘K
      </span>
    </div>
  );
};
