import React, { createContext, ReactNode, useContext, useState } from "react";

interface Props {
  children: ReactNode;
}

interface ContextShowFieldsData {
  showFieldModels: boolean;
  setShowFieldModels: (showField: boolean) => void;
  showFieldYears: boolean;
  setShowFieldYears: (showFieldYears: boolean) => void;
  activeField: boolean;
  setActiveField: (activeField: boolean) => void;
}

// context
export const ContextShowFields = createContext<ContextShowFieldsData>(
  {} as ContextShowFieldsData
);

//provider
export const ProviderShowFields: React.FC<Props> = ({ children }: Props) => {
  const [showFieldModels, setShowFieldModels] = useState(false);
  const [showFieldYears, setShowFieldYears] = useState(false);
  const [activeField, setActiveField] = useState(false);

  return (
    <ContextShowFields.Provider
      value={{
        setShowFieldModels,
        showFieldModels,
        setShowFieldYears,
        showFieldYears,
        activeField,
        setActiveField,
      }}
    >
      {children}
    </ContextShowFields.Provider>
  );
};

//hooks
export const context = () => useContext(ContextShowFields);