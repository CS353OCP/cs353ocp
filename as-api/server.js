// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");
var mysql = require('mysql'); //Library to connect MySql database

var succesfullLogin = false;
var succesfullRegister = false;
var userId;
// Server Configuration
const app = express();
app.use(cors());
app.use(bodyParser.json());

// DB Configuration
var connectionUrl = require('./url');
console.log(connectionUrl.connectionUrl);
var connection = mysql.createConnection(connectionUrl.connectionUrl); //Connection url

//Establishing connection
function connectDB() {
    connection.connect(function (err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }
        console.log('connected as id ' + connection.threadId);
    });
}

function populateDB() {
    // user
    insertQuery("INSERT INTO user(name, age, email,password,balance) VALUES('Ali',22,'ali@email','pass123',1000);");
    insertQuery("INSERT INTO user(name, age, email,password,balance) VALUES('Ece',23,'ece@email','123456',100);");
    insertQuery("INSERT INTO user(name, age, email,password,balance) VALUES('Fatma',17,'fatma@email','password',70);");
    insertQuery("INSERT INTO user(name, age, email,password,balance) VALUES('John',22,'john@email','password1',0);");
    insertQuery("INSERT INTO user(name, age, email,password,balance) VALUES('Betty',33,'betty@email','password123',0);");
    insertQuery("INSERT INTO user(name, age, email,password,balance) VALUES('Clark',56,'clark@email','pass1',10);");
    insertQuery("INSERT INTO user(name, age, email,password,balance) VALUES('Kirk',9,'kirk@email','123123',30);");
    insertQuery("INSERT INTO user(name, age, email,password,balance) VALUES('Kemal',17,'kemal@email','kemapass',10);");
    insertQuery("INSERT INTO user(name, age, email,password,balance) VALUES('Mary',19,'mary@email','mary123',10);");

    // event
    insertQuery("INSERT INTO event(name, date, type, quota, available, restrictions, price) VALUES('Opening Party',07/07/2022,'Party',30,30,0,30);");
    insertQuery("INSERT INTO event(name, date, type, quota, available, restrictions, price) VALUES('Xmas Party',25/12/2022,'Party',47,47,0,7);");
    insertQuery("INSERT INTO event(name, date, type, quota, available, restrictions, price) VALUES('Aga B Concert',06/12/2022,'Concert',10,10,1,2);");
    insertQuery("INSERT INTO event(name, date, type, quota, available, restrictions, price) VALUES('Reading Club Social',22/7/2022,'Gathering',30,30,0,11);");
    insertQuery("INSERT INTO event(name, date, type, quota, available, restrictions, price) VALUES('Couples Night',12/12/2022,'Social',60,60,0,1);");
    insertQuery("INSERT INTO event(name, date, type, quota, available, restrictions, price) VALUES('Karaoke Night',11/12/2022,'Social',60,60,0,0);");
    insertQuery("INSERT INTO event(name, date, type, quota, available, restrictions, price) VALUES('Table Games',10/12/2022,'Social',60,60,0,70);");
    insertQuery("INSERT INTO event(name, date, type, quota, available, restrictions, price) VALUES('Open Air Party',09/12/2022,'Party',70,70,0,90);");
    insertQuery("INSERT INTO event(name, date, type, quota, available, restrictions, price) VALUES('Date Night',08/12/2022,'Social',10,10,1,100);");
    insertQuery("INSERT INTO event(name, date, type, quota, available, restrictions, price) VALUES('Vampire Theme Party',07/12/2022,'Party',10,10,2,20);");
    insertQuery("INSERT INTO event(name, date, type, quota, available, restrictions, price) VALUES('Live DJ',06/12/2022,'Party',10,10,1,30);");

    // place
    insertQuery("INSERT INTO place VALUES(1,'Kite','Turkey','Ankara','Cankaya');");
    insertQuery("INSERT INTO place VALUES(2,'Rudy','Turkey','Ankara','Cankaya');");
    insertQuery("INSERT INTO place VALUES(3,'Roxanne','Turkey','Ankara','Kizilay');");
    insertQuery("INSERT INTO place VALUES(4,'Alti Ustu','Turkey','Ankara','Kizilay');");
    insertQuery("INSERT INTO place VALUES(5,'ASPAVA','Turkey','Ankara','Esat');");
    insertQuery("INSERT INTO place VALUES(6,'Bowling Center','Turkey','Ankara','Bilkent');");

    // is_at
    insertQuery("INSERT INTO is_at VALUES(1,1);");
    insertQuery("INSERT INTO is_at VALUES(2,1);");
    insertQuery("INSERT INTO is_at VALUES(3,2);");
    insertQuery("INSERT INTO is_at VALUES(4,3);");
    insertQuery("INSERT INTO is_at VALUES(5,3);");
    insertQuery("INSERT INTO is_at VALUES(6,4);");
    insertQuery("INSERT INTO is_at VALUES(7,5);");
    insertQuery("INSERT INTO is_at VALUES(8,5);");
    insertQuery("INSERT INTO is_at VALUES(9,6);");
    insertQuery("INSERT INTO is_at VALUES(10,6);");
    insertQuery("INSERT INTO is_at VALUES(11,6);");

    // attends
    insertQuery("INSERT INTO attends VALUES(1,1);");
    insertQuery("INSERT INTO attends VALUES(1,2);");
    insertQuery("INSERT INTO attends VALUES(1,3);");
    insertQuery("INSERT INTO attends VALUES(1,4);");
    insertQuery("INSERT INTO attends VALUES(1,5);");
    insertQuery("INSERT INTO attends VALUES(1,6);");
    insertQuery("INSERT INTO attends VALUES(1,7);");
    insertQuery("INSERT INTO attends VALUES(1,8);");
    insertQuery("INSERT INTO attends VALUES(1,9);");
    insertQuery("INSERT INTO attends VALUES(1,10);");
    insertQuery("INSERT INTO attends VALUES(1,11);");
    insertQuery("INSERT INTO attends VALUES(2,1);");
    insertQuery("INSERT INTO attends VALUES(2,2);");
    insertQuery("INSERT INTO attends VALUES(2,3);");
    insertQuery("INSERT INTO attends VALUES(2,4);");
    insertQuery("INSERT INTO attends VALUES(2,5);");
    insertQuery("INSERT INTO attends VALUES(2,6);");
    insertQuery("INSERT INTO attends VALUES(3,1);");
    insertQuery("INSERT INTO attends VALUES(3,2);");
    insertQuery("INSERT INTO attends VALUES(3,11);");
    insertQuery("INSERT INTO attends VALUES(3,10);");
    insertQuery("INSERT INTO attends VALUES(4,7);");
    insertQuery("INSERT INTO attends VALUES(5,7);");
    insertQuery("INSERT INTO attends VALUES(6,7);");
    insertQuery("INSERT INTO attends VALUES(7,8);");
    insertQuery("INSERT INTO attends VALUES(8,9);");
    insertQuery("INSERT INTO attends VALUES(9,10);");
    insertQuery("INSERT INTO attends VALUES(9,11);");
    insertQuery("INSERT INTO attends VALUES(4,8);");
    insertQuery("INSERT INTO attends VALUES(4,9);");
    insertQuery("INSERT INTO attends VALUES(5,11);");

    // liked_events
    // uid, eid
    insertQuery("INSERT INTO liked_events VALUES(1,9);");
    insertQuery("INSERT INTO liked_events VALUES(2,9);");
    insertQuery("INSERT INTO liked_events VALUES(3,9);");
    insertQuery("INSERT INTO liked_events VALUES(4,9);");
    insertQuery("INSERT INTO liked_events VALUES(5,9);");
    insertQuery("INSERT INTO liked_events VALUES(6,9);");
    insertQuery("INSERT INTO liked_events VALUES(7,9);");
    insertQuery("INSERT INTO liked_events VALUES(8,9);");
    insertQuery("INSERT INTO liked_events VALUES(9,9);");
    insertQuery("INSERT INTO liked_events VALUES(1,10);");
    insertQuery("INSERT INTO liked_events VALUES(2,10);");
    insertQuery("INSERT INTO liked_events VALUES(3,10);");
    insertQuery("INSERT INTO liked_events VALUES(4,10);");
    insertQuery("INSERT INTO liked_events VALUES(5,10);");
    insertQuery("INSERT INTO liked_events VALUES(6,10);");
    insertQuery("INSERT INTO liked_events VALUES(7,10);");
    insertQuery("INSERT INTO liked_events VALUES(8,10);");
    insertQuery("INSERT INTO liked_events VALUES(9,10);");
    insertQuery("INSERT INTO liked_events VALUES(1,11);");
    insertQuery("INSERT INTO liked_events VALUES(2,11);");
    insertQuery("INSERT INTO liked_events VALUES(3,11);");
    insertQuery("INSERT INTO liked_events VALUES(4,11);");
    insertQuery("INSERT INTO liked_events VALUES(5,11);");
    insertQuery("INSERT INTO liked_events VALUES(6,11);");
    insertQuery("INSERT INTO liked_events VALUES(7,11);");
    insertQuery("INSERT INTO liked_events VALUES(8,11);");
    insertQuery("INSERT INTO liked_events VALUES(9,11);");
    insertQuery("INSERT INTO liked_events VALUES(8,1);");
    insertQuery("INSERT INTO liked_events VALUES(3,2);");
    insertQuery("INSERT INTO liked_events VALUES(4,3);");

    // liked_places
    // uid, pid
    insertQuery("INSERT INTO liked_places VALUES(1,3);");
    insertQuery("INSERT INTO liked_places VALUES(2,3);");
    insertQuery("INSERT INTO liked_places VALUES(3,3);");
    insertQuery("INSERT INTO liked_places VALUES(4,3);");
    insertQuery("INSERT INTO liked_places VALUES(5,2);");
    insertQuery("INSERT INTO liked_places VALUES(6,2);");
    insertQuery("INSERT INTO liked_places VALUES(7,2);");
    insertQuery("INSERT INTO liked_places VALUES(8,1);");
    insertQuery("INSERT INTO liked_places VALUES(9,1);");
    insertQuery("INSERT INTO liked_places VALUES(1,4);");
    insertQuery("INSERT INTO liked_places VALUES(2,4);");
    insertQuery("INSERT INTO liked_places VALUES(3,4);");
    insertQuery("INSERT INTO liked_places VALUES(4,4);");
    insertQuery("INSERT INTO liked_places VALUES(5,4);");
    insertQuery("INSERT INTO liked_places VALUES(6,4);");
    insertQuery("INSERT INTO liked_places VALUES(7,4);");
    insertQuery("INSERT INTO liked_places VALUES(8,5);");
    insertQuery("INSERT INTO liked_places VALUES(9,5);");
    insertQuery("INSERT INTO liked_places VALUES(1,5);");
    insertQuery("INSERT INTO liked_places VALUES(2,5);");
    insertQuery("INSERT INTO liked_places VALUES(3,5);");
    insertQuery("INSERT INTO liked_places VALUES(4,5);");
    insertQuery("INSERT INTO liked_places VALUES(5,6);");
    insertQuery("INSERT INTO liked_places VALUES(6,6);");
    insertQuery("INSERT INTO liked_places VALUES(7,6);");
    insertQuery("INSERT INTO liked_places VALUES(8,6);");
    insertQuery("INSERT INTO liked_places VALUES(9,6);");
    insertQuery("INSERT INTO liked_places VALUES(3,2);");

    // follows
    // followedID, followerID
    insertQuery("INSERT INTO follows VALUES(1,3);");
    insertQuery("INSERT INTO follows VALUES(2,3);");
    insertQuery("INSERT INTO follows VALUES(3,3);");
    insertQuery("INSERT INTO follows VALUES(4,3);");
    insertQuery("INSERT INTO follows VALUES(5,2);");
    insertQuery("INSERT INTO follows VALUES(6,2);");
    insertQuery("INSERT INTO follows VALUES(7,2);");
    insertQuery("INSERT INTO follows VALUES(8,1);");
    insertQuery("INSERT INTO follows VALUES(9,1);");
    insertQuery("INSERT INTO follows VALUES(1,4);");
    insertQuery("INSERT INTO follows VALUES(2,4);");
    insertQuery("INSERT INTO follows VALUES(3,4);");
    insertQuery("INSERT INTO follows VALUES(4,4);");
    insertQuery("INSERT INTO follows VALUES(5,4);");
    insertQuery("INSERT INTO follows VALUES(6,4);");
    insertQuery("INSERT INTO follows VALUES(7,4);");
    insertQuery("INSERT INTO follows VALUES(8,5);");
    insertQuery("INSERT INTO follows VALUES(9,5);");
    insertQuery("INSERT INTO follows VALUES(1,5);");
    insertQuery("INSERT INTO follows VALUES(2,5);");
    insertQuery("INSERT INTO follows VALUES(3,5);");
    insertQuery("INSERT INTO follows VALUES(4,5);");
    insertQuery("INSERT INTO follows VALUES(5,6);");
    insertQuery("INSERT INTO follows VALUES(6,6);");
    insertQuery("INSERT INTO follows VALUES(7,6);");
    insertQuery("INSERT INTO follows VALUES(8,6);");
    insertQuery("INSERT INTO follows VALUES(9,6);");
    insertQuery("INSERT INTO follows VALUES(3,2);");


    // owns
    // uid, eid
    insertQuery("INSERT INTO owns VALUES(1,3);");
    insertQuery("INSERT INTO owns VALUES(5,2);");
    insertQuery("INSERT INTO owns VALUES(8,1);");
    insertQuery("INSERT INTO owns VALUES(9,1);");
    insertQuery("INSERT INTO owns VALUES(1,4);");
    insertQuery("INSERT INTO owns VALUES(2,4);");
    insertQuery("INSERT INTO owns VALUES(8,5);");
    insertQuery("INSERT INTO owns VALUES(9,6);");
    insertQuery("INSERT INTO owns VALUES(1,7);");
    insertQuery("INSERT INTO owns VALUES(2,8);");
    insertQuery("INSERT INTO owns VALUES(3,9);");
    insertQuery("INSERT INTO owns VALUES(4,10);");
    insertQuery("INSERT INTO owns VALUES(5,11);");

    // admin
    // id
    insertQuery("INSERT INTO admin VALUES(1)");
    insertQuery("INSERT INTO admin VALUES(2)");

    //insertQuery("INSERT INTO place VALUES(5,11);");

}

