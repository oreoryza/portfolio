import React, { createContext, useState, useContext } from 'react';
const CursorContext = createContext();
export const useCursorContext = () => useContext(CursorContext);
export const CursorContextProvider = ({ children }) => {
  const [initialCursorVariant, setinitialCursorVariant] = useState('');
  const [animateCursorVariant, setAnimateCursorVariant] = useState('');
  const animateCursor = (variant) => {
    setinitialCursorVariant(animateCursorVariant);
    setAnimateCursorVariant(variant);
  };
  return (
    <CursorContext.Provider
      value={{
        initialCursorVariant,
        setinitialCursorVariant,
        animateCursorVariant,
        setAnimateCursorVariant,
        animateCursor,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};
