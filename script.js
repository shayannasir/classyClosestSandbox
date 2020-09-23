$('select#p_variant').on('change', function(evt) {
    var opt = $('select#p_variant').val();
    if(opt && opt === "1"){
        $('input#p_color').closest('.form-group').removeClass('display-n');
        $('input#p_size').closest('.form-group').addClass('display-n');
        $('.variant_detail').removeClass('display-n');
        $('.product_media').removeClass('display-n');
    } else if (opt && opt === "2") {
        $('input#p_size').closest('.form-group').removeClass('display-n');
        $('input#p_color').closest('.form-group').addClass('display-n');
        $('.variant_detail').removeClass('display-n')
        $('.product_media').removeClass('display-n');
    } else {
        $('input#p_size').closest('.form-group').addClass('display-n');
        $('input#p_color').closest('.form-group').addClass('display-n');
        $('.variant_detail').addClass('display-n')
        $('.product_media').addClass('display-n');
    }
})

$('button#moreImages').on('click', function(evt) {
    var currentCount = $('.product_media .form-group').length;
    var newCount = currentCount + 1;
    var lastGroup = $('.product_media .form-group').last();
    var newSection = lastGroup.clone();
    newSection.find('input').val("");
    newSection.insertAfter(lastGroup);
    newSection.find("input").each(function (index, input) {
        input.id = input.id.replace("_" + currentCount, "_" + newCount);
        input.name = input.name.replace("_" + currentCount, "_" + newCount);
    });
    newSection.find("label").each(function (index, label) {
        var l = $(label);
        var prevValue = l.html();
        var newValue = prevValue.replace(currentCount, newCount);
        l.html(newValue);
    });
    return false;
})

var submitForm = function() {
    var form = [];
    var media = [];
    $('input, select').each(function (index, element) {
        if(element.type === "file" && element.files.length > 0){
            media.push(element.files[0]);
        } else if (element.parentElement.classList.contains('display-n')){
            
        } else {
            form[element.id] = element.value;
        }
    })
    form["media"] = media;
    console.log(form);
}