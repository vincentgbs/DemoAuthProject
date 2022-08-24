function editor(parent, type) {
    document.querySelector(parent).innerHTML = `
    <div class="left_column">
        <h3>Enter your JavaScript below:</h3>
        <div class="code_editor" contenteditable>alert("Hello World");</div>
        <button class="run_button">Run</button>
    </div>
    <div class="right_column">
        <h3>Check your results:</h3>
        <iframe class="runtime_environment"></iframe>
    </div>`;

    document.querySelector(parent + ' .run_button').addEventListener("click", function(){
        var code_editor = document.querySelector(parent + ' .code_editor')

        var runtime_environment = document.querySelector(parent + ' .runtime_environment')
        var code = "<"+type+">" + code_editor.textContent + "</"+type+">"
        runtime_environment.src = "data:text/html;charset=utf-8," + encodeURI(code)
    });
}

function create_editor(divId, parent, type='script') {
    child = document.createElement('div');
    child.setAttribute("id", divId);
    document.querySelector(parent).appendChild(child)
    editor('#'+divId, type);
}

document.addEventListener('DOMContentLoaded', function(event) {
    create_editor('first_row', '#root');
});
