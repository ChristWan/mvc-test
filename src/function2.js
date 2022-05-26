import './function2.css'
import $ from 'jquery'

const $tabBar = $('#function2 .tab-bar')
const $tabContent = $('#function2 .tab-content')

$tabBar.on('click', 'li', e => {
    const $li = $(e.currentTarget)
    $li
        .addClass('selected')
        .siblings()
        .removeClass('selected')
    const index = $li.index()
    $tabContent
        .children()
        .eq(index)
        .addClass('active')
        .siblings()
        .removeClass('active')

    localStorage.setItem('tabIndex', index)
})

if (localStorage.getItem('tabIndex') === '1') {
    $tabBar.children().eq(1).trigger('click')
} else {
    $tabBar.children().eq(0).trigger('click')
}

