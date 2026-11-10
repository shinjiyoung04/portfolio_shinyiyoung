import React, { createContext, useContext, useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface PhotoContextType {
  photoUrl: string;
  usePlaceholder: boolean;
  setUsePlaceholder: (value: boolean) => void;
  updatePhoto: (dataUrl: string) => void;
  resetPhoto: () => void;
  isCustomPhoto: boolean;
}

const PhotoContext = createContext<PhotoContextType | undefined>(undefined);

export const PhotoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [photoUrl, setPhotoUrl] = useState<string>(() => {
    return localStorage.getItem('portfolio_photo') || PERSONAL_INFO.defaultPhotoUrl;
  });

  const [usePlaceholder, setUsePlaceholderState] = useState<boolean>(() => {
    return localStorage.getItem('portfolio_use_placeholder') === 'true';
  });

  const updatePhoto = (dataUrl: string) => {
    setPhotoUrl(dataUrl);
    setUsePlaceholderState(false);
    localStorage.setItem('portfolio_photo', dataUrl);
    localStorage.setItem('portfolio_use_placeholder', 'false');
  };

  const resetPhoto = () => {
    setPhotoUrl(PERSONAL_INFO.defaultPhotoUrl);
    setUsePlaceholderState(false);
    localStorage.removeItem('portfolio_photo');
    localStorage.setItem('portfolio_use_placeholder', 'false');
  };

  const setUsePlaceholder = (val: boolean) => {
    setUsePlaceholderState(val);
    localStorage.setItem('portfolio_use_placeholder', val ? 'true' : 'false');
  };

  const isCustomPhoto = photoUrl !== PERSONAL_INFO.defaultPhotoUrl;

  return (
    <PhotoContext.Provider
      value={{
        photoUrl,
        usePlaceholder,
        setUsePlaceholder,
        updatePhoto,
        resetPhoto,
        isCustomPhoto,
      }}
    >
      {children}
    </PhotoContext.Provider>
  );
};

export const usePhoto = () => {
  const context = useContext(PhotoContext);
  if (!context) {
    throw new Error('usePhoto must be used within a PhotoProvider');
  }
  return context;
};
