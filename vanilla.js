function editor(parent, instructions, title, code_wrapper) {
    document.querySelector(parent).innerHTML = `
    <h2 class="title">`+title+`</h2>
    <div class="left_column">
        <h3>Enter your code here:</h3>
        <div class="code_editor" contenteditable>`+instructions+`</div>
        <button class="run_button">Run</button>
    </div>
    <div class="right_column">
        <h3>Preview your code here:</h3>
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
        var submission = document.querySelector(parent + ' .title').textContent
        var request = {"submission": submission, "code": code}
        if (typeof frontend_grader !== 'undefined') {
            frontend_grader.check(request, document.querySelector(parent));
        } else { // backend_grader
            console.log("This function should submit student code to the backend for grading. The demo has no backend.");
            document.querySelector(parent).style.display = 'none';
        }
    });
} // function editor(parent, instructions, title, wrapper=false)

function create_editor(divId, parent, instructions, title, code_wrapper='') {
    child = document.createElement('div');
    child.className = "editor_body";
    child.setAttribute("id", divId);
    document.querySelector(parent).appendChild(child);
    editor('#'+divId, instructions, title, code_wrapper);
}
