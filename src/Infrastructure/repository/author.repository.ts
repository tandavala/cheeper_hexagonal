import { Author } from "../../Domain/entities/author";
import { IAuthorRepository } from "../../Domain/repository/author.repository";
import { UserName } from "../../Domain/value-objects/user-name";
import { AuthorId } from "../../Domain/value-objects/userid";
import Database from "../config/knexfile";

export class AuthorRepository implements IAuthorRepository {
  async ofId(authorId: AuthorId): Promise<Author> {
    return await Database("authors").where("id", authorId).first();
  }

  async ofUserName(userName: UserName): Promise<Author> {
    const data = await Database("authors")
      .where("username", userName.name)
      .first();
    const author = new Author(data.username);
    author.setId(data.id);
    author.setBio(data.bio);
    author.setWebsite(data.website);
    return author;
  }

  async add(author: Author): Promise<void> {
    await Database("authors").insert({
      username: author.username,
      bio: author.bio,
      website: author.website,
    });
  }

  async update(id, website, bio) {
    const data = await this.ofId(id);
    const author = new Author(data.username);

    author.setBio(bio);
    author.setWebsite(website);
    await Database("authors").where("id", data.id).update({
      website: author.website,
      bio: author.bio,
    });
    return author;
  }
}