function flushDB() {
    /*
    // organizer
    var query = 'DROP TABLE organizer;';
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('ERROR @ flush organizer' + error.stack);
            return;
        }
        else {
            console.log('Table: organizer\nFlushed Succesfully');
        }
    });
    */

    // liked_places
    query = 'DROP TABLE liked_places;';
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('ERROR @ flush liked_places' + error.stack);
            return;
        }
        else {
            console.log('Table: liked_places\nFlushed Succesfully');
        }
    });

    // liked_events
    query = 'DROP TABLE liked_events;';
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('ERROR @ flush liked_events' + error.stack);
            return;
        }
        else {
            console.log('Table: liked_events\nFlushed Succesfully');
        }
    });

    /*
    // liked_organizators
    query = 'DROP TABLE liked_organizators;';
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('ERROR @ flush liked_organizators' + error.stack);
            return;
        }
        else {
            console.log('Table: liked_organizators\nFlushed Succesfully');
        }
    });
    */

    // attends
    query = 'DROP TABLE attends;';
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('ERROR @ flush attends' + error.stack);
            return;
        }
        else {
            console.log('Table: attends\nFlushed Succesfully');
        }
    });

    // follows
    query = 'DROP TABLE follows;';
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('ERROR @ flush follows' + error.stack);
            return;
        }
        else {
            console.log('Table: follows\nFlushed Succesfully');
        }
    });

    // owns
    query = 'DROP TABLE owns;';
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('ERROR @ flush owns' + error.stack);
            return;
        }
        else {
            console.log('Table: owns\nFlushed Succesfully');
        }
    });

    // admin
    query = 'DROP TABLE admin;';
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.log('ERROR @ flush admin' + error.stack);
            return;
        }
        else {
            console.log('Table: admin\nFlushed Succesfully');
        }
    });

    // user
    var query = 'DROP TABLE user;';
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('ERROR @ flush  user' + error.stack);
            return;
        }
        else {
            console.log('Table: user\nFlushed Succesfully');
        }
    });

    // is_at
    query = 'DROP TABLE is_at;';
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('ERROR @ flush is_at' + error.stack);
            return;
        }
        else {
            console.log('Table: is_at\nFlushed Succesfully');
        }
    });

    // event
    query = 'DROP TABLE event;';
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('ERROR @ flush event' + error.stack);
            return;
        }
        else {
            console.log('Table:event\nFlushed Succesfully');
        }
    });

    // place
    var query = 'DROP TABLE place;';
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('ERROR @ flush place' + error.stack);
            return;
        }
        else {
            console.log('Table: place\nFlushed Succesfully');
        }
    });

    // Trigger
    // after_attends_insert
    /* var query = 'DROP TRIGGER after_attends_insert;';
     connection.query(query, function (error, results, fields) {
         if (error) {
             console.error('ERROR @ flush after_attends_insert' + error.stack);
             return;
         }
         else {
             console.log('Trigger: after_attends_insert\nFlushed Succesfully');
         }
     }); */

    // View
    // AllUserLogin
    var query = 'DROP View AllUserLogin;';
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('ERROR @ flush AllUserLogin' + error.stack);
            return;
        }
        else {
            console.log('View: AllUserLogin\nFlushed Succesfully');
        }
    });

    // AllAdminLogin
    var query = 'DROP View AllAdminLogin;';
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('ERROR @ flush AllAdminLogin' + error.stack);
            return;
        }
        else {
            console.log('View: AllAdminLogin\nFlushed Succesfully');
        }
    });

    // AllFollowAction
    var query = 'DROP View AllFollowAction;';
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('ERROR @ flush AllFollowAction' + error.stack);
            return;
        }
        else {
            console.log('View: AllFollowAction\nFlushed Succesfully');
        }
    });


    // AllPlaces
    var query = 'DROP View AllPlaces;';
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('ERROR @ flush AllPlaces' + error.stack);
            return;
        }
        else {
            console.log('View: AllPlaces\nFlushed Succesfully');
        }
    });


    // AllEvents
    var query = 'DROP View AllEvents;';
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('ERROR @ flush AllEvents' + error.stack);
            return;
        }
        else {
            console.log('View: AllEvents\nFlushed Succesfully');
        }
    });

    // AllBalance
    var query = 'DROP View AllBalance;';
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('ERROR @ flush AllBalance' + error.stack);
            return;
        }
        else {
            console.log('View: AllBalance\nFlushed Succesfully');
        }
    });
}

