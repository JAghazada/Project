const name_inp = document.getElementById("name");
const surname_inp = document.getElementById("surname");
const search_btn = document.querySelector(".search-btn");
const table_container = document.getElementById("table-container");
const users = [
    {
        name:"adam1",
        surname:"soyad1",
        text:"Adam1 Soyad1 Ata adi1"
    },
    {
        name:"adam2",
        surname:"soyad2",
        text:"Adam2 Soyad2 Ata adi2"
    },
    {
        name:"adam3",
        surname:"soyad3",
        text:"Adam3 Soyad3 Ata adi3"
    },
    {
        name:"adam4",
        surname:"soyad4",
        text:"Adam4 Soyad4 Ata adi4"
    },
]
const List =(array)=>{
    table_container.innerHTML = ``
    array.forEach(element => {
            const div = document.createElement("div");
            div.classList.add("container-item");
            div.innerHTML = `
            <div class="short-details">
            <div class="short-infos">
                <img src="./assets/icons/profile-icon.svg" alt="">
                <div class="personal-short-info">${element.text}</div>
            </div>
            <button class="btn">
                Xəritədə Göstər
            </button>
        </div>
        <div class="more-details">
                <section>
                    <div class="details-sections">
                        <div class="detail-header">Qohumluq</div>
                        <div class="detail-value">A/B</div>
                    </div>
                    <div class="details-sections">
                        <div class="detail-header">Təvəllüd</div>
                        <div class="detail-value">02.02.1974</div>
                    </div>
                    <div class="details-sections">
                        <div class="detail-header">İşğalRayon</div>
                        <div class="detail-value">Bakı</div>
                    </div>
                </section>
                <section>
                    <div class="details-sections">
                        <div class="detail-header">Kənd</div>
                        <div class="detail-value">Yasamal</div>
                    </div>
                    <div class="details-sections">
                        <div class="detail-header">FIN</div>
                        <div class="detail-value">ABC2DEF</div>
                    </div>

                    <div class="details-sections">
                        <div class="detail-header">Telefon nömrəsi</div>
                        <div class="detail-value">+994507883456</div>
                        <div class="detail-value">+994557883456</div>

                    </div>
                </section>
                <section>
                    <div class="details-sections">
                        <div class="detail-header">Rayon</div>
                        <div class="detail-value">Sumqayıt</div>
                    </div>
                    <div class="details-sections">
                        <div class="detail-header">Obyekt tipi</div>
                        <div class="detail-value">Şəxsi mənzil kupçasız</div>
                    </div>
                    <div class="details-sections">
                        <div class="detail-header">Ünvan</div>
                        <div class="detail-value">Her hansı bir
                            uzun ünvan yeri</div>
                    </div>
                </section>
                <section>
                    <div class="details-sections">
                        <div class="detail-header">Təhsil</div>
                        <div class="detail-value">Şagird-orta</div>
                    </div>
                    <div class="details-sections">
                        <div class="detail-header">Xüsusi Status</div>
                        <div class="detail-value">Müharibə veteranı</div>
                    </div>
                </section>
                <section>
                    <div class="details-sections">
                        <div class="detail-header">Peşə adı</div>
                        <div class="detail-value">nəsə</div>
                    </div>
                    <div class="details-sections">
                        <div class="detail-header">İş strukturu</div>
                        <div class="detail-value">Dövlət</div>
                    </div>
                    <div class="details-sections">
                        <div class="detail-header">İş vəzifəsi</div>
                        <div class="detail-value">Digər</div>
                    </div>
                </section>
                <div class="details-sections">
                    <div class="detail-header">Hal=hazırdakı vəzifə</div>
                    <div class="detail-value">Təqaüüdçü</div>
                </div>
                <div class="details-sections">
                    <div class="detail-header">Ümumi məlumat</div>
                    <div class="detail-value">Lorem ipsum dolor sit amet consectetur. Volutpat aliquam massa a
                        posuere turpis nunc. Eu a ultricies quis tristique et orci.</div>
                </div>
        </div>
            `
            table_container.append(div)
    });
}
search_btn.addEventListener("click",()=>{
    const name = name_inp.value.trim().toLowerCase();
    const surname = surname_inp.value.trim().toLowerCase();
    if(name && surname){
        const user = users.filter(u=>u.name === name && u.surname === surname);
        return List(user)
        
    }
    if(name && !surname){
        const user = users.filter(u=>u.name === name);
        return List(user)

    }
    if(!name && surname){
        const user = users.filter(u=>u.surname === surname);
        return List(user)

    }
    if(!name && !surname){
        return List(users)
    }

})