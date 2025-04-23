import React, { useEffect, useRef } from "react";
import clsx from "clsx";
import { ArrowBackOutline, Close } from "../icons";

type ModalProps = {
  children: React.ReactNode;
  lockScrolling?: boolean;
  preventOverlayClose?: boolean;
  isMobileFullPage?: boolean;
  suppressed?: boolean;
  showBack?: boolean;
  illustration?: React.ReactNode;
  showSection?: boolean;
  fixedFooter?: boolean;
  size?: "small" | "medium" | "large";
  title?: string;
  description?: string;
  flex?: boolean;
  hasCloseButton?: boolean;
  disableAnimation?: boolean;
  labelClose?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  id?: string;
  onClose: () => void;
  triggerRef?: React.RefObject<any>;
  onBack?: () => void;
};

const sizeClasses = {
  small: "max-w-sm",
  medium: "max-w-2xl",
  large: "max-w-4xl",
};

export const Modal: React.FC<ModalProps> = ({
  children,
  lockScrolling = true,
  preventOverlayClose = false,
  isMobileFullPage = false,
  suppressed = false,
  showBack = false,
  illustration,
  showSection = true,
  fixedFooter = false,
  size = "medium",
  title,
  description,
  flex = false,
  hasCloseButton = true,
  disableAnimation = false,
  labelClose = "Close",
  header,
  footer,
  id,
  onClose,
  triggerRef,
  onBack,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Restore focus to trigger element on close
  useEffect(() => {
    return () => {
      if (triggerRef?.current) {
        triggerRef.current.focus?.();
      }
    };
  }, [triggerRef]);

  useEffect(() => {
    if (lockScrolling) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [lockScrolling]);

  return (
    <div
      id={id}
      className={clsx(
        "fixed inset-0 z-50 flex items-center justify-center",
        isMobileFullPage && "items-start",
        !disableAnimation && "transition-all duration-200 ease-in-out"
      )}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-70"
        onClick={() => {
          if (!preventOverlayClose) onClose();
        }}
      />

      {/* Modal Container */}
      <div
        ref={modalRef}
        className={clsx(
          "relative w-full mx-4 text-left bg-gray-50 text-black rounded-xl overflow-hidden",
          sizeClasses[size],
          isMobileFullPage && "min-h-screen rounded-none",
          suppressed
            ? "p-4 shadow-sm"
            : "p-6 shadow-xl",
          flex && "flex flex-col"
        )}
      >
        {/* Top Controls */}
        <div className="flex justify-between items-start">
          {/* Back Button */}
          {showBack && (
            <button
              onClick={onBack}
              className="text-white hover:text-gray-400 mr-4"
              aria-label="Go back"
            >
              <ArrowBackOutline width="24px" height="24px" />
            </button>
          )}

          {/* Close Button */}
          {hasCloseButton && (
            <button
              aria-label={labelClose}
              onClick={onClose}
              className="ml-auto text-white hover:text-red-400"
            >
              <Close width="24px" height="24px" />
            </button>
          )}
        </div>

        {/* Illustration */}
        {illustration && <div className="mt-6">{illustration}</div>}

        {/* Header */}
        {header ? (
          <div className="mt-4">{header}</div>
        ) : (
          (title || description) && (
            <div className="mt-6">
              {title && <h2 className="text-xl font-semibold">{title}</h2>}
              {description && (
                <p className="text-sm text-gray-800 mt-1">{description}</p>
              )}
            </div>
          )
        )}

        {/* Content */}
        {showSection && <div className="mt-6">{children}</div>}

        {/* Footer */}
        {footer && (
          <div
            className={clsx(
              "mt-6",
              fixedFooter && "sticky bottom-0 bg-black py-4"
            )}
          >
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;