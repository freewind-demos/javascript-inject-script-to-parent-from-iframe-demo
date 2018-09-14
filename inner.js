$('#trigger').click(function () {
    const script = $('<script>')
        .attr('type', 'text/javascript')
        .text(`
        document.getElementById('main').innerText = 'Hello from iframe';
        `)
    $(window.parent.document.body).append(script)
})
