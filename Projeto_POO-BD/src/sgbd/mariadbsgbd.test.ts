describe("Teste de integração com o banco de dados MariaDB", () => {
  const MariadbSGBD = require('./mariadbsgbd').MariadbSGBD;
  const host = "localhost";
  const user = "root";
  const pass = "";

  test("Deve criar uma nova conexão com o banco de dados", () => {
    expect(async ()=>{
      let sgbd = new MariadbSGBD(host, user, pass);
      let conn = await sgbd.connect();
      conn.end();
    });
  });
});