export interface User {
  id;  // defined types? int vs GUIDs?
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
