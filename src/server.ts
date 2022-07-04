import { AuthorService } from "./Application/author.service";
import { AuthorRepository } from "./Infrastructure/repository/author.repository";

const authorService = new AuthorService(new AuthorRepository());

async function run() {
  const result = await authorService.update(1, "novo.site.io", "nova bio");

  console.log(result);

  /* const result = await authorService.queryByUsername("tandavala");
  console.log(result); */

  //await authorService.register("tandavala", "my bio", "tandavala.io");
}

run();
