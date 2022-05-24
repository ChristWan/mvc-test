import './function3.css'
import $ from 'jquery'

const $square = $('#function3 #square')

$square.on('click', () => {
  $square.toggleClass('active')
})