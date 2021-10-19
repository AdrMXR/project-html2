$(document).on('ready', function () {
    $("input:checkbox").on('click', function () {
        var $box = $(this);
        if ($box.is(":checked")) {
            var group = "input:checkbox[name='" + $box.attr("name") + "']";
            $(group).prop("checked", false);
            $box.prop("checked", true);
        } else {
            $box.prop("checked", false);
        }
    });
})

function showFount() {
    let fuente = document.getElementById('typeLetra')
    let text = document.getElementById('parrafo')
    text.style.fontFamily = fuente.value
}

function showAligment() {
    let aligment = document.getElementById("typeAlineacion")
    let text = document.getElementById('parrafo')
    text.style.textAlign = aligment.value 
}

function showStyle() {
    $(document).on('change','input[type="checkbox"]' ,function(e) {
        let style = this.id;
        let text = document.getElementById('parrafo')
        
        if(style == "bold") {
            text.style.fontWeight = style
        } else {
            text.style.fontStyle = style
        }
        
    });
}

function showType() {
    $(document).on('change','input[type="radio"]' ,function(e) {
        let type = this.id;
        let text = document.getElementById('parrafo')
        text.style.textDecoration = type       
    });
}

function showColors() {
    $(document).on('change','input[type="checkbox"]' ,function(e) {
        let color = this.value;
        let text = document.getElementById('parrafo')
        text.style.color = color        
    });}
