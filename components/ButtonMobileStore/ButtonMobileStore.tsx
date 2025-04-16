// ButtonMobileStore.tsx - Enhanced version with more accurate store logos
import React from 'react';

// Define the available button types
type StoreType = 'appStore' | 'googlePlay' | 'appGallery';

// Define the languages available
type LanguageCode = 'EN' | 'ES' | 'FR' | 'DE' | 'IT' | 'JA' | 'KO' | 'ZH' | 'RU';

// Define the props interface
export interface ButtonMobileStoreProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  type: StoreType;
  lang?: LanguageCode;
  alt?: string;
  darkTheme?: boolean;
}

const ButtonMobileStore: React.FC<ButtonMobileStoreProps> = ({
  type,
  lang = 'EN',
  alt,
  darkTheme = true,
  ...props
}) => {
  // Text translations based on language and store type
  const storeText: Record<StoreType, Record<LanguageCode, { topText: string; bottomText: string }>> = {
    appStore: {
      'EN': { topText: 'Download on the', bottomText: 'App Store' },
      'ES': { topText: 'Descargar en el', bottomText: 'App Store' },
      'FR': { topText: 'Télécharger sur', bottomText: 'l\'App Store' },
      'DE': { topText: 'Laden im', bottomText: 'App Store' },
      'IT': { topText: 'Scarica su', bottomText: 'App Store' },
      'JA': { topText: 'からダウンロード', bottomText: 'App Store' },
      'KO': { topText: '에서 다운로드', bottomText: 'App Store' },
      'ZH': { topText: '下载于', bottomText: 'App Store' },
      'RU': { topText: 'Скачать в', bottomText: 'App Store' }
    },
    googlePlay: {
      'EN': { topText: 'GET IT ON', bottomText: 'Google Play' },
      'ES': { topText: 'DISPONIBLE EN', bottomText: 'Google Play' },
      'FR': { topText: 'DISPONIBLE SUR', bottomText: 'Google Play' },
      'DE': { topText: 'JETZT BEI', bottomText: 'Google Play' },
      'IT': { topText: 'DISPONIBILE SU', bottomText: 'Google Play' },
      'JA': { topText: '入手', bottomText: 'Google Play' },
      'KO': { topText: '다운로드하기', bottomText: 'Google Play' },
      'ZH': { topText: '获取', bottomText: 'Google Play' },
      'RU': { topText: 'ДОСТУПНО В', bottomText: 'Google Play' }
    },
    appGallery: {
      'EN': { topText: 'EXPLORE IT ON', bottomText: 'AppGallery' },
      'ES': { topText: 'EXPLORA EN', bottomText: 'AppGallery' },
      'FR': { topText: 'EXPLOREZ SUR', bottomText: 'AppGallery' },
      'DE': { topText: 'ENTDECKEN SIE AUF', bottomText: 'AppGallery' },
      'IT': { topText: 'ESPLORA SU', bottomText: 'AppGallery' },
      'JA': { topText: 'で見つける', bottomText: 'AppGallery' },
      'KO': { topText: '에서 탐색', bottomText: 'AppGallery' },
      'ZH': { topText: '在上探索', bottomText: 'AppGallery' },
      'RU': { topText: 'ИССЛЕДУЙТЕ В', bottomText: 'AppGallery' }
    }
  };

  const { topText, bottomText } = storeText[type][lang];
  const defaultAlt = `${topText} ${bottomText}`;

  // More detailed and accurate SVG logos for each store
  const getStoreLogo = () => {
    switch (type) {
      case 'appStore':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11"/>
          </svg>
        );
      case 'googlePlay':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 505.499 505.499" width="28" height="28" fill="currentColor">
            <path d="M471.497 234.466l-92.082-53.135-75.733 73.208 69.215 66.907 98.6-56.91c5.43-3.133 8.677-8.756 8.677-15.03 0-6.275-3.245-11.898-8.677-15.04zM363.785 172.3l-101.332-58.497L40.375 0l250.828 242.47M44.063 505.5l218.771-120.512 94.435-54.515-66.065-63.87M25.56 9.815l-.236 489.671L278.72 254.534"/>
          </svg>
        );
      case 'appGallery':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 126 126" width="28" height="28" fill="currentColor">
            <path d="M87.5 58.3L64.4 44.8c-1.2-.7-2.6-.7-3.8 0L37.5 58.3c-1.2.7-1.9 2-1.9 3.4s.7 2.7 1.9 3.4l23.1 13.5c.6.3 1.2.5 1.9.5.7 0 1.3-.2 1.9-.5l23.1-13.5c1.2-.7 1.9-2 1.9-3.4s-.7-2.7-1.9-3.4z"/>
            <path d="M126 63c0 34.8-28.2 63-63 63S0 97.8 0 63 28.2 0 63 0s63 28.2 63 63zm-22.1-8.3L76.2 37.1c-3.5-2.1-7.8-2.1-11.4 0L37.1 54.7c-3.5 2.1-5.7 5.9-5.7 10.1v35.1c0 4.2 2.2 8 5.7 10.1 1.8 1 3.7 1.5 5.7 1.5s3.9-.5 5.7-1.5l27.7-17.5c3.5-2.1 5.7-5.9 5.7-10.1v-35c0-4.2-2.2-8-5.7-10.1L48.5 24.5c-3.5-2.1-7.8-2.1-11.4 0L9.4 42.1c-3.5 2.1-5.7 5.9-5.7 10.1V87c0 4.2 2.2 8 5.7 10.1 1.8 1 3.7 1.5 5.7 1.5s3.9-.5 5.7-1.5l27.7-17.5c3.5-2.1 5.7-5.9 5.7-10.1"  fillRule="evenodd" clipRule="evenodd"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <a
      className={`inline-flex items-center py-2 px-5  ${
        darkTheme ? 'bg-black text-white' : 'bg-white text-black border border-gray-300'
      } no-underline hover:opacity-90 transition-opacity min-w-40`}
      aria-label={alt || defaultAlt}
      {...props}
    >
      <div className="mr-3 flex-shrink-0">{getStoreLogo()}</div>
      <div className="flex flex-col">
        <span className="text-xs font-medium tracking-wide uppercase">{topText}</span>
        <span className="text-lg font-semibold leading-tight">{bottomText}</span>
      </div>
    </a>
  );
};

export default ButtonMobileStore;