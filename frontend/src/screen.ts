class Display{

    constructor(private color : String){

    }


    show(className:string, message:string){
        if (document.querySelector(className) !== null){
            let elem:Element|null = document.querySelector(className);
            if (elem){
                elem.textContent = message;
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let display = new Display("");
    display.show(".go", "Go slow!!");
});
