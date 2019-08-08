BEGIN;

DROP TABLE IF EXIST warriors (

warrior_id SERIAL PRIMARY KEY,
warrior_name VARCHAR (20) NOT NULL,
warrior_c1 INTEGER,
warrior_c2 INTEGER,
warrior_c3 INTEGER
);

INSERT INTO warriors (warrior_name, warrior_c1, warrior_c2, warrior_c3) VALUES('catMaster24', 1, 0, 1);
INSERT INTO warriors (warrior_name, warrior_c1, warrior_c2, warrior_c3) VALUES('cruiseVoyager25', 0, 0, 0);
INSERT INTO warriors (warrior_name, warrior_c1, warrior_c2, warrior_c3) VALUES('beardedWizard', 1, 0, 0);
INSERT INTO warriors (warrior_name, warrior_c1, warrior_c2, warrior_c3) VALUES('glansFromFrance', 1, 1, 1);


DROP TABLE IF EXIST glans (

  glan_id SERIAL PRIMARY KEY,
  glan_name VARCHAR(100) NOT NULL,
);

INSERT INTO glans (glan_name) VALUES ('oaf');
INSERT INTO glans (glan_name) VALUES ('jester');
INSERT INTO glans (glan_name) VALUES ('salammbo');
INSERT INTO glans (glan_name) VALUES ('rooster');

COMMIT;
