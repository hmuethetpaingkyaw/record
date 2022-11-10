import DB_CONNECTION from "../database";
import { DataTypes } from "sequelize";

const CodeModel = DB_CONNECTION.define("code", {
  code: DataTypes.TEXT,
});
(async () => {
  await DB_CONNECTION.sync({ force: false });
})();

export default CodeModel;
