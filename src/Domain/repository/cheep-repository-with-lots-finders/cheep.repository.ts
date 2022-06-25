import { Author } from "../../entities/author";
import { Cheep } from "../../entities/cheep";
import { CheepId } from "../../value-objects/cheep-id";

export interface CheepRepository {
  add(cheep: Cheep): void;
  ofId(cheepId: CheepId): Cheep;
  query(): Cheep[];
  queryBetween(from: Date, to: Date): Cheep[];
  queryGroupedByMonthAndYear(): Cheep[];
  ofFollowersOfAuthor(author: Author): Cheep[];
  groupedByMonth(year: Date): Cheep[];
}