function instantiateDB() {
    // event
    var query = 'CREATE TABLE event(id INT NOT NULL AUTO_INCREMENT, name VARCHAR(60) NOT NULL, date DATE NOT NULL, type VARCHAR(30) NOT NULL, quota INT NOT NULL, available INT NOT NULL, restrictions INT NOT NULL, price INT NOT NULL, PRIMARY KEY(id));';
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('ERROR @ instantiation event ' + error.stack);
            return;
        }
        else {
            console.log('Table: event\nCreated Succesfully');
        }
    });

    // place
    query = 'CREATE TABLE place(id INT NOT NULL, name VARCHAR(60) NOT NULL, country VARCHAR(30) NOT NULL, province VARCHAR(30) NOT NULL, address VARCHAR(120) NOT NULL, PRIMARY KEY(id));';
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('ERROR @ instantiation place ' + error.stack);
            return;
        }
        else {
            console.log('Table: place\nCreated Succesfully')
        }
    });

    // is_at
    query = 'CREATE TABLE is_at(eid INT, pid INT, PRIMARY KEY(eid, pid), CONSTRAINT fk_eid FOREIGN KEY (eid) REFERENCES event(id), FOREIGN KEY (pid) REFERENCES place(id));';
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('ERROR @ instantiation is_at' + error.stack);
            return;
        }
        else {
            console.log('Table: is_at\nCreated Succesfully');
        }
    });

    // user
    query = 'CREATE TABLE user(id INT NOT NULL AUTO_INCREMENT, name VARCHAR(30), age INT NOT NULL, email VARCHAR(30), password varchar(30), balance INT NOT NULL, PRIMARY KEY(id));';
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('ERROR @ instantiation user ' + error.stack);
            return;
        }
        else {
            console.log('Table: user\nCreated Succesfully');
        }
    });

    // attends
    query = 'CREATE TABLE attends(uid INT NOT NULL, eid INT NOT NULL, PRIMARY KEY(uid, eid), CONSTRAINT fk_eid_uid FOREIGN KEY (uid) REFERENCES user(id), CONSTRAINT fk_uid_uid FOREIGN KEY (eid) REFERENCES event(id));';
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('ERROR @ instantiation attends ' + error.stack);
            return;
        }
        else {
            console.log('Table: attends\nCreated Succesfully');
        }
    });

    /*
    // organizer
    query = 'CREATE TABLE organizer(id INT NOT NULL, CONSTRAINT fk_uid_aid FOREIGN KEY (id) REFERENCES user(id));';
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('ERROR @ instantiation organizer ' + error.stack);
            return;
        }
        else {
            console.log('Table: organizer\nCreated Succesfully');
        }
    });
    */

    // follows
    query = 'CREATE TABLE follows(followedID INT NOT NULL, followerID INT NOT NULL, PRIMARY KEY(followedID, followerID), CONSTRAINT fk_fid_fid FOREIGN KEY (followedID) REFERENCES user(id), CONSTRAINT fk_fid FOREIGN KEY (followerID) REFERENCES user(id) );';
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('ERROR @ instantiation follows ' + error.stack);
            return;
        }
        else {
            console.log('Table: follows\nCreated Succesfully')
        }
    });

    // liked_events
    query = 'CREATE TABLE liked_events(uid INT NOT NULL, eid INT NOT NULL, PRIMARY KEY(uid, eid), CONSTRAINT fk_liked_events FOREIGN KEY (uid) REFERENCES user(id), FOREIGN KEY (eid) REFERENCES event(id) );';
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('ERROR @ instantiation liked_events ' + error.stack);
            return;
        }
        else {
            console.log('Table: liked_events\nCreated Succesfully');
        }
    });

    // liked_places
    query = 'CREATE TABLE liked_places(uid INT NOT NULL, pid INT NOT NULL, PRIMARY KEY(uid, pid), CONSTRAINT fk_liked_places FOREIGN KEY (uid) REFERENCES user(id), FOREIGN KEY (pid) REFERENCES place(id) );';
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('ERROR @ instantiation liked_places ' + error.stack);
            return;
        }
        else {
            console.log('Table: liked_places\nCreated Succesfully');
        }
    });

    /*
    // liked_organizators
    query = 'CREATE TABLE liked_organizators(uid INT NOT NULL, oid INT NOT NULL, PRIMARY KEY(uid, oid), CONSTRAINT fk_liked_organizators FOREIGN KEY (uid) REFERENCES user(id), FOREIGN KEY (oid) REFERENCES user(id) );'
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('ERROR @ instantiation liked_organizators ' + error.stack);
            return;
        }
        else {
            console.log('Table: liked_organizators\nCreated Succesfully');
        }
    });
    */

    // owns
    query = 'CREATE TABLE owns(uid INT NOT NULL, eid INT NOT NULL, PRIMARY KEY(uid, eid), CONSTRAINT fk_owned_events FOREIGN KEY (uid) REFERENCES user(id), FOREIGN KEY (eid) REFERENCES event(id) );'
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('ERROR @ instantiation owns ' + error.stack);
            return;
        }
        else {
            console.log('Table: owns\nCreated Succesfully');
        }
    });

    // admin
    query = 'CREATE TABLE admin(id INT NOT NULL, PRIMARY KEY(id), CONSTRAINT fk_admin_id FOREIGN KEY (id) REFERENCES user(id) );'
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('ERROR @ instantiation owns ' + error.stack);
            return;
        }
        else {
            console.log('Table: owns\nCreated Succesfully');
        }
    });

    /*
    // adds
    query = 'CREATE TABLE owns(uid INT NOT NULL, pid INT NOT NULL, PRIMARY KEY(uid, pid), CONSTRAINT fk_added_places FOREIGN KEY (uid) REFERENCES user(id), FOREIGN KEY (pid) REFERENCES place(id) );'
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('ERROR @ instantiation adds ' + error.stack);
            return;
        }
        else {
            console.log('Table: adds\nCreated Succesfully');
        }
    });
    */

    // TRIGGERS
    // after_attends_insert
    query = 'CREATE TRIGGER after_attends_insert AFTER INSERT ON attends FOR EACH ROW UPDATE event SET available = available - 1 WHERE id=NEW.eid;';
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('ERROR @ instantiation after_attends_insert ' + error.stack);
            return;
        }
        else {
            console.log('Trigger: after_attends_insert\nCreated Succesfully');
        }
    });

    /*
    // after_attends_insert
    query = 'CREATE TRIGGER before_owns_insert BEFORE INSERT ON owns FOR EACH ROW INSERT INTO owns VALUES(0, NEW.eid);';
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('ERROR @ instantiation before_owns_insert ' + error.stack);
            return;
        }
        else {
            console.log('Trigger: before_owns_insert\nCreated Succesfully');
        }
    });
    */

    // VIEWS
    // AllUserLogin
    query = 'CREATE VIEW AllUserLogin AS SELECT id, email, password FROM user;';
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('ERROR @ instantiation AllUserLogin ' + error.stack);
            return;
        }
        else {
            console.log('View: AllUserView\nCreated Succesfully');
        }
    });

    // AllAdminID
    query = 'CREATE VIEW AllAdminLogin AS SELECT admin.id, email, password FROM admin, user WHERE admin.id=user.id;';
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('ERROR @ instantiation AllUserLogin ' + error.stack);
            return;
        }
        else {
            console.log('View: AllUserView\nCreated Succesfully');
        }
    });

    // AllFollowAction
    query = 'CREATE VIEW AllFollowAction AS SELECT name FROM user, follows WHERE followedID=id;';
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('ERROR @ instantiation AllFollowAction ' + error.stack);
            return;
        }
        else {
            console.log('View: AllFollowAction\nCreated Succesfully');
        }
    });

    // AllPlaces
    query = 'CREATE VIEW AllPlaces AS SELECT name FROM place;';
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('ERROR @ instantiation AllPlaces ' + error.stack);
            return;
        }
        else {
            console.log('View: AllPlaces\nCreated Succesfully');
        }
    });

    // AllEvents
    query = 'CREATE VIEW AllEvents AS SELECT name FROM event;';
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('ERROR @ instantiation AllEvents ' + error.stack);
            return;
        }
        else {
            console.log('View: AllEvents\nCreated Succesfully');
        }
    });

    // AllBalance
    query = 'CREATE VIEW AllBalance AS SELECT id, name, balance FROM user;';
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('ERROR @ instantiation AllBalance ' + error.stack);
            return;
        }
        else {
            console.log('View: AllBalance\nCreated Succesfully');
        }
    });


}

