import mariadb from 'mariadb';

class MariadbSGBD {
  constructor(
    public readonly host: string,
    public readonly user: string,
    public readonly pass: string,
    public readonly database: string | undefined
  ) { }

  async connect(): Promise<mariadb.Connection> {
    return mariadb.createConnection({
      host: this.host,
      user: this.user,
      password: this.pass,
      database: this.database ? this.database : undefined
    });
  }

  async enviarSQL(sql: string): Promise<any> {
    const conn = await this.connect();
    const result = await conn.query(sql);
    conn.end();
    return result;
  }
}

export {MariadbSGBD}