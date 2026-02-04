export type fieldType = 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'radio' | 'checkbox';
export interface fieldOptionsProps {
  value: string;
  label: string;
}

export interface fieldProps {
  name: string;
  label: string;
  type: fieldType;
  required: boolean;
  options?: fieldOptionsProps[];
  placeholder?: string;
}

export interface ContactFormSchema {
  name: string;
  email: string;
  phone: string;
  organization: string;
  location: string;
  referralSource?: string;
  services?: string[];
  contactMethod?: string;
  notes?: string;
}
