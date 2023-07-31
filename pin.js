let pincode = function (e) {
    e.preventDefault()
    let value = (document.querySelector("#input").value)
    if (!isNaN(value)) {
        let url = `https://api.postalpincode.in/pincode/${value}`
        let prom = fetch(url)
        prom.then(prom => prom.json())
            .then((data) => {
                let data1 = data[0]
                let postaloffice = data1.PostOffice
                let num = postaloffice.length
                return postaloffice
            })
            .then((array) => {
                class obj {
                    constructor(Name, district, state) {
                        this.Name = Name
                        this.district = district
                        this.state = state
                    }
                }
                let newarr = array.map((element) => {
                    return new obj(element.Name, element.District, element.State)
                })
                console.log(newarr)
                let ol = document.querySelector("ol")
                ol.innerHTML = ""
                newarr.forEach(element => {
                    let li = document.createElement("li")
                    li.innerHTML = `${element.Name}, ${element.district}, ${element.state}`
                    ol.appendChild(li)
                })
            })
            .catch((error) => {
                console.log("an error has occured" + error)
            })

    }
    else {
        console.log("string")
        let url = `https://api.postalpincode.in/postoffice/${value}`
        let prom = fetch(url)
            .then((prom) => prom.json())
            .then((data) => {
                let data1 = data[0]
                console.log(data1)
                let post = data1.PostOffice
                console.log(post)
                let ol = document.querySelector("ol")
                ol.innerHTML = ""
                post.map((element) => {
                    let li = document.createElement("li")
                    li.innerHTML = `Pincode :${element.Pincode} <br> District: ${element.District}<br> State : ${element.State}`
                    ol.appendChild(li)
                })





            })
    }
}
let code = document.querySelector("form")
code.addEventListener("submit", pincode)