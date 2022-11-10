import CodeModel from "../models/code";

class CodeController {

  async index(req, res) {
    try {
      let code = req.params.code;
      const result = await CodeModel.findOne({
        where: {
          code: code,
        },
      });
      if (result) {
        return res.status(404).json({ message: "Code already exsited." });
      }
      return res.status(200).json({ status: "success" });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
  async store(req, res) {
    try {
      let code = req.params.code;
      const result = await CodeModel.findOne({
        where: {
          code: code,
        },
      });
      if (result) {
        return res.status(404).json({ message: "Code already exsited." });
      }

      const saveCode = await CodeModel.create({
        code: code,
      });
      return res.status(200).json({ data: saveCode });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error });
    }
  }
}

export default new CodeController();
