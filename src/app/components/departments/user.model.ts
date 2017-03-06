export class User {
  id: number;
  departmentId: number;
  departmentName: string;

  constructor(public firstName: string,
              public lastName: string,
              public phone: string,
              public salary: number,) {
  }
}
