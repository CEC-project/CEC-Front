export interface RoutePaths {
  default: string;
  login: string;
  home: string;
  workbench: string;
  folder: string;
  setting: string;
  withdrawal: string;
}

export interface StyleProps {
  className?: string;
  style?: React.CSSProperties;
}

export interface ButtonProps extends StyleProps {
  disabled?: boolean;
  type?: "button" | "submit";
  children?: React.ReactNode;
  icon?: React.ReactNode;
  title?: string;
  onClick?: () => void;
}

export interface MyInfoType {
  email: string;
  name: string;
  profileServerFileName: string;
  phoneNumber: string;
  company: string;
  department: string;
  position: string;
  createdAt?: string;
}
