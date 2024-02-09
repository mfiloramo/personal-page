export interface Technology {
  imgSrc: string;
  altText: string;
}

export interface TechnologyStackComponentProps {
  introduction: string;
  stackContent: Technology[];
}