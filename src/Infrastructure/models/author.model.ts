import Database from "../config/knexfile";

const AuthorModel = async () => await Database("authors");
export default AuthorModel;
