import { Cheep } from "../../Domain/entities/cheep";
import { ICheepRepository } from "../../Domain/repository/cheep.repository";
import { CheepId } from "../../Domain/value-objects/cheep-id";
import Database from "../config/knexfile";

export class CheepRepository implements ICheepRepository {
  async add(cheep: Cheep): Promise<void> {
    return await Database("cheeps").insert({
      author_id: cheep.authorId,
      message: cheep.message,
      created_at: cheep.date,
    });
  }
  ofId(cheepId: CheepId): Cheep {
    throw new Error("Method not implemented.");
  }
}
