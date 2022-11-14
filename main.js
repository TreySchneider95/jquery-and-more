div = $("<div>").html("Click Here")
$("body").append(div)
ul = $("<ul>")
$("body").append(ul)
div.click(function(){
    let li = $("<li>").html($("#input").val())
    ul.append(li)
    $("#input").val("")
})