//Running insertion query
function insertQuery(query) {
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('error inserting: ' + error.stack);
            return;
        }
        else {
            //console.log("Answer from the database is\t", results);
            //console.log("Succesfull: Insert");
        }
    });
}

//Running select query
function selectUserByID(id) {
    const query = "SELECT name, age, email, balance FROM user WHERE id=" + id + ";";
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('error selecting: ' + error.stack);
            return;
        }
        else {
            console.log("Answer from database is\t", results[0]);
            //return results[0];
        }
    });
}

function login(email, pass) {

    let query = 'SELECT id FROM user WHERE password="' + pass + '" AND email="' + email + '";';
    userId = query;
    //let succesfull = false;
    connection.query(query, function (error, results, fields) {
        if (error) {
            return false;
            throw Error('Login Error: Connection Failure');

        } else if (results.length === 0) {
            //console.log('Answer from database is\t', results);
            return false;
            throw Error('Login Error: Wrong Credentials');

        } else {
            //return true;

            console.log('Answer from database is\t', results);
            console.log("Successful Login");
            succesfullLogin = true;
            console.log("succesfulllk is 0", succesfullLogin);
        }
    }
    );
    //console.log(succesfullLogin);
    //return succesfull;
}

function register(name, age, email, pass) {
    //"INSERT INTO user VALUES(9,'Mary',19,'mary@email','mary123',10);"
    // "INSERT INTO user(name, age, email,password,balance) VALUES('Ali',22,'ali@email','pass123',1000);"

    query = "INSERT INTO user(name, age, email,password,balance) VALUES('" + name + "'," + age + ",'" + email + "','" + pass + "',0);";
    console.log(query);
    connection.query(query, function (error, results, fields) {
        if (error) {
            return;
            throw Error('Register Error: Connection Failure');
        }
        else {
            succesfullRegister = true;

            console.log('Answer from database is\t', results);
            console.log("Successful Register");
        }
    });
}

