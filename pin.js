let pincode = function (e) {
    e.preventDefault()
    let value = parseInt(document.querySelector("#input").value)
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
                return new obj(element.Name, element.District,element.State)
            })
            console.log(newarr)
            return newarr
        })
        .catch((error) => {
            console.log("an error has occured" + error)
        })
}
let code = document.querySelector("form")
code.addEventListener("submit", pincode)
