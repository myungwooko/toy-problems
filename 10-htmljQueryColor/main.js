$(function(){
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!
  var p = $("p").text().split(" ");
  var count = 1;
  for(var i = 0; i < p.length; i++) {
    if(p[i].length !== 0 && i !== 0) {
      p[i] = `<span class = a${count}>` + p[i] + ' </span>'
      count++
    }
  }
  $('p').html(p)

  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

  // TODO: your code here!
    function randomColorize() {
      for(var i = 1; i < count; i++) {
        var randomColor = "rgb(" + Math.floor(Math.random()*256) + ',' + Math.floor(Math.random()*256) + ',' + Math.floor(Math.random()*256) + ')'
        var selector = `.a${i}`
        $(selector).css("color", randomColor)
      }
    };
    setInterval(randomColorize, 1000)
});