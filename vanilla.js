function editor(root) {
    document.querySelector(root).innerHTML = `
    <div class="left_column">
        <h3>Enter your JavaScript below:</h3>
        <div class="code_editor" contenteditable>alert("Hello World");</div>
        <button class="run_button">Run</button>
    </div>
    <div class="right_column">
        <h3>Check your results:</h3>
        <iframe class="runtime_environment"></iframe>
    </div>`;

    document.querySelector(root + ' .run_button').addEventListener("click", function(){
        var code_editor = document.querySelector(root + ' .code_editor')

        var runtime_environment = document.querySelector(root + ' .runtime_environment')
        var code = "<script>" + code_editor.textContent + "</script>"
        runtime_environment.src = "data:text/html;charset=utf-8," + encodeURI(code)
    });
}

document.addEventListener('DOMContentLoaded', function(event) {
    editor('#root');
});
