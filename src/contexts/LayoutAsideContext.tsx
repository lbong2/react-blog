import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

interface LayoutAsideContextValue {
  rightAside: ReactNode | null;
  setRightAside: (node: ReactNode | null) => void;
}

const LayoutAsideContext = createContext<LayoutAsideContextValue | undefined>(
  undefined
);

export const LayoutAsideProvider = ({ children }: { children: ReactNode }) => {
  const [rightAside, setRightAside] = useState<ReactNode | null>(null);
  const value = useMemo(
    () => ({
      rightAside,
      setRightAside,
    }),
    [rightAside]
  );

  return (
    <LayoutAsideContext.Provider value={value}>
      {children}
    </LayoutAsideContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLayoutAside = () => {
  const context = useContext(LayoutAsideContext);

  if (!context) {
    throw new Error('useLayoutAside must be used within LayoutAsideProvider');
  }

  return context;
};
