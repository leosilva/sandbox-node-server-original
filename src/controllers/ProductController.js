const connection = require("../database/connection");

module.exports = {
  async save(request, response) {
    const [id] = await connection("product").insert(request.body);
    return response.json({ id });
  },

  async list(request, response) {
    const productList = await connection("product").select("*");
    return response.json(productList);
  },

  async update(request, response) {
    const idObtido = request.params.id;
    await connection("product")
      .update(request.body)
      .where({ id: idObtido });
    return response.status(200).send();
  },

  async delete(request, response) {
    const idObtido = request.params.id;
    await connection("product")
      .del()
      .where({ id: idObtido });

    return response.status(200).send();
  }
};
