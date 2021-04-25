
window.onload = () =>
{
    const converter = new showdown.Converter();
    const pad = document.getElementById('pad');
    const markdowArea = document.getElementById('markdown');

    const convertTextAreaToMarkdown = () =>
    {
        const markdownText = pad.value;
        html = converter.makeHtml(markdownText);
        markdowArea.innerHTML = html;
    };

    pad.addEventListener('input', convertTextAreaToMarkdown)

    convertTextAreaToMarkdown();
};