function addBalance(id, balanceToAdd) {
    const query = "UPDATE user SET balance = balance +" + balanceToAdd + " WHERE id=" + id + ";";
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('error selecting: ' + error.stack);
            return;
        }
        else {
            console.log("Answer from database is\t", results[0]);
            //return results[0];
        }
    });
}

function removeBalance(id, balanceToRemove) {
    const updateQuery = "UPDATE user SET balance = balance -" + balanceToRemove + " WHERE id=" + id + " AND balance >" + balanceToRemove + ";";
    connection.query(updateQuery, function (error, results, fields) {
        if (error) {
            console.error('error in transcation: ' + error.stack);
            return;
        }
        else {
            console.log("Answer from database is\t", results[0]);
        }
    });
}

function getView(viewName) {
    const viewQuery = "SELECT * FROM "+balanceToRemove+";";
    connection.query(viewQuery, function (error, results, fields) {
        if (error) {
            console.error('error in transcation: ' + error.stack);
            return;
        }
        else {
            console.log("Answer from database is\t", results[0]);
        }
    });
}

//Ending connection
function endDB() {
    connection.end();
}

connectDB();
flushDB();
instantiateDB();
populateDB();
//register("ali", 17, "email@email", "pass123");
//login("email@email", "pass123");
selectUserByID(2);
//addBalance(2, 35);
//selectUserByID(2);
//removeBalance(2, 35);
//selectUserByID(2);

