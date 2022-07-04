import { Author } from "../../Domain/entities/author";

export class BaseRepository {
  private _model: any;
  private _modelDynamic: any;

  constructor(model) {
    this._modelDynamic = import(`../models/${model}`);
  }

  async findAll() {
    return await this._modelDynamic().find();
  }

  async create(requestBody: Author) {
    console.log(requestBody.username);
  }

  async findById(id) {
    return await this._modelDynamic().where("id", id).first();
  }
}
