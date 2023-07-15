



var sitenameinput = document.getElementById("sitename")
var urlinput = document.getElementById("url")
var rightmarksiteli = document.getElementById("rightmarksite")
var wrongmarksiteli = document.getElementById("wrongmarksite")
var rightmarkurlli = document.getElementById("rightmarkurl")
var wrongmarkurlli = document.getElementById("wrongmarkurl")

function validsitename(value) {
    var validsite = /^[a-zA-Z ]{3,20}$/;
    var validname = validsite.test(value)
    if (validname == true) {
        wrongmarksiteli.style.display = "none"
        rightmarksiteli.style.display = "block"
        sitenameinput.style.cssText = `
        border-color: #62bc39;
        box-shadow: 0 0 0 0.25rem #b0d36055;  `
    } else if (value == "") {
        wrongmarksiteli.style.display = "none"
        rightmarksiteli.style.display = "none"
        sitenameinput.style.cssText = `   border-color: #bc8a39;
        box-shadow: 0 0 0 0.25rem #d3a76055;`
    } else {
        wrongmarksiteli.style.display = "block"
        rightmarksiteli.style.display = "none"
        sitenameinput.style.cssText = ` border-color: #bc3939;
        box-shadow: 0 0 0 0.25rem #ca8e7855;`
    }
}

function validurl(value) {
    var validurl = /^((ftp|http|https):\/\/)?www\.([A-z]+)\.([A-z]{2,6})\/?([a-z]{2,8})?$/;
    var validsiteurl = validurl.test(value.toLowerCase().trim())
    console.log(validsiteurl)
    if (validsiteurl == true) {
        wrongmarkurlli.style.display = "none"
        rightmarkurlli.style.display = "block"
        urlinput.style.cssText = `
        border-color: #62bc39;
        box-shadow: 0 0 0 0.25rem #b0d36055;  `
    } else if (value == "") {
        wrongmarkurlli.style.display = "none"
        rightmarkurlli.style.display = "none"
        urlinput.style.cssText = `   border-color: #bc8a39;
        box-shadow: 0 0 0 0.25rem #d3a76055;`
    } else {
        wrongmarkurlli.style.display = "block"
        rightmarkurlli.style.display = "none"
        urlinput.style.cssText = ` border-color: #bc3939;
        box-shadow: 0 0 0 0.25rem #ca8e7855;`
    }
}

