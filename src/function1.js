import './function1.css'
import $ from 'jquery'

const $number = $('#function1 #number')
const $add = $('#function1 #add1')
const $minus = $('#function1 #minus1')
const $mul = $('#function1 #multiply2')
const $divide = $('#function1 #divide2')
let n = parseInt(localStorage.getItem('n') || 100)

$number.text(n)

$add.on('click', () => {
  n += 1
  localStorage.setItem('n', n)
  $number.text(n)
})

$minus.on('click', () => {
  n -= 1
  localStorage.setItem('n', n)
  $number.text(n)
})

$mul.on('click', () => {
  n *= 2
  localStorage.setItem('n', n)
  $number.text(n)
})

$divide.on('click', () => {
  n /= 2
  localStorage.setItem('n', n)
  $number.text(n)
})