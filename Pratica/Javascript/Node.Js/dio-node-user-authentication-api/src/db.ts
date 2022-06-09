import { Pool } from 'pg';

const connectionString = 'postgres://itofkiam:Kp7_MVSDZO-gkMoeYZj310Df9pNXC7Ms@kesavan.db.elephantsql.com/itofkiam';

const db = new Pool({ connectionString });

export default db;