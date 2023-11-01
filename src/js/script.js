window.onload = function() {

    // https://www.npoint.io/docs/48609dec2ba5b143263c
    // https://api.npoint.io/48609dec2ba5b143263c
    // res/json/jsonfile.json
    fetch('https://api.npoint.io/48609dec2ba5b143263c')
        .then((response) => response.json())
        .then(json => {
            console.log(json);
            for (let i = 0; i < json.length; i++) {
                const mainElement = document.getElementById("main-content");
                let div = document.createElement("div");
                let divDate = document.createElement("div");
                let a = document.createElement("a");
                let img = document.createElement("img");
                let p = document.createElement("p");
                let divLike = document.createElement("div");
                let imgLike = document.createElement("img");

                div.className="posts";
                a.className = "pic";
                divDate.className = "date";
                divLike.className = "like";

                img.src = json[i].profilepic;
                imgLike.src = json[i].likepic;
                p.innerText = json[i].text;
                divDate.innerText = json[i].date;

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

window.onclick = function(event) {
    if (!event.target.matches('.dropimg')) {
        var dropdowns = document.getElementsByClassName("drop-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
            }
        }
    }
}
