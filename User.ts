export default class User {
  constructor(private _password: string, public _email: string) {}

  set password(newPassword) {
    if (newPassword.length > 10) this._password = newPassword;
    else new Error("the provided password is too short!");
  }
  get password() {
    return this._password;
  }
}
