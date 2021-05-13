$(document).ready(() => {

    let mdCode = [
        "# Welcome to my Markdown Previewer!", "\n## This is a sub-heading...",
        "\n### And here\'s some other cool stuff:", "\nHere\'s some code, `<div></div>`, between 2 backticks.\n```",
        "\n// this is multi-line code:",
        "\n\nfunction anotherExample(firstLine, lastLine) {",
        "\n\tif (firstLine == '```' && lastLine == '```') {",
        "\n\t\treturn multiLineCode;",
        "\n\t}\n}\n```",
        "\n\nYou can also make text **bold**... whoa!",
        "\nor _italic_.",
        "\nor... wait for it... **_both!_**",
        "\nAnd feel free to go crazy ~~crossing stuff out~~.",
        "\n\nThere's also [links](https://www.freecodecamp.com), and",
        "\n> Block Quotes!",
        "\n\nAnd if you want to get really crazy, even tables:",
        "\n\nWild Header | Crazy Header | Another Header?",
        "\n------------ | ------------- | -------------",
        "\nYour content can | be here, and it | can be here....",
        "\nAnd here. | Okay. | I think we get it.",
        "\n\n- And of course there are lists",
        "\n\t- Some are bulleted.",
        "\n\t\t- With different indentation levels.",
        "\n\t\t\t- That look like this.",
        "\n\n\n1. And there are numbererd lists too.",
        "\n1. Use just 1s if you want!",
        "\n1. And last but not least, let's not forget embedded images:",
        "\n\n![jQuery logo w/ Text](https://www.iconninja.com/files/662/214/476/logo-jquery-icon.svg)"
    ].join("");

    $("#editor").text(mdCode);
    $("#preview").html(marked(mdCode));
    $("#editor").css('font-family', 'monospace');
    $("#editor").css('font-size', '14px');
    
    $("#editor").on('input', () => {
        marked.setOptions({
            gfm: true,
            breaks: true
        });
        $("#preview").html(marked($("#editor")[0].value));
    });
});