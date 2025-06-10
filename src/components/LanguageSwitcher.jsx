import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const languages = [
  { code: 'om', label: 'Afaan Oromo', flag: '🇪🇹' },
  { code: 'am', label: 'Amharic', flag: '🇪🇹' },
  { code: 'ar', label: 'Arabic', flag: '🇸🇦' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'fr', label: 'French', flag: '🇫🇷' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(prev => !prev)}
        className="inline-flex justify-center items-center bg-gradient-to-l from-black to-[#FBAC20] max-w-fit mx-auto text-white text-sm px-4 rounded-lg shadow-md transition duration-300"
      >
        <div className='pr-3 text-2xl'>
          <LanguageIcon />
        </div>
        <span className="pr-1">{currentLanguage.label}</span>
        <ArrowDropDownIcon />
      </button>

      {open && (
        <div className="absolute z-10 mt-2 w-48 origin-top-right bg-gray-50 border border-gray-200 rounded-md shadow-lg -right-2.5">
          <div className="py-1">
            {languages.map(({ code, label, flag }) => (
              <button
                key={code}
                onClick={() => changeLanguage(code)}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 flex items-center gap-2"
              >
                <span>{flag}</span>
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}





