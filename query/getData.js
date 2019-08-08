const dbConnection = require('../database/db_connection')

const getData = cb => {
  dbConnection.query('SELECT warriors.warrior_name, glans.glan_name FROM warriors, glans WHERE ')
}
