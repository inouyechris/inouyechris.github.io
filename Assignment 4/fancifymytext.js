function changeFontSize(){
    alert("Hello World");
    document.getElementById("textbox").style.fontSize = "2em";
}

function fancifySelected(){
    alert("Fancified");
    document.getElementById("textbox").style.fontWeight = "bold";
    document.getElementById("textbox").style.color = "blue";
    document.getElementById("textbox").style.textDecoration = "underline";
}

function boringSelected(){
    alert("Back to boring");
    document.getElementById("textbox").style.fontWeight = "normal";
    document.getElementById("textbox").style.color = "black";
    document.getElementById("textbox").style.textDecoration = "none";
}

function mooFunction(){
    var text=document.getElementById("textbox").value;

var uppercase_text=text.toUpperCase();

// Add a suffix -Moo to the last word of each sentence.

// Consider that the sentence ends with a period character ".".

var split_text=uppercase_text.split(" ");
var suffixed_text=split_text.join("_");
let joined_text=suffixed_text.concat("-Moo")

document.getElementById("textbox").value=joined_text;
}