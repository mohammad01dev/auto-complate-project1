// word array;

let searchBar = document.querySelector('.searchBar')
let auto_box = document.querySelector('.autoWord')

let wordItem = [
    'how to learn js',
    'how to learn css',
    'how to learn bottostrap',
    'how to learn jQuery',
    'how to learn react',
    'how to learn html',
    'design template',
    'template site',
    'basketboll',
]

searchBar.addEventListener('keyup', function () {

    let searchBarValue = searchBar.value;

    if (searchBar) {
        auto_box.style.display = 'inline-block';

        let filteredSearch = wordItem.filter(word => {
            return word.startsWith(searchBarValue);
        })

        suggestionWord(filteredSearch)

    } else {
        auto_box.style.display = 'none'
    }
})


function suggestionWord(wordItem) {
    let stringVal = wordItem.map((word) => {
        return '<li>' + word + '</li>'
    })

    let customListItem

    if (!stringVal.length) {
        customListItem = '<li>' + searchBar.value + '</li>'
    } else {
        customListItem = stringVal.join('');
    }

    auto_box.innerHTML = customListItem

    let liListItem = document.querySelectorAll('li');

    liListItem.forEach(li => {
        li.addEventListener('click', function (event) {
            searchBar.value = event.target.innerHTML;
            auto_box.style.display = 'none'
        })
    })
}