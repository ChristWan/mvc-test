import './function4.css'
import $ from 'jquery'

const $circle = $('#function4 #circle')

$circle.on('mouseenter', () => {
  $circle.addClass('active')
}).on('mouseleave', () => {
  $circle.removeClass('active')
})