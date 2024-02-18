export interface SectionComponentProps {
  readonly subtitle?: string;
  readonly paragraphs: string[];
  readonly photo?: { src: string; alt: string };
  readonly isEven: boolean;
}