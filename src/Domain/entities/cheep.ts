import { empty } from "../../Common/Domain/functions";
import { RuntimeException } from "../../Common/Domain/runtime-exception";

export class Cheep {
  private _id: number;
  private _message: string;
  private _date: Date;

  public static compose(authorId: number, message: string) {
    return new Cheep(authorId, message);
  }

  private constructor(private _authorId, private msg: string) {
    this._date = new Date();
    this.setMessage(msg);
  }

  private setMessage(message) {
    if (empty) {
      throw new RuntimeException("Message cannot be empty");
    }
    this._message = message;
  }

  get authorId(): number {
    return this._authorId;
  }

  get message(): string {
    return this._message;
  }

  get date(): Date {
    return this._date;
  }

  public setId(id: number): void {
    this._id = id;
  }

  get id(): number {
    return this._id;
  }
}
