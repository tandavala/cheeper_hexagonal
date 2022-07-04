import Database from "../config/knexfile";

const CheepModel = () => Database("cheeps");

export default CheepModel;
