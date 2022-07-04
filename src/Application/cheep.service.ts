import { UserName } from "../Domain/value-objects/user-name";
import { AuthorRepository } from "../Infrastructure/repository/author.repository";
import { CheepRepository } from "../Infrastructure/repository/cheep.repository";

export class CheepService {
  constructor(
    private authRepository: AuthorRepository,
    private cheepRepository: CheepRepository
  ) {}

  public async postCheep(username: string, message: string) {
    const author = await this.authRepository.ofUserName(
      UserName.pick(username)
    );
    const cheep = author.compose(message);
    await this.cheepRepository.add(cheep);
    return cheep;
  }
}