//endDB();

// Server
app.listen(5000, () => console.log("Server listening at port 5000"));

// REQUEST BODY ana kullanıcının id verir
// Return profile of user
app.get("/profile", (req, res) => {
    const id = 3; //req.body.id;
    const query = "SELECT name, age, email, balance FROM user WHERE id=" + id + ";";
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('error selecting: ' + error.stack);
            return;
        }
        else {
            res.send(results[0]);
            console.log("Answer from database is\t", results[0]);
            //return results[0];
        }
    });
});

// /profile/3 3 idli kullanıcıyı döner
// /profile/7 7 idli kullanıcıyı döner
app.get("/profile/:id", (req, res) => {
    //const id = 3; //req.body.id;
    //console.log(req.params.id);
    const query = "SELECT name, age, email, balance FROM user WHERE id=" + req.params.id + ";";
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('error selecting: ' + error.stack);
            return;
        }
        else {
            res.send(results[0]);
            console.log("Answer from database is\t", results[0]);
            //return results[0];
        }
    });
});

// Return all people
app.get("/people", (req, res) => {
    var query = "SELECT * FROM user;";
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('error selecting: ' + error.stack);
            return;
        }
        else {
            //console.log("Answer from database is\t", results[0]);
            res.send(results);
        }
    });
});

