let ReqType = document.querySelector("#ReqType");
let ReqUrl = document.querySelector("#ReqUrl");
let sendBtn = document.querySelector("#sendBtn");
let data = document.querySelector('#data');

let textarea = document.querySelector("#textarea");

sendBtn.addEventListener('click', () => {
    const url = ReqUrl.value;

    if (ReqType.value == 'GET') {
        fetch(url)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                result.forEach(element => {
                    let p = document.createElement("p");
                    let ptext = document.createTextNode(element.title);
                    p.appendChild(ptext);
                    data.appendChild(p);
                })
            })
    }

    else if (ReqType.value == 'POST') {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(textarea.value)
        })
            .then(response => response.json())
            .then(result => console.log(result))
    }
})
