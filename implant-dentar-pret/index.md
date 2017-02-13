---
layout: default
title: Implant dentar + Coronita dentara = pret 400 de euro. Consultatie gratuita.
description: Pretul include bontul protetic si coroana dentara. Fara costuri ascunse, extractiile si consultatia sunt incluse in pret. 
---

<!-- Start Hero -->

{% include hero.html %}

<!-- End Hero -->


<!-- Start About -->
<div id="oabout" class="about">
    <div class="container-fluid">
        <h2 class="section-title">Implant dentar + Coronita dentara. Pret 400 euro!</h2>
        
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2 text-center">
                <img class="img-responsive" src="/img/implant-coroana.jpeg" alt="Implant dentar pret 400 euro">
            </div>
            <br/><br/>
        </div>

        <div class="row">
            <br/><br/>

            <div class="col-sm-6">
                <h3>Pretul unui implant dentar</h3>
                <p>Pretul unui tratament cu implanturi dentare nu este mic. Totusi, in ultimii ani, tehnologiile au avansat destul de mult pentru a permite interventii la preturi rezonabile cu implanturi de calitate. Sunt printre primii dentisti din Bucuresti care au inceput sa promoveze tratamentul cu implanturi dentare de calitate la preturi accesibile. Marturiile pacientilor le puteti citi si pe pagina de Facebook <a href="{{site.facebook}}/reviews" target="_blank">Dr Irina Alexandru</a>.</p>
                
                <p>In principiu, o reconstructie dentara bazata pe implanturi are doua componente de pret: pretul implanturilor dentare si pretul coronitelor dentare. Unele cabinete factureaza toate etapele tratamentului: consultatia, extractiile, bonturi de vindecare. In cabinetul nostru am ales sa oferim aceste activitati conexe gratuit, asa ca pretul final pentru o lucrare cu implanturi se va calcula doar in functie de numarul de implanturi dentare si numarul de coronite din lucrarile protetice (alte interventii chirugicale precum sinus lifting-ul se platesc separat).</p>
                
                <p>Ma puteti contacta telefonic <a href="tel:{{ site.contact.phone }}" style="color:#3dadb2"><svg class="icon icon-phone"><use xlink:href="#icon-phone"></use></svg></a><strong><a href="tel:{{site.contact.phone}}" style="color:#3dadb2">{{site.contact.phone}}</a></strong> sau pe <strong><a href="{{ site.facebook }}" target="_blank">Facebook</a></strong>.</p>

            </div>
            <div class="col-sm-6">
                 <div class="media">
                    <div class="media-left">
                        <div class="boxed-icon">
                            <svg class="icon icon-heart"><use xlink:href="#icon-heart"></use></svg>
                        </div>
                    </div>
                    <div class="media-body">
                        <p>Cat costa un implant dentar? - Un implant dentar Alpha Bio costa 250 de euro, iar un implant dentar Bredent costa 400 de euro.</p>
                    </div>
                </div>

                <div class="media">
                    <div class="media-left">
                        <div class="boxed-icon">
                            <svg class="icon icon-medkit"><use xlink:href="#icon-medkit"></use></svg>
                        </div>
                    </div>
                    <div class="media-body">
                        <p>Cat costa o coronita? - O coronita metalo-ceramica are pretul de 150 de euro, iar o coronita de zirconiu are pretul de 180 de euro.</p>
                    </div>
                </div>
                
                <div class="media">
                    <div class="media-left">
                        <div class="boxed-icon">
                            <svg class="icon icon-star"><use xlink:href="#icon-star"></use></svg>
                        </div>
                    </div>
                    <div class="media-body">
                        <p>De cate implanturi este nevoie pentru o arcada? - In mod normal, reconstructia unei arcade are nevoie de 6 implanturi dentare si de 12 coronite. Costul total ar fi in jur de 3300 de euro per arcada, sau 6600 de euro pentru toata gura.</p>
                    </div>
                </div>
                
                <div class="media">
                    <div class="media-left">
                        <div class="boxed-icon">
                            <svg class="icon icon-medkit"><use xlink:href="#icon-medkit"></use></svg>
                        </div>
                    </div>
                    <div class="media-body">
                        <p>Se pot pune mai putine implanturi decat numarul de dinti? - Da, pentru inlocuirea a 3 dinti se pot pune de exemplu 2 implanturi si o lucrare cu 3 coronite. Pretul acestei lucrari ar fi de 950 de euro.</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="row">
                <div class="col-lg-12 text-center">
                   <div class="fb-comments" data-href="https://www.dririnaalexandru.ro/implant-dentar-pret/" data-numposts="15" data-colorscheme="light" data-order-by="reverse_time"></div>   
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
    
    
    
    
