/* Task 1 */
var heading = document.getElementById('heading')
console.log(heading.textContent)

/* Task 2 using plain JavaScript */
function addText(event){
    var p = document.createElement("p")
    p.innerText = 'Hello world'
    var div = document.getElementById("task2a")
    div.appendChild(p)
}
function addColorYellow(event){
    var color = document.getElementsByTagName("body")[0]
    color.style.backgroundColor = event.target.id
    
}
function addColorPurple(event){
    var color = document.getElementsByTagName("body")[0]
    color.style.backgroundColor = event.target.id
    
}

function getGoogle(event){
    window.location.href = "https://www.google.com/"
}

/* Task 4 using jQuery */

$('#addText').click(function(e){
    let para = $("<p>").text("hello world");
    $('#task4a').append(para);
});

// Task 4b
$('.btn1').click(function(e){
    $('body').css('background-color', e.target.innerText.toLowerCase())
})

// Task 4c

$('#addNum').click(function(e){
    let first = parseInt($('#first').val())
    let sec =  parseInt($('#second').val())
    let add = first + sec
    $('#sum').append(add)

})





