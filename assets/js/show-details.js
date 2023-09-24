const container_items = [...document.querySelectorAll(".container-item")];
container_items.forEach(item=>{
    item.addEventListener("click",e=>{
      if(![...e.target.classList].includes("btn") && [...e.currentTarget.classList].includes("container-item")){
        console.log(e.target);
        console.log();
        const active = document.querySelector(".more-details.active");
        e.currentTarget.querySelector(".more-details").classList.toggle("active");
        if(active) active.classList.remove("active")

      }
    })
})