
var sitenameinput = document.getElementById("sitename")
var urlinput = document.getElementById("url")
var rightmarksiteli = document.getElementById("rightmarksite")
var wrongmarksiteli = document.getElementById("wrongmarksite")
var rightmarkurlli = document.getElementById("rightmarkurl")
var wrongmarkurlli = document.getElementById("wrongmarkurl")
var submitbutton = document.getElementById("submitbtn")
var table = "";
var index;
var bookmarkmood = "submit"


// check the validation of site name
function validsitename(value) {
    var validsite = /^[a-zA-Z ]{3,20}$/;
    var validname = validsite.test(value)
    if (validname == true) {
        wrongmarksiteli.style.display = "none"
        rightmarksiteli.style.display = "block"
        sitenameinput.style.cssText = `
        border-color: #62bc39;
        box-shadow: 0 0 0 0.25rem #b0d36055;  `
        submitbutton.removeAttribute("data-bs-toggle")

    } else if (value == "") {
        wrongmarksiteli.style.display = "none"
        rightmarksiteli.style.display = "none"
        sitenameinput.style.cssText = `   border-color: #bc8a39;
        box-shadow: 0 0 0 0.25rem #d3a76055;`
        submitbutton.setAttribute("data-bs-toggle", "modal")

    } else {
        wrongmarksiteli.style.display = "block"
        rightmarksiteli.style.display = "none"
        sitenameinput.style.cssText = ` border-color: #bc3939;
        box-shadow: 0 0 0 0.25rem #ca8e7855;`
        submitbutton.setAttribute("data-bs-toggle", "modal")
    }
}
// check the validation of site name





// check the validation of site url
function validurl(value) {
    var validurl = /^((ftp|http|https):\/\/)?www\.([A-z]+)\.([A-z]{2,6})\/?([a-z]{2,8})?$/;
    var validsiteurl = validurl.test(value.toLowerCase().trim())

    if (validsiteurl == true) {
        wrongmarkurlli.style.display = "none"
        rightmarkurlli.style.display = "block"
        urlinput.style.cssText = `
        border-color: #62bc39;
        box-shadow: 0 0 0 0.25rem #b0d36055;  `
        submitbutton.removeAttribute("data-bs-toggle")

    } else if (value == "") {
        wrongmarkurlli.style.display = "none"
        rightmarkurlli.style.display = "none"
        urlinput.style.cssText = `   border-color: #bc8a39;
        box-shadow: 0 0 0 0.25rem #d3a76055;`
        submitbutton.setAttribute("data-bs-toggle", "modal")

    } else {
        wrongmarkurlli.style.display = "block"
        rightmarkurlli.style.display = "none"
        urlinput.style.cssText = ` border-color: #bc3939;
        box-shadow: 0 0 0 0.25rem #ca8e7855;`
        submitbutton.setAttribute("data-bs-toggle", "modal")

    }
}
// check the validation of site url







// create and save in local storage
if (localStorage.bookmark != null) {
    dataarr = JSON.parse(localStorage.bookmark)

} else { dataarr = [] }

function adddata() {
    var data = {
        sitenameinput: sitenameinput.value,
        urlinput: urlinput.value,
    }

    var validsite = /^[a-zA-Z ]{3,20}$/;
    var validname = validsite.test(sitenameinput.value)
    var validurl = /^((ftp|http|https):\/\/)?www\.([A-z]+)\.([A-z]{2,6})\/?([a-z]{2,8})?$/;
    var validsiteurl = validurl.test(urlinput.value.toLowerCase().trim())

    if (sitenameinput.value != "") {
        if (bookmarkmood == "submit") {
            if (validname == true && validsiteurl == true) {
                dataarr.push(data)
                clearinputs()
            }
           
        }
        // update
        else {
            if (validname == true && validsiteurl == true) {
                dataarr[index] = data
                submitbutton.setAttribute("type", "submit")
                submitbutton.setAttribute("data-bs-toggle", "modal")
            }
            submitbutton.innerHTML = "Update"
        }
        // update



    }
    displaydata()
    localStorage.setItem("bookmark", JSON.stringify(dataarr))
}
// create and save in local storage






// clear input after update and create
function clearinputs() {
    urlinput.value = ""
    sitenameinput.value = ""
    urlinput.style.cssText = `   border-color: #bc8a39;
    box-shadow: 0 0 0 0.25rem #d3a76055;`
    sitenameinput.style.cssText = `   border-color: #bc8a39;
    box-shadow: 0 0 0 0.25rem #d3a76055;`
    wrongmarkurlli.style.display = "none"
    rightmarkurlli.style.display = "none"
    wrongmarksiteli.style.display = "none"
    rightmarksiteli.style.display = "none"

}
// clear input after update and create






// display data in table
function displaydata() {
    var table = "";

    for (var i = 0; i < dataarr.length; i++) {
        table += `  <tr>
    <th>${i + 1}</th>
    <th>${dataarr[i].sitenameinput}</th>
    <th>
    <div class="btn1">
    <a href="${dataarr[i].urlinput}" target="_blank"> <button class="btn shadow "><i
                class="fa-regular me-2 margin-media fa-eye"></i>Visit</button></a>
</div>
    </th>
    <th>
        <div class="btn2">
            <button onclick="updatedata(${i})" class="btn shadow "><i class="fa-solid  margin-media me-2 fa-wrench"></i>update</button>
        </div>
    </th>
    <th>
        <div class="btn3">
            <button onclick="deleteitem(${i})" class="btn shadow  "><i class="fa-solid  margin-media me-2 fa-trash"></i>Delete</button>
        </div>
    </th>
</tr>`

    }

    document.getElementById("tbody").innerHTML = table
}
displaydata()
// display data in table






// delete one item
function deleteitem(x) {
    dataarr.splice(x, 1)
    localStorage.setItem("bookmark", JSON.stringify(dataarr))
    displaydata()
}
// delete one item






// update item
function updatedata(i) {
    submitbutton.innerHTML = "Update"
    urlinput.value = dataarr[i].urlinput
    sitenameinput.value = dataarr[i].sitenameinput
    bookmarkmood = "update"
    index = i
    wrongmarksiteli.style.display = "none"
    rightmarksiteli.style.display = "block"
    sitenameinput.style.cssText = `
    border-color: #62bc39;
    box-shadow: 0 0 0 0.25rem #b0d36055;  `
    wrongmarkurlli.style.display = "none"
    rightmarkurlli.style.display = "block"
    urlinput.style.cssText = `
    border-color: #62bc39;
    box-shadow: 0 0 0 0.25rem #b0d36055;  `

scroll({
    top:0,
    behavior:"smooth"
})


}
// update item