// Return all Admins
app.get("/admins", (req, res) => {
    var query = "SELECT * FROM admin;";
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('error selecting: ' + error.stack);
            return;
        }
        else {
            //console.log("Answer from database is\t", results[0]);
            res.send(results);
        }
    });
});

// Return all events
app.get("/events", (req, res) => {
    var query = "SELECT * FROM event;";
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('error selecting: ' + error.stack);
            return;
        }
        else {
            //console.log("Answer from database is\t", results[0]);
            res.send(results);
        }
    });
});

// Return All organizators
app.get("/organizators", (req, res) => {
    var query = "SELECT DISTINCT uid FROM owns;";
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('error selecting: ' + error.stack);
            return;
        }
        else {
            //console.log("Answer from database is\t", results[0]);
            res.send(results);
        }
    });
});

// Return All places
app.get("/places", cors(), (req, res) => {
    var query = "SELECT * FROM place;";
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('error selecting: ' + error.stack);
            return;
        }
        else {
            //console.log("Answer from database is\t", results[0]);
            res.send(results);
        }
    });
});

// REQUEST BODY ana kullanıcının id verir
// Return followed people by logged in account
app.get("/following", (req, res) => {
    const id = 3; //req.body.id;
    const query = "SELECT followedID FROM follows WHERE followerID=" + id + ";";
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('error following: ' + error.stack);
            return;
        }
        else {
            res.send(results[0]);
            console.log("Answer from database is\t", results[0]);
            //return results[0];
        }
    });
});

