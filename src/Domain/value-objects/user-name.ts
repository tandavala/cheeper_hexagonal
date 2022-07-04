import { empty } from "../../Common/Domain/functions";
import { InvalidArgumentException } from "../../Common/Domain/invalid-argument.exception";
import { ValueObject } from "./value-object";

export class UserName extends ValueObject {
  private constructor(private _userName: string) {
    super();
    this.setUserName(_userName);
  }
  private setUserName(userName: string): void {
    this.assertNotEmpty(userName);
    this._userName = userName;
  }

  public static pick(userName) {
    return new UserName(userName);
  }

  public equalsTo(usernName: UserName): boolean {
    return this._userName === usernName._userName;
  }

  get name() {
    return this._userName;
  }
  private assertNotEmpty(str: string): void {
    if (empty(str))
      throw new InvalidArgumentException("User name cannot be empty");
  }
  public __toString() {
    return this.toString();
  }
}
