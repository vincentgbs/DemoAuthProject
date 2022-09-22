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
    console.debug(parent)
    document.querySelector(parent).appendChild(child);
    editor('#'+divId, instructions);
}

instructions1 = 'Create a basic login form based on the elements you learned about in the previous lessons. <br>1. Make sure to include inputs named "username" and "password". <br>2. Be sure that the password is not visible when the user is typing it. <br>3. Include a button that submits the user input to the backend. <br>4. The form does not need to submit to a specific url, you can use "#" as the destination for this example.'
instructions2 = 'Now let\'s simulate a simple backend that could process the submitted login form and grant access only if the passwords match. For this exercise, we\'ll just use Javascript to walk through the process of processing the data. <br>1. First we must receive the data from the user and store it in a variable. For this project, we\'ll receive those values from a "POST" variable. <br>2. Then we must check the database for the username and compare the passwords. To do this, we must connect to the database using the provided project class documentation below. <br>3. For this project, the database user is `admin`, the password is `password`, and the host is `localhost`. <br>4. Once you have connected to the database, you must get the user information that it stored there. Normally this could be done through a database query something like: "SELECT `username`, `password`, `salt` FROM `users` WHERE `username`=\'student\';" but in this case, you can just use the project\'s select function to get that information. <br>5. After getting the user infomation, you must hash the input password and the database salt in order to check them against the database password. This is done so that a user\'s plaintext password is never stored in the database. <br>6. Return true if the passwords match and false if they do not. For this project the sample user is "student" and the same password is "password".'

const POST = {'username': 'student', 'password': 'password'}
const project = {
    // Note: DO NOT use this style of code outside of this project. These
    // functions are provided only to give students a framework to work within.
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
            return {'username': 'student', 'password': 'cGFzc3dvcmRBQkNERTEyMzQ1', 'salt': 'ABCDE12345'}
        } else {
            return 'INVALID CONNECTION'
        }
    },
    // Note: these are not real hash function, they are only used for the purpose of this lesson. DO NOT use this code outside of this project.
    hash: function(key) {
        return window.btoa(key);
    }
}

document.addEventListener('DOMContentLoaded', function(event) {
  create_editor('login_form', '#root', instructions1);
  create_editor('backend_process', '#root', instructions2);
});
