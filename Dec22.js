const inp1 = document.querySelector(".inp1");
const b1 = document.querySelector(".b1");

// console.log(inp1)
// console.log(b1)
b1.addEventListener("click", () => {
    const productstr = localStorage.getItem("task");
    if (productstr == null) {
        localStorage.setItem("task", JSON.stringify([inp1.value]))
    } else {
        const productstr = localStorage.getItem("task");
        const product = JSON.parse(productstr)
        product.push(inp1.value)

        localStorage.setItem("task", JSON.stringify(product))
    }
    inp1.value = ""
    window.location.reload();


})

const outer = document.querySelector(".outer")
const main = document.querySelector(".main")



function append() {

    const productstr = localStorage.getItem("task")
    if (productstr == null) {
        alert("no data")
        prompt("Enter a Data")
    }

    else {
        const productstr = localStorage.getItem("task")
        const product = JSON.parse(productstr)

        product.forEach((value) => {
            const copy = outer.cloneNode(true);
            copy.classList.remove("remove")

            const inp2 = copy.querySelector(".inp2");
            inp2.innerText = value;

            main.appendChild(copy)

            const click = copy.querySelector(".b2")




        })





    }
}



append()