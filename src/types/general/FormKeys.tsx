export type FormKeys = {
  position: number;
  key: string;
  type: string;
  placeholder?: string;
  options?: { label: string; value?: boolean }[];
  sizeGrid?: boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  onChange?: (e) => void;
  optionLabel?: string[];
  decimals?: number;
  fields?: {
    text: string;
    value: string;
  };
  rows?: number;
  required?: {
    value: boolean;
    message: string;
  };
};
