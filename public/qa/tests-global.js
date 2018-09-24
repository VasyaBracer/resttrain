suite('Global Tests', function(){
    test('Страница имеет допустимый заголовок', function(){
        assert(document.title && document.title.match(/\S/) && 
        document.title.toUpperCase() !== 'TODO');
    });
});