import { Author } from "../Domain/entities/author";
import { AuthorRepository } from "../Infrastructure/repository/author.repository";

export class AuthorService {
  constructor(private authorRepository: AuthorRepository) {}

  async register(username, bio, website) {
    const author = this.convertToEntity(username, bio, website);
    return await this.authorRepository.add(author);
  }

  async queryByUsername(userName) {
    return await this.authorRepository.ofUserName(userName);
  }

  async update(id, website, bio) {
    return await this.authorRepository.update(id, website, bio);
  }

  private convertToEntity(username, bio, website) {
    const author = new Author(username);
    author.setBio(bio);
    author.setWebsite(website);
    return author;
  }
}
