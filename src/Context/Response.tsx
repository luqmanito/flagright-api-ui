// ResponseContext.tsx
"use client"
import { createContext, useContext, ReactNode, useState } from 'react';


interface ResponseContextProps {
  responseText: string | null;
  setResponseText: React.Dispatch<React.SetStateAction<string | null>>;
}

const ResponseContext = createContext<ResponseContextProps | undefined>(
  undefined
);

export const ResponseProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [responseText, setResponseText] = useState<string | null>(null);

  return (
    <ResponseContext.Provider value={{ responseText, setResponseText }}>
      {children}
    </ResponseContext.Provider>
  );
};

export const useResponse = () => {
  const context = useContext(ResponseContext);
  if (!context) {
    throw new Error('useResponse must be used within a ResponseProvider');
  }
  return context;
};
