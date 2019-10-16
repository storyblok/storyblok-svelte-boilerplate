const addClass = function(el, className) {
  if (el.classList) {
    el.classList.add(className)
  } else if (!new RegExp('\\b'+ className+'\\b').test(el.className)) {
    el.className += ' ' + className
  }
}

export const editable = (el, content) => {
  if (typeof content._editable === 'undefined') {
    return
  }

  var options = JSON.parse(content._editable.replace('<!--#storyblok#', '').replace('-->', ''))

  el.setAttribute('data-blok-c', JSON.stringify(options))
  el.setAttribute('data-blok-uid', options.id + '-' + options.uid)

  addClass(el, 'storyblok__outline')
}