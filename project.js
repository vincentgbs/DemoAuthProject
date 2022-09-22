const POST = {'username': 'student', 'password': 'password'}
const project = {
    // Note: DO NOT use this style of code outside of this project. These
    // functions are provided only to give students a framework to work within.
    connect: function(dbuser, dbpass, dbhost) {
        var database;
        if (dbuser == 'admin' && dbpass == 'password' && dbhost == 'localhost') {
            database = 'DATABASE_CONNECTION_OBJECT'
        } else {
            database = 'INVALID_CONNECTION'
            alert(database);
        }
        return database
    },
    select: function(connection, username) {
        if (connection == 'DATABASE_CONNECTION_OBJECT') {
            return {'username': 'student', 'password': 'cGFzc3dvcmRBQkNERTEyMzQ1', 'salt': 'ABCDE12345'}
        } else {
            return 'INVALID_CONNECTION'
        }
    },
    // Note: these are not real hash function, they are only used for the purpose
    // of this lesson. DO NOT use this code outside of this project.
    hash: function(key) {
        return window.btoa(key);
    }
}
