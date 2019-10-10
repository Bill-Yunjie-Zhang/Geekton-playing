const clear = () => {
    $('#wrapper').remove()
    $('#content').append($("<div id='wrapper'></div>"))
    $('#index').remove()
    $('#side-menu').append("<div id='index'></div>")
}

const addFooter = () => {
    $('#wrapper').append($('<footer><p>&copy; 2019-2020 Forum&middot;Geekton</p></footer>'))
}