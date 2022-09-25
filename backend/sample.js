var username = POST['username']
var password = POST['password']

var db_connection = project.connect('admin', 'password', 'localhost')

var user = project.select(db_connection, username)

hash = project.hash(password+user['salt'])
for (let i = 0; i < 10; i++) {
    hash = project.hash(hash + user['salt'])
}

if (hash == user['password']) {
    return true;
} else {
    return false;
}
