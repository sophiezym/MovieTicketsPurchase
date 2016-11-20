//plugin bootstrap minus and plus
//http://jsfiddle.net/laelitenetwork/puJ6G/
// $('.btn-number').click(function(e){
//     e.preventDefault();
    
//     fieldName = $(this).attr('data-field');
//     type      = $(this).attr('data-type');
//     var input = $("input[name='"+fieldName+"']");
//     var currentVal = parseInt(input.val());
//     if (!isNaN(currentVal)) {
//         if(type == 'minus') {
            
//             if(currentVal > input.attr('min')) {
//                 input.val(currentVal - 1).change();
//             } 
//             if(parseInt(input.val()) == input.attr('min')) {
//                 $(this).attr('disabled', true);
//             }

//         } else if(type == 'plus') {

//             if(currentVal < input.attr('max')) {
//                 input.val(currentVal + 1).change();
//             }
//             if(parseInt(input.val()) == input.attr('max')) {
//                 $(this).attr('disabled', true);
//             }

//         }
//     } else {
//         input.val(0);
//     }
// });
// $('.input-number').focusin(function(){
//   $(this).data('oldValue', $(this).val());
// });

// $('.input-number').change(function() {
    
//     minValue =  parseInt($(this).attr('min'));
//     maxValue =  parseInt($(this).attr('max'));
//     valueCurrent = parseInt($(this).val());
    
//     name = $(this).attr('name');
//     if(valueCurrent >= minValue) {
//         $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
//     } else {
//         alert('Sorry, the minimum value was reached');
//         $(this).val($(this).data('oldValue'));
//     }
//     if(valueCurrent <= maxValue) {
//         $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
//     } else {
//         alert('Sorry, the maximum value was reached');
//         $(this).val($(this).data('oldValue'));
//     }
    
    
// });
// $(".input-number").keydown(function (e) {
//         // Allow: backspace, delete, tab, escape, enter and .
//         if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
//              // Allow: Ctrl+A
//             (e.keyCode == 65 && e.ctrlKey === true) || 
//              // Allow: home, end, left, right
//             (e.keyCode >= 35 && e.keyCode <= 39)) {
//                  // let it happen, don't do anything
//                  return;
//         }
//         // Ensure that it is a number and stop the keypress
//         if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
//             e.preventDefault();
//         }

//     });
//      $("input[name='demo1']").TouchSpin({
//                                 min: 0,
//                                 max: 100,
//                                 step: 1,
//                                 boostat: 5,
//                                 maxboostedstep: 10,
//                             });
    
    
    
    
function decrementValueC() {
    var i = document.getElementById('ChildNo').value;
    if(i > 0)
        document.getElementById('ChildNo').value = --i;
}
function incrementValueC() {
    var i = document.getElementById('ChildNo').value;
        document.getElementById('ChildNo').value = ++i;
}

 function decrementValueS() {
    var i = document.getElementById('SeniorNo').value;
    if(i > 0)
        document.getElementById('SeniorNo').value = --i;
}
function incrementValueS() {
    var i = document.getElementById('SeniorNo').value;
        document.getElementById('SeniorNo').value = ++i;
}


 function decrementValueG() {
    var i = document.getElementById('GenNo').value;
    if(i > 0)
        document.getElementById('GenNo').value = --i;
}
function incrementValueG() {
    var i = document.getElementById('GenNo').value;
        document.getElementById('GenNo').value = ++i;
}

function incrementValueG() {
    var i = document.getElementById('GenNo').value;
        document.getElementById('GenNo').value = ++i;
}

function total()
{
    var child = parseInt(document.getElementById('ChildNo').value);
    var senior =  parseInt(document.getElementById('SeniorNo').value);
    var general = parseInt(document.getElementById('GenNo').value);
    document.getElementById('quantity').value = child+senior+general;
    var total = child*5+senior*7+general*10;
    document.getElementById('cost').value = total
}