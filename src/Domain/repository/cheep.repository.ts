import { Cheep } from "../entities/cheep";
import { CheepId } from "../value-objects/cheep-id";

export interface ICheepRepository {
  add(cheep: Cheep): void;
  ofId(cheepId: CheepId): Cheep;
}
