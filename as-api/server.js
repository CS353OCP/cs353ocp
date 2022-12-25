// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");
var mysql = require('mysql'); //Library to connect MySql database


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
    insertQuery("INSERT INTO user VALUES(1,'Ali',22,'ali@email','pass123');");
    insertQuery("INSERT INTO user VALUES(2,'Ece',23,'ece@email','123456');");
    insertQuery("INSERT INTO user VALUES(3,'Fatma',17,'fatma@email','password');");
    insertQuery("INSERT INTO user VALUES(4,'John',22,'john@email','password1');");
    insertQuery("INSERT INTO user VALUES(5,'Betty',33,'betty@email','password123');");
    insertQuery("INSERT INTO user VALUES(6,'Clark',56,'clark@email','pass1');");
    insertQuery("INSERT INTO user VALUES(7,'Kirk',9,'kirk@email','123123');");
    insertQuery("INSERT INTO user VALUES(8,'Kemal',17,'kemal@email','kemapass');");
    insertQuery("INSERT INTO user VALUES(9,'Mary',19,'mary@email','mary123');");

    // event
    insertQuery("INSERT INTO event VALUES(1,'Opening Party',07/07/2022,'Party',30,30,0);");
    insertQuery("INSERT INTO event VALUES(2,'Xmas Party',25/12/2022,'Party',47,47,0);");
    insertQuery("INSERT INTO event VALUES(3,'Aga B Concert',06/12/2022,'Concert',10,10,1);");
    insertQuery("INSERT INTO event VALUES(4,'Reading Club Social',22/7/2022,'Gathering',30,30,0);");
    insertQuery("INSERT INTO event VALUES(5,'Couples Night',12/12/2022,'Social',60,60,0);");
    insertQuery("INSERT INTO event VALUES(6,'Karaoke Night',11/12/2022,'Social',60,60,0);");
    insertQuery("INSERT INTO event VALUES(7,'Table Games',10/12/2022,'Social',60,60,0);");
    insertQuery("INSERT INTO event VALUES(8,'Open Air Party',09/12/2022,'Party',70,70,0);");
    insertQuery("INSERT INTO event VALUES(9,'Date Night',08/12/2022,'Social',10,10,1);");
    insertQuery("INSERT INTO event VALUES(10,'Vampire Theme Party',07/12/2022,'Party',10,10,2);");
    insertQuery("INSERT INTO event VALUES(11,'Live DJ',06/12/2022,'Party',10,10,1);");

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

    // organizer
    //insertQuery("INSERT INTO place VALUES(5,11);");

}

function flushDB() {
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
    var query = 'DROP TABLE follows;';
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('ERROR @ flush follows' + error.stack);
            return;
        }
        else {
            console.log('Table: follows\nFlushed Succesfully');
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
    var query = 'DROP TABLE is_at;';
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
    var query = 'DROP TABLE event;';
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
}

function instantiateDB() {
    // event
    var query = 'CREATE TABLE event(id INT NOT NULL, name VARCHAR(60) NOT NULL, date DATE NOT NULL, type VARCHAR(30) NOT NULL, quota INT NOT NULL, available INT NOT NULL, restrictions INT NOT NULL, PRIMARY KEY(id));';
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
    query = 'CREATE TABLE user(id INT NOT NULL, name VARCHAR(30), age INT NOT NULL, email VARCHAR(30), password varchar(30), PRIMARY KEY(id));';
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
function selectQuery(query) {
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
    connection.query(query, function (error, results, fields) {
        if (error) {
            //console.error("error logging in: " + error.stack);
            throw Error('Login Error: Connection Failure');
        }
        else if (results.length === 0) {
            console.log('Answer from database is\t', results);
            //console.log("Empty");
            throw Error('Login Error: Wrong Credentials');
        }
        else {
            console.log('Answer from database is\t', results);
            //console.log("Successful Login");
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
//endDB();

// DB Related part ends here

// Server
app.listen(5000, () => console.log("Server listening at port 5000"));

// Routing

// Get Routes

// Return profile
app.get("/profile", (req, res) => {
    res.send("profile");
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

// NOT DONE YET
// Return all Admins
app.get("/admins", (req, res) => {
    res.send("Admins");
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

// NOT DONE YET
// Return All organizators
app.get("/organizators", (req, res) => {
    res.send("All organizators");
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

// NOT DONE YET
// Return followed people by logged in account
app.get("/following", (req, res) => {
    res.send("Following");
});

// NOT DONE YET
// Return followers of the account logged in
app.get("/followers", (req, res) => {
    res.send("Followers");
});

// NOT DONE YET
// Return Options to redirect user to events or places
app.get("/favorite", (req, res) => {
    res.send("favorite events");
})

// NOT DONE YET
// Return favorite events of logged in account
app.get("/favorite/events", (req, res) => {
    res.send("favorite events");
});

// NOT DONE YET
// Return favorite places of logged in account
app.get("/favorite/places", (req, res) => {
    res.send("favorite places");
});

// Main Directory
app.get("/", (req, res) => {
    res.send("Home");
});

app.post("/places", (req, res) => {
    console.log(req.body);
    res.send(JSON.stringify(req.body));
});

// Kankam ben silmedim
// Sen bakınca silersin
// Alttaki ikiliyi
app.get("/eventsList", (req, res) => {
    console.log(req.body);
    let a = ["football ", "basketball ", "piyasaYapmaca "];
    res.send(a);
});

app.get("/nearEventsList", (req, res) => {
    console.log(req.body);
    let a = ["piyasaYapmaca "];
    res.send(a);
});
// Add otherwise forwarding
app.get('*', (req, res, next) => {
    res.send("Error");
});

