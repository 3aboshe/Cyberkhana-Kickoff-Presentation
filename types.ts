import { ReactNode } from 'react';

export interface SlideProps {
  isActive: boolean;
  onNext?: () => void;
  onPrev?: () => void;
}

export interface AnimationProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}
