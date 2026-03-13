export type UserInDb = {
  id: number,
  name: string,
  email: string,
  password: string,
  insertion_date: Date,
  last_connexion: Date | null,
};

export type UserRegisterForm = {
  name: string,
  email: string,
  password: string,
};