import { AuthorService } from "./Application/author.service";
import { CheepService } from "./Application/cheep.service";
import { AuthorRepository } from "./Infrastructure/repository/author.repository";
import { CheepRepository } from "./Infrastructure/repository/cheep.repository";

const authorService = new AuthorService(new AuthorRepository());
const cheepService = new CheepService(
  new AuthorRepository(),
  new CheepRepository()
);
async function run() {
  /* const result = await cheepService.postCheep(
    "tandavala",
    "meu primeiro cheep"
  );

  console.log(result); */
  /* const result = await authorService.update(1, "novo.site.io", "nova bio");

  console.log(result); */
  /* const result = await authorService.queryByUsername("tandavala");
  console.log(result); */
  //await authorService.register("tandavala", "my bio", "tandavala.io");
}

run();
