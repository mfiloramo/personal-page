export interface SectionComponentProps {
  readonly subtitle?: string;
  readonly paragraphs: string[];
  readonly photo?: { src: string; alt: string };
  readonly background?: string;
  readonly textColor?: string;
  readonly isEven?: boolean;
  readonly isFirst?: boolean;
}