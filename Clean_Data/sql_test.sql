CREATE TABLE Incident (
    Incident_ID VARCHAR,
    Media_Attention VARCHAR,
    Date DATE,
    School VARCHAR,
    City VARCHAR,
    State VARCHAR,
    School_Level VARCHAR,
    Targets VARCHAR
);

CREATE TABLE Shooter (
    Incident_ID VARCHAR,
    age VARCHAR,
    schoolaffiliation VARCHAR,
    shooterdied VARCHAR
);

CREATE TABLE Victim (
    Incident_ID VARCHAR,
    Injury VARCHAR,
    Age VARCHAR
);

CREATE TABLE Weapon (
    Incident_ID VARCHAR,
    weapontype VARCHAR
);

SELECT * FROM Weapon;
SELECT * FROM Incident;
SELECT * FROM Victim;
SELECT * FROM Shooter;