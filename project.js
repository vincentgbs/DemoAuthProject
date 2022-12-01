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
            return {'username': 'student', 'password': 'Vm0wd2QyVkhVWGhUV0doWFYwZG9WRll3WkRSV1JsbDNXa2M1VjFac2JETlhhMUpUVjBaS2RHVkVRbUZXVmxsM1ZtcEtTMUl5U2tWVWJIQlhWbXh3VVZkV1ZtRlRNazE0VjI1R1ZXSkhVazlaVjNoaFpWWmtWMXBFVWxwV01VcEpWbTEwYzJGc1NuUlZhemxhWWxob1NGUlVSbUZqTVhCSlkwZDRVMkpIZHpCV01uUnZWREpHVjFOWVpGaGlSa3BZV1d4b2IxWXhjRlpYYlVacVRWWmFlVmRyV25kV01ERkZWbGhrVjJFeVVYZFpWRVpyVTBaT2NscEhjRlJTVlhCWVYxWmtNR1F5VW5OVmJsSnNVakJhY1ZsclpEQk9iR3hXVjIxMFZXSlZXVEpWYkZKRFZqRmFSbUo2UWxwbGEzQklWV3BHVDJSV1RuUmpSazVwVmpKb1dsWXhaREJoTWtsNFUydGtWMkpzU25OVmFrSmhWMVpXY1ZKcmRGUlNiVko1VmpJeE1HRkdXbk5qU0hCYVRVWmFkbFpxUmt0ak1rNUpWMnhhYUdFeGNHOVdiWEJIWVRKT2MxcElUbFppVjNoVVZteG9RMWRzV25STlNHaFBVbXRzTTFSVmFHOVdiR1JJWVVac1dsWkZjRlJXTUZwelkyeGFWVkp0ZUZkaVNFSmFWMnhXVms1V1duSk5WbVJxVTBoQ1dGUldXa3RTUmxweFVtdDBhMUpzV25oV1IzaHJWVEF3ZDA1RVFsZFdla1kyVkZaYVdtVkdVblZVYkU1cFVqRktWVlpYZUdGa01VcFhWMjVPV0dKWVVrOVZiWGhIVGtaVmVXVkhkRmRTTUhCSVZqSjRVMVl3TVVoVlZFSlhVa1ZhTTFZd1pGZFNiR1IwWlVaT2FFMVlRbGxXYkZKTFRVWlZlRlpZYUZSaVIxSllXVmQ0UzFac1duRlVhMDVWVFZaS1YxWnNVa2RXYlVwR1UyeGFWVlpzV2t4V1Z6RkdaREExVmxkc1dtbFNhM0JJVjJ4YVZtVkZOWE5XYkZaVFlUQndVMWxVUVRGU2JGWnpWV3RhYkZaVVJUSldWbEpIVVd4R2NsUnJWbE5XUlZZMVZGaHdVazFWUmtOUk1GSkdUVlJKZWs1RVZUMUJRa05FUlRFeU16UTFBQkNERTEyMzQ1', 'salt': 'ABCDE12345'}
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

frontend_grader = {
    check: function(request, container) {
        code = request['code']
        submission = request['submission']
        if (submission == 'Create Form (Frontend)') {
            return this.html_grader(code, container);
        } else if (submission == 'Create Login (Backend)') {
            return this.js_grader(code, container);
        } else {
            console.log('Invalid submission');
        }
    },
    html_grader: function(code, container) {
        var submission = document.createElement('html');
        submission.innerHTML = code;
        inputs = submission.getElementsByTagName('input');
        check_for = {
            'username': 'text',
            'password': 'password'
        }
        check = 0
        for (key in inputs) {
            input = inputs[key]
            if (input.name in check_for) {
                if (input.type == check_for[input.name]) {
                    check += 1
                }
            }
        }
        if (check >= 2) {
            alert('Good Job!');
            container.style.display = 'none';
            return true;
        } else {
            alert('Try Again.');
            return false;
        }
    },
    js_grader: async function(code, container) {
        var submission = document.createElement('html');
        submission.innerHTML = code;
        code = code.substr(8, code.length-(8+9));
        eval(code);
        setTimeout(function() {
          if (typeof process !== 'undefined') {
              check_true = process({'username': 'student', 'password': 'password'})
              check_false = process({'username': 'wrong', 'password': 'wrong'})
              if (check_true && !check_false) {
                  alert('Good Job!');
                  container.style.display = 'none';
                  return true;
              }
              alert('Try Again.');
              return false;
          } else {
              alert('You must define a `process` function');
          }
          return false;
        }, 999);
    }
}



instructions1 = 'Create a basic login form based on the elements you learned about in the previous lessons. <br>1. Make sure to include inputs named "username" and "password". <br>2. Be sure that the password is not visible when the user is typing it. <br>3. Include a button that submits the user input to the backend. <br>4. You should NOT include the &lt;form&gt; tags, only create the elements within the form itself'
instructions2 = 'Now let\'s simulate a simple backend function that can process the submitted login form and grant access only if the passwords match. For this exercise, we\'ll use Javascript to walk through the process of processing the data. Let\'s call our function `process`: function process(post){}. <br>1. First we must receive the data from the user and store it in a variable. For this project, we\'ll receive those values from a the post parameter of the process function. <br>2. Then we must check the database for the username and compare the passwords. To do this, we must first connect to the database using the provided project class documentation below. <br>3. For this project, the database user is `admin`, the password is `password`, and the host is `localhost`. <br>4. Once you have connected to the database, you must get the user information that it stored there. Normally this could be done through a database query something like: "SELECT `username`, `password`, `salt` FROM `users` WHERE `username`=\'student\';" but in this case, you can just use the project\'s select function to get that information. <br>5. After getting the user information, you must hash the input password and the database salt in order to check them against the database password. Hash the results with the salt appended to the end 10 times `for (let i = 0; i < 10; i++)`. This is done so that a user\'s plaintext password is never stored in the database. <br>6. Return true if the passwords match and false if they do not. For this project the sample user is "student" and the same password is "password". <br>7. You MUST include the enclosing &lt;script&gt; tags for this sections.'

document.addEventListener('DOMContentLoaded', function(event) {
  create_editor('login_form', '#root', instructions1, 'Create Form (Frontend)');
  create_editor('backend_process', '#root', instructions2, 'Create Login (Backend)');
});
