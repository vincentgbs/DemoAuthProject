function editor(parent) {
    document.querySelector(parent).innerHTML = `
    <div class="left_column">
        <h3>Enter your code below:</h3>
        <div class="code_editor" contenteditable>Enter html here</div>
        <button class="run_button">Run</button>
    </div>
    <div class="right_column">
        <h3>View your results:</h3>
        <iframe class="runtime_environment"></iframe>
    </div>`;

    document.querySelector(parent + ' .run_button').addEventListener("click", function(){
        var code_editor = document.querySelector(parent + ' .code_editor')
        var runtime_environment = document.querySelector(parent + ' .runtime_environment')
        runtime_environment.src = "data:text/html;charset=utf-8," + encodeURI(code_editor.textContent)
    });
}

function create_editor(divId, parent) {
    child = document.createElement('div');
    child.className = "editor_body";
    child.setAttribute("id", divId);
    document.querySelector(parent).appendChild(child)
    editor('#'+divId);
}

document.addEventListener('DOMContentLoaded', function(event) {
  create_editor('first_row', '#root');
  create_editor('second_row', '#root');
  create_editor('third_row', '#root');
});
