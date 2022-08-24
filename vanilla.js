function editor(parent, instructions) {
    document.querySelector(parent).innerHTML = `
    <div class="left_column">
        <h3>Enter your code below:</h3>
        <div class="code_editor" contenteditable>`+instructions+`</div>
        <button class="run_button">Run</button>
    </div>
    <div class="right_column">
        <h3>Check your results:</h3>
        <iframe class="runtime_environment"></iframe>
        <button class="submit_button">Submit</button>
    </div>`;

    document.querySelector(parent + ' .run_button').addEventListener("click", function(){
        var code_editor = document.querySelector(parent + ' .code_editor')
        var runtime_environment = document.querySelector(parent + ' .runtime_environment')
        runtime_environment.src = "data:text/html;charset=utf-8," + encodeURI(code_editor.textContent)
    });

    document.querySelector(parent + ' .submit_button').addEventListener("click", function(){
        var code = document.querySelector(parent + ' .code_editor').textContent
        var request = {"submission":"html/javascript", "code": code}
        console.log("Submits the student code to the backend. This demo has no backend, although a sample python function is provided in the repo");
        document.querySelector(parent).style.display = 'none';
    });
}

function create_editor(divId, parent, instructions) {
    child = document.createElement('div');
    child.className = "editor_body";
    child.setAttribute("id", divId);
    document.querySelector(parent).appendChild(child)
    editor('#'+divId, instructions);
}

function create_documentation(parent) {
    child = document.createElement('div');
    child.setAttribute("id", 'documentation');
    child.innerHTML = `<h3>Documentation</h3>`
    document.querySelector(parent).appendChild(child)
}

instructions1 = 'Create a basic login form based on the elements you learned about in the previous lessons. <br>1. Make sure to include inputs named "username" and "password". <br>2. Be sure that the password is not visible when the user is typing it. <br>3. Include a button that submits the user input to the backend.'
instructions2 = 'Now let\'s simulate a simple backend that could process a user\'s login information. For this exercise, we\'ll just use Javascript to walk through the process of processing the data. <br>1. First we must receive the data from the user and store it in variables. <br>2. Then we must check the database for the username and compare the passwords. To do this, we must connect to the database using the provided project class <a href="#documentation">documentation</a>. <br>3. For this project, the database user is `admin`, the password is `password`, and the host is `localhost`.'

const project = {
    // Note: these are not real hash function, they are only used for the purpose of this lesson. DO NOT use this code outside of this project.
    connect: function(dbuser, dbpass, dbhost) {
        var database;
        if (dbuser == 'admin' && dbpass == 'password' && dbhost == 'localhost') {
            database = 'EXAMPLE DATABASE CONNECTION OBJECT'
        } else {
            database = 'INVALID CONNECTION'
            alert(database);
        }
        return database
    },
    select: function(connection, username) {
        if (connection == 'EXAMPLE DATABASE CONNECTION OBJECT') {
            return {'username': username, 'password': '', 'salt': ''}
        }
    },
    hash: function(key) {
        return window.btoa(key);
    }
}

document.addEventListener('DOMContentLoaded', function(event) {
  create_editor('first_row', '#root', instructions1);
  create_editor('second_row', '#root', instructions2);
  create_documentation('#root')
});
