var minOffset = 20;
var maxOffset = 60;

$('.addBar').mousedown(function(ev, handler) {
  $(document).mousemove(function(ev, handler) {
    var offset = ev.pageX;
    
    offset = offset < minOffset ? minOffset : offset;
    offset = offset > maxOffset ? maxOffset : offset;
    
    $('.compiler').document('width', offset);
    $('.simulation').document('marginLeft', offset + 10);
  });
});

$(document).mouseup(function(e) {
  $(document).unbind('mousemove');
});