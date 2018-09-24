suite('Тест страницы about', function(){
    test("Старница должна содержать ссылку на страницу контактов", function(){
        assert($('a[href="/contact"]'.length));
    });
});
