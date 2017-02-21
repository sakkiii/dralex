---
layout: default
title: Implant dentar pret 250 de euro. Coroana zirconiu 180 euro.
---

<!-- Start Hero -->

{% include hero.html %}

<!-- End Hero -->


<!-- Start About -->
<div id="oabout" class="about">
    <div class="container-fluid">

        <div class="row">
            <h2 class="section-title">Oferta implant dentar 250 euro</h2>


            <div class="col-lg-8 col-lg-offset-2 text-center">
                <img class="img-responsive" src="/img/implant250.jpg" alt="Implant dentar pret 250 euro">
            </div>
        </div>

        <div class="row">
            <br/><br/>

            <div class="col-sm-6">
                
                <p>Un implant dentar este o rădăcină de dinte artificial, care este plasată în maxilar pentru a ajuta la montarea unei coroane dentare sau a unei punți. Implanturile dentare pot fi o opțiune pentru persoanele care au pierdut un dinte sau mai mulți dinți din cauza bolii parodontale, o accidentare, sau din alte motive.</p>
                
                <p>Candidatul ideal pentru un implant dentar trebuie sa fie în stare bună de sănătate orală. Este nevoie de os adecvat în maxilar pentru a sprijini implantul, iar cei mai buni candidați sunt cei care au țesuturile sănătoase si gingii neafectate de boala parodontală.</p>

            </div>
            <div class="col-sm-6">
                <p>Înlocuirea unui singur dinte: Dacă lipsește un singur dinte, un implant și o coroană îl pot înlocui.</p>
                
                <p>Înlocuirea mai multor dinți: Dacă lipsesc mai mulți dinți, o punte sprijinită de implanturi îi pot înlocui.</p>
                
                <p>Înlocuirea tuturor dinților: Dacă lipsesc toți dinții, o punte intreagă susținută de implanturi sau proteză completă îi pot înlocui.</p>
            </div>
                 
        </div>
        
        <div class="row">
            <br/><br/>

            <h2 class="section-title">Oferta coroana zirconiu 180 euro</h2>

            <div class="col-lg-8 col-lg-offset-2 text-center">
                <img class="img-responsive" src="/img/zirconiu-650.jpeg" alt="Coroana zirconiu pe implant">
            </div>
        </div>

        <div class="row">
            <br/><br/>

            <div class="col-sm-6">
                
                <p>Zirconiul devine rapid materialul de preferat pentru coroane dentare. Este un material foarte puternic capabil să reziste la uzura utilizării zilnice. Din punct de vedere estetic, este translucid foarte similar cu un dinte natural și reflectă lumina în același fel.</p>
                
                <p>Efectul estetic al zirconiului este important pentru coroanele montate în partea din față a gurii și pentru a face diferența față de dinții naturali insesizabilă.</p>

            </div>
            <div class="col-sm-6">
                <p>In cadrul ofertei pretul este de 650 RON pentru coroanele montate pe dinti existenti (redus de la 1000 RON) sau 800 RON pentru coroanele montate pe implanturi (redus de la 1200 RON).</p>
            </div>
                 
        </div>
        
        <div class="row">
                <div class="col-lg-12 text-center">
                   <div class="fb-comments" data-href="https://www.dririnaalexandru.ro/oferte/" data-numposts="15" data-colorscheme="light" data-order-by="reverse_time"></div>   
                </div>

        </div>
    </div>
</div>
<!-- End About -->

<!-- Start 3 columns -->
<div class="three-shade-col">
    <div class="col-sm-4">
        <svg class="icon icon-envelope-o"><use xlink:href="#icon-envelope-o"></use></svg>
        <h3>Contact</h3>
        <ul>
            {% if site.contact.phone %}<li><strong>Telefon:</strong> {{ site.contact.phone }}</li>{% endif %}
            {% if site.contact.emergency %}<li><strong>Emergency:</strong> {{ site.contact.emergency }}</li>{% endif %}
            {% if site.contact.email %}<li><strong>Email:</strong> {{ site.contact.email }}</li>{% endif %}
        </ul>
    </div>
    <div class="col-sm-4 nodisplay-mobile">
        <svg class="icon icon-clock-o"><use xlink:href="#icon-clock-o"></use></svg>
        <h3>Orar</h3>
        <table>
            <tbody>
                <tr>
                    <td>Luni – Vineri</td>
                    <td>{{ site.monday_friday }}</td>
                </tr>
                <tr>
                    <td>Sambata</td>
                    <td>{{ site.saturday }}</td>
                </tr>
                <tr>
                    <td>Duminica</td>
                    <td>{{ site.sunday }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="col-sm-4 nodisplay-mobile">
        <svg class="icon icon-map-marker"><use xlink:href="#icon-map-marker"></use></svg>
        <h3>Adresa</h3>
            <p>
                {{ site.contact.address }}
            </p>
    </div>
</div>
<!-- End 3 columns -->
    
    
    
    
