// const API_URL = "https://tripadvisor1.p.rapidapi.com/";
// const tripAdvisorHost = "tripadvisor1.p.rapidapi.com";
// const tripAdvisorKey = "e529def011msh5c314f8580becf4p1f5bc5jsn178c7717622a";

let viewMore = () => {
    let viewMoreButtonElement = document.getElementById("vmore");
    if (viewMoreButtonElement.innerText == "View More") {
        document.getElementById("nextcardsset").style.display = "flex";
        viewMoreButtonElement.innerText = "View Less";
    }
    else {
        document.getElementById("nextcardsset").style.display = "none";
        viewMoreButtonElement.innerText = "View More";
    }
}