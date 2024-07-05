export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  logs: ILogs[];
}
export interface ILogs {
  date: Date;
  timeIn: Date | undefined;
  timeOut: Date | undefined;
}

export let Users: IUser[] = [
  {
    id: "1930",
    firstName: "John Patrick Ryan",
    lastName: "Mandal",
    logs: [
      {
        date: new Date(),
        timeIn: undefined,
        timeOut: undefined,
      },
    ],
  },
];