// REQUEST BODY ana kullanıcının id verir
// Return followers of the account logged in
app.get("/followers", (req, res) => {
    const id = 3; //req.body.id;
    const query = "SELECT followerID FROM follows WHERE followedID=" + id + ";";
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('error followers: ' + error.stack);
            return;
        }
        else {
            res.send(results[0]);
            console.log("Answer from database is\t", results[0]);
            //return results[0];
        }
    });
});

// İstenilen kullanıcının favorite eventlerir
app.get("/favorite/events/:id", (req, res) => {
    //const id =3; //req.body.id;
    const query = "SELECT name, date, type, quota, available, restrictions, price FROM liked_events, event WHERE uid=" + req.params.id + " AND eid=event.id;";
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('error followers: ' + error.stack);
            return;
        }
        else {
            res.send(results[0]);
            console.log("Answer from database is\t", results[0]);
            //return results[0];
        }
    });
});

// REQUEST BODY ana kullanıcının id verir
// Return favorite events of logged in account
app.get("/favorite/events", (req, res) => {
    const id = 3; //req.body.id;
    const query = "SELECT name, date, type, quota, available, restrictions, price FROM liked_events, event WHERE uid=" + id + " AND eid=event.id;";
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('error followers: ' + error.stack);
            return;
        }
        else {
            res.send(results[0]);
            console.log("Answer from database is\t", results[0]);
            //return results[0];
        }
    });
});

// İstenilen kullanıcının favorite placeleri
app.get("/favorite/places/:id", (req, res) => {
    const query = "SELECT name, country, province, address FROM liked_places, place WHERE uid=" + req.params.id + " AND pid=place.id;";
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('error favorite places: ' + error.stack);
            return;
        }
        else {
            res.send(results[0]);
            console.log("Answer from database is\t", results[0]);
            //return results[0];
        }
    });
});

// REQUEST BODY ana kullanıcının id verir
// Return favorite places of logged in account
app.get("/favorite/places", (req, res) => {
    const id = 3; //req.body.id;
    const query = "SELECT name, country, province, address FROM liked_places, place WHERE uid=" + id + " AND pid=place.id;";
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('error favorite places: ' + error.stack);
            return;
        }
        else {
            res.send(results[0]);
            console.log("Answer from database is\t", results[0]);
            //return results[0];
        }
    });
});

// Main Directory
app.get("/", (req, res) => {
    res.send("Home");
});

/*app.post("/places", (req, res) => {
    console.log(req.body);
    res.send(JSON.stringify(req.body));
});*/
app.post("/login", (req, res) => {
    console.log(req.body.email, req.body.password);

    login(req.body.email, req.body.password);

    console.log("succesfull iss: ", succesfullLogin);
    res.send({ succesfullLogin: succesfullLogin, id: userId });
});

app.post("/register", (req, res) => {
    console.log(req.body.name, req.body.age, req.body.email, req.body.password);
    register(req.body.name, req.body.age, req.body.email, req.body.password);
    res.send(succesfullRegister);

});
/*function login(email, pass) {
    let query = 'SELECT id FROM user WHERE password="' + pass + '" AND email="' + email + '";';
    connection.query(query, function (error, results, fields) {
        if (error) {
            //console.error("error logging in: " + error.stack);
            throw Error('Login Error: Connection Failure');
            return false;
        }
        else if (results.length === 0) {
            //console.log('Answer from database is\t', results);
            throw Error('Login Error: Wrong Credentials');
        }
        else {
            console.log('Answer from database is\t', results);
            console.log("Successful Login");
        }
    });
}*/

// Kankam ben silmedim
// Sen bakınca silersin
// Alttaki ikiliyi
/*
app.get("/eventsList", (req, res) => {
    console.log(req.body);
    let a = ["football ", "basketball ", "piyasaYapmaca "];
    res.send(a);
});*/



// Add otherwise forwarding
app.get('*', (req, res, next) => {
    res.send("Error");
});

