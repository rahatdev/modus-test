export interface User {
  id? : number;  
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  picture?: {
    large?: string,
    medium?: string,
    thumbnail?: string
  }

}
