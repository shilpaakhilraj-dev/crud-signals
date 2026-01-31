export interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
}

export interface UserModalConfig {
  mode: 'create' | 'edit';
  title: string;
  data?: User;
}