import { Author } from "../entities/author";
import { UserName } from "../value-objects/user-name";
import { AuthorId } from "../value-objects/userid";

export interface AuthorRepository {
  ofId(authorId: AuthorId): Author;
  ofUserName(userName: UserName): Author;
  add(author: Author): void;
}
