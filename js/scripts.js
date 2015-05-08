var theLi;
var oldChild;
var theList = document.querySelector('#theList');


function deleteFunction(){
    this.parentNode.outerHTML = '';
}

function setupListener() {
    var editButtons = theList.querySelectorAll('.edit');
    var listItems = theList.querySelectorAll('li');
    var deleteButtons = theList.querySelectorAll('.delete');
    var checkbuttons = theList.querySelectorAll('.checkBox');
    for (var i = 0; i < listItems.length; i++) {
        var editButton = editButtons[i];
        editButton.addEventListener('click', editFunction);
        var deleteButton = deleteButtons[i];
        deleteButton.addEventListener('click', deleteFunction);
        var checkbutton = checkbuttons[i];
        checkbutton.addEventListener('change',checkboxFunction);
    }

}

function editFunction(){
    oldChild = this.parentNode;
    this.parentNode.innerHTML = '<input type="text" placeholder="Enter what your would like to do." style="width:210px;">' + '<button >submit</button>';
    var submitEdit = oldChild.querySelector('button');
    submitEdit.addEventListener('click', resubmit);

}
function resubmit(){
    var grabber = this.parentNode.querySelector('input');
    var grabberVal = grabber.value;
    this.parentNode.innerHTML = '<input type="checkbox" value="1" class="checkBox"/>' + grabberVal + '<button class="space edit"> edit </button> <button class=" space delete">delete</button>';
    setupListener();
}

function checkboxFunction(){
 if(this.checked) {
     this.parentNode.setAttribute("class", "strikeThrough");

 }else{
     this.parentNode.classList.remove("strikeThrough");

 }
}


function addItem() {
    var grabber = document.getElementById('input');
    var grabberVal = grabber.value;
    theLi = document.createElement('li');
    theLi.innerHTML = '<input type="checkbox" value="1" class="checkBox"/>' + grabberVal + '<button class=" space edit"> edit </button> <button class=" space delete">delete</button>';
    theList.appendChild(theLi);
    document.getElementById('input').value = "";
    var look = document.getElementById('input');
    look.removeAttribute('placeholder');
    look.setAttribute('placeholder', 'Enter what your would like to do.');
   setupListener();
}

