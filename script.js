const mainVarible = document.querySelector(".main")
const Name = document.querySelector(".cName")
const Start = document.querySelector(".cStart")
const end = document.querySelector(".cEnd")
const plateform = document.querySelector(".cPlateform")
const link = document.querySelector(".cLink")

function renderData(data){
    data.forEach(element => {
        let name = document.createElement("p");
        name.style.borderBottom = "1px solid white"
        let start_time = document.createElement("p");
        start_time.style.borderBottom = "1px solid white"
        let end_time = document.createElement("p");
        end_time.style.borderBottom = "1px solid white"
        let contest_plateform = document.createElement("p");
        contest_plateform.style.borderBottom = "1px solid white"
        let contest_link = document.createElement("a");
        contest_link.style.borderBottom = "1px solid white"

        name.innerText = element.name;
        let s_time = element.start_time.split("T").shift().split("-");
        let s_date = Array.from(s_time[2])
        start_time.innerText = `${s_date[0]}${s_date[1]}-${s_time[1]}-${s_time[0]}`
        let e_time = element.end_time.split("T").shift().split("-");
        let e_date = Array.from(e_time[2])
        end_time.innerText = `${e_date[0]}${e_date[1]}-${e_time[1]}-${e_time[0]}`
        console.log(e_time)
        contest_plateform.innerText = element.site;
        contest_link.setAttribute("href",`${element.url}`);
        contest_link.innerText = 'link';
        Name.appendChild(name)
        Start.appendChild(start_time)
        end.appendChild(end_time)
        plateform.appendChild(contest_plateform)
        contest_link.style.textDecoration = "none"
        link.appendChild(contest_link)
    });


}
contestData()
async function contestData() {
    let respose = await fetch("https://kontests.net/api/v1/all");
    let data = await respose.json();
    // console.log(typeof data)
    renderData(data)
}



let start_time = '2014-07-07T15:38:00.000Z'
// console.log(start_time.split("T").shift().split('-'))