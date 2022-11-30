<script>
function process(post) {
    let username = post['username'];
    let password = post['password'];

    let db_connection = project.connect('admin', 'password', 'localhost');

    let user = project.select(db_connection, username);

    hash = project.hash(password+user['salt']);
    for (let i = 0; i < 10; i++) {
        hash = project.hash(hash + user['salt']);
    }

    if (hash == user['password']) {
        return true;
    } else {
        return false;
    }
}
</script>
