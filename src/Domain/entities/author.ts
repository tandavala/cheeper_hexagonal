import { Cheep } from "./cheep";

export class Author {
  private _id: number;
  private _website: string;
  private _bio: string;
  private _username: string;

  constructor(username: string) {
    this.setName(username);
  }

  public setName(username: string): void {
    if (username === undefined) throw new Error("Username cannot be empty");
    this._username = username;
  }

  public username(): string {
    return this._username;
  }
  public setWebsite(website: string): void {
    if (website === undefined) throw new Error("Website cannot be empty");
    this._website = website;
  }

  public website(): string {
    return this._website;
  }

  public setBio(bio: string): void {
    if (bio === undefined) throw new Error("Bio cannot be empty");
    this._bio = bio;
  }

  public bio(): string {
    return this._bio;
  }

  public setId(id: number): void {
    this._id = id;
  }

  public id(): Number {
    return this._id;
  }

  public compose(message: string) {
    if (!this._id) throw new Error("Author id has not been assigned yet");
    return Cheep.compose(this._id, message);
  }
}
