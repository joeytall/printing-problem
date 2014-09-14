$(document).ready(function () {
  // $(".rgMasterTable").removeClass("rgMasterTable");
  // $(".rgClipCells").removeClass("rgClipCells");
  // $(".RadGrid").removeClass("RadGrid");
  // $(".rgRow").removeClass("rgRow");
  // $(".rgAltRow").removeClass("rgAltRow");
  setTimeout(setobjects("0"), 0);

  $(".RadGrid").each(function(){
    var pageHeight = 900,
    gridTop = parseInt($(this).css("top")),
    gridHeight = $(this).height();
  if (gridTop % pageHeight + gridHeight > pageHeight)
  {
    movedown($(this).prev());
    movedown($(this).next());
  }
  });
})

function movedown(obj){
  var marginTop = 25,
      originalTop = parseInt(obj.css("top")),
      newTop = originalTop + marginTop,
      nextObj = obj.next();
  obj.css("top",newTop);
  if(nextObj.length != 0)
    movedown(nextObj);
}
