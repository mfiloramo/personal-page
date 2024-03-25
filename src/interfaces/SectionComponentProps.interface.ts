import { TechStackIconProps } from '@/interfaces/TechnologyProps.interfaces';

export interface SectionComponentProps {
  readonly id?: string;
  readonly subtitle?: string;
  readonly paragraphs: string[];
  readonly photo?: { src: string; alt: string };
  readonly background?: string;
  readonly textColor?: string;
  readonly isEven?: boolean;
  readonly isFirst?: boolean;
  readonly technologyStack?: TechStackIconProps[];
  readonly flowchart?: string;
  readonly convoImageIndex?: number;
  readonly leftConvoImages?: string[];
  readonly rightConvoImages?: string[];
  readonly flagImages?: string[];
}