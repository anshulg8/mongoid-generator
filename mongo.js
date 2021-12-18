var button = document.getElementById('button')
var output = document.getElementById('output')
var notice = document.getElementById('notice')

var generate = function() {
  var ObjectId = (m = Math, d = Date, h = 16, s = s => m.floor(s).toString(h)) =>
      s(d.now() / 1000) + ' '.repeat(h).replace(/./g, () => s(m.random() * h))
  output.value = ObjectId()
}

button.onclick = generate

output.onclick = function() {
    this.select()
    document.execCommand('copy')
    notice.classList.add('show')
    window.setTimeout(function(){
      notice.classList.remove('show')
      output.value = null
    },1000)
}

notice.onclick = function() {
  this.classList.remove('show')
  output.value = null
}
