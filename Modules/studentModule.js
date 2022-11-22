const mongo = require("../connect");

module.exports.getStudents = async (req, res) => {
    try {
      const empdata = await mongo.selectedDb
        .collection("student-data")
        .find()
        .toArray();
      res.send(empdata);
    } catch (err) {
      res.status(500).send(err);
    }
  };
  module.exports.createStudents = async (req, res) => {
    try {
      const data = await mongo.selectedDb
        .collection("student-data")
        .insertOne(req.body);
      res.send(data);
    } catch (error) {
      res.status(500).send(error);
    }
  };
