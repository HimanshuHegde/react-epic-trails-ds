export type DrawerPosition = 'right' | 'left' | 'top' | 'bottom';

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  position?: DrawerPosition;
  title?: string;
  className?: string;
  overlayClassName?: string;
  headerClassName?: string;
  bodyClassName?: string;
  closeButtonClassName?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export interface DrawerContextType {
  isOpen: boolean;
  open: (content: React.ReactNode, position?: DrawerPosition, title?: string, size?: 'sm' | 'md' | 'lg' | 'xl' | 'full') => void;
  close: () => void;
  content: React.ReactNode | null;
  position: DrawerPosition;
  title: string;
  size: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}