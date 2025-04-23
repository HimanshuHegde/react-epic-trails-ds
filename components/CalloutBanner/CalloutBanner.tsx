// CalloutBanner.tsx
'use client'
import React, { ReactNode } from 'react';

type VariantType = 'default' | 'info' | 'warning' | 'error' | 'success';

type CalloutBannerProps ={
  title?: string;
  content: string | ReactNode;
  imageUrl?: string;
  imagePosition?: 'left' | 'right';
  variant?: VariantType;
  className?: string;
  theme?:'primary'|'secondary';
  onClick?: () => any
}

const CalloutBanner= ({
  title,
  content,
  imageUrl,
  imagePosition = 'left',
  variant = 'default',
  className = '',
  theme="primary",
  onClick,
  ...props
}: CalloutBannerProps) => {
  // Preset variants for easy styling
  const variants: Record<VariantType, { bg: string; text: string; border: string }> = {
    default: {
      bg: `${theme==='primary'?'bg-black':'bg-gray-50'}`,
      text: `${theme==='primary'?'text-white':'text-black'}`,
      border: `${theme==='primary'?'border-black':'border-gray-400'}`
    },
    info: {
     bg: `${theme==='primary'?'bg-black':'bg-gray-50'}`,
     text: `${theme==='primary'?'text-blue-300':'text-blue-700'}`,
      border: 'border-blue-700'
    },
    warning: {
    bg: `${theme==='primary'?'bg-black':'bg-gray-50'}`,
      text: 'text-orange-400',
      border: 'border-orange-700'
    },
    error: {
        bg: `${theme==='primary'?'bg-black':'bg-gray-50'}`,
      text: 'text-contentNegative',
      border: 'border-borderNegative'
    },
    success: {
    bg: `${theme==='primary'?'bg-black':'bg-gray-50'}`,
      text: 'text-contentPositive',
      border: 'border-borderPositive'
    }
  };

  const selectedVariant = variants[variant];

  return (
    <div 
      className={`flex ${imagePosition === 'right' ? 'flex-row-reverse' : 'flex-row'} ${selectedVariant.bg} ${selectedVariant.text} border-2 ${selectedVariant.border} rounded-lg overflow-hidden ${onClick == undefined?'cursor-default':'cursor-pointer hover:opacity-90 transition-opacity'} ${className}`}
      {...props}
      onClick={onClick}
    >
      {imageUrl && (
        <div className="shrink-0">
          <img 
            src={imageUrl} 
            alt="Banner illustration" 
            className="h-full w-fit object-cover md:w-48"
          />
        </div>
      )}
      
      <div className="flex flex-col p-4 justify-center">
        {title && (
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
        )}
        
        <div className="text-sm">
          {typeof content === 'string' ? <p>{content}</p> : content}
        </div>
      </div>
    </div>
  );
};

export default CalloutBanner;