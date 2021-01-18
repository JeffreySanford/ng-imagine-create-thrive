export class Person {
  public first_name: string;
  public last_name: string;
  public phone: string;
  public avatar: string;
  public email: string;

  constructor(first_name: string, last_name: string, phone: string, avatar: string, email: string) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.phone = phone;
    this.avatar = avatar;
    this.email = email;
  }
}
