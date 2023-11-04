window.onload = function() {

    // Old JSON site: https://www.npoint.io/docs/48609dec2ba5b143263c
    // Old JSON site: https://api.npoint.io/48609dec2ba5b143263c
    // New JSON editor: https://extendsclass.com/jsonstorage/811ab9d58f9f
    // New URI to acess JSON bin: https://json.extendsclass.com/bin/811ab9d58f9f
    // Local JSON: res/json/jsonfile.json
    
    fetch('https://json.extendsclass.com/bin/811ab9d58f9f')
        .then((response) => response.json())
        .then(json => {
            console.log(json);
            for (let i = 0; i < json.length; i++) {
                const mainElement = document.getElementById("main-content");
                let div = document.createElement("div");
                let divAuth = document.createElement("div")
                let divDate = document.createElement("div");
                let a = document.createElement("a");
                let img = document.createElement("img");
                let p = document.createElement("p");
                let divLike = document.createElement("div");
                let imgLike = document.createElement("img");

                div.className="posts";
                divAuth.className = "author";
                divDate.className = "date";
                a.className = "pic";
                divLike.className = "like";

                img.src = json[i].profilepic;
                divAuth.innerText = json[i].author;
                divDate.innerText = json[i].date;
                imgLike.src = json[i].likepic;
                p.innerText = json[i].text;
                

                img.width = 50;
                img.height = 50;
                imgLike.width = 70;
                imgLike.height = 50;

                div.appendChild(a);
                div.appendChild(p);
                a.appendChild(img);

                if (json[i].picture != undefined) {
                    let divPic = document.createElement("div");
                    let imgPic = document.createElement("img");
                    divPic.className = "pic2";
                    imgPic.src = json[i].picture;
                    divPic.appendChild(imgPic);
                    div.appendChild(divPic);
                }

                divLike.appendChild(imgLike);
                div.appendChild(divAuth)
                div.appendChild(divDate);
                div.appendChild(divLike);
                mainElement.appendChild(div);
            }

        })
        .catch(err => {
            let errDiv = document.createElement("div");
            errDiv.className = 'post';
            errDiv.innerText = err;
            document.body.appendChild(errDiv);
            })
        .finally(() => {
            let footer = document.createElement("footer");
            date = new Date().toLocaleString()
            footer.innerText = date;
            document.body.appendChild(footer);
            })
}

function myFunction() {
    document.getElementById("dropdownItms").classList.toggle("show");
}

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
