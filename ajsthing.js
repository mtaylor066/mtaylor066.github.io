$(document).ready(function () {

  enableArtifact();

});

function enableArtifact() {
  $(".artifact").each((i, e) => {
    $(e).click(ev => {
        var aQty = $($(".artifact-qty")[i])
        var checkBox = $(e).find("input");
        aQty.prop("disabled", !aQty.prop("disabled"))
        console.log(ev.target.tagName);
        if (ev.target.tagName != "INPUT")
          checkBox.prop("checked", !checkBox.prop("checked"))
    })
  })
}