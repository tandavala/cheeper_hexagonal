import { Cheep } from "../entities/cheep";
import { CheepId } from "../value-objects/cheep-id";

export interface CheepRepository {
  add(cheep: Cheep): void;
  ofId(cheepId: CheepId): Cheep;
}
