import { Author } from "../entities/author";
import { UserName } from "../value-objects/user-name";
import { AuthorId } from "../value-objects/userid";

export interface IAuthorRepository {
  ofId(authorId: AuthorId): Promise<Author>;
  ofUserName(userName: UserName): Promise<Author>;
  add(author: Author): Promise<void>;
}
