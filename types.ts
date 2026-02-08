
export interface ExpansionStrategy {
  currentCore: string;
  expansionSector: string;
  pivotStrategy: string;
  longTermVision: string;
  techRequirements: string[];
}

export interface BentoItem {
  title: string;
  content: string;
  tag?: string;
  size?: 'small' | 'medium' | 'large';
}
