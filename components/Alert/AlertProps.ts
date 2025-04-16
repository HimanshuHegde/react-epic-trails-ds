export type AlertVariant = 
  | 'default'
  | 'info'
  | 'success'
  | 'warning'
  | 'critical';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the alert
   */
  children: React.ReactNode;
  
  /**
   * The variant of the alert
   * @default 'default'
   */
  variant?: AlertVariant;
  
  /**
   * Show close button
   * @default false
   */
  dismissible?: boolean;
  
  /**
   * Callback when alert is dismissed
   */
  onDismiss?: () => void;
  
  /**
   * Action button text
   */
  actionText?: string;
  
  /**
   * Callback when action button is clicked
   */
  onAction?: () => void;
  
  /**
   * Text link content
   */
  linkText?: string;
  
  /**
   * URL for the text link
   */
  linkHref?: string;
  
  /**
   * Whether this is a playground alert
   * @default false
   */
  playground?: boolean;
  
  /**
   * Support for RTL (Right-to-Left) languages
   * @default false
   */
  rtl?: boolean;
}