export interface HeaderProps {
  icon?: JSX.Element;
  title?: string;
  subtitle?: string;
}

export type CommunicationType = {
  id: number;
  sender: string;
  receiver: string;
  communicationMessage: string;
  deliveryDate: string;
  communicationFormat: string[];
  communicationStatus: string;
};
