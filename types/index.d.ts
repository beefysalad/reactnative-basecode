interface IUser {
  email: string;
  name: string;
  password: string;
}
interface ISignIn {
  email: string;
  password: string;
}
interface IAuthenticatedUser {
  email: string;
  name: string;
}
interface ICreateTodo {
  name: string;
  description: string;
  date: string;
}
interface ITodo {
  _id: string;
  name: string;
  isCompleted: boolean;
  description: string;
  isEditable: boolean;
  date: string;
}
