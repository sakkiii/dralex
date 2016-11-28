---
layout: default
title: Oferta implant dentar pret 250 de euro. Bont protetic inclus, consultatie gratuita.
noindex: true
---

<!-- Start Hero -->

{% include hero.html %}

<!-- End Hero -->


<!-- Start About -->
<div id="oabout" class="about">
    <div class="container-fluid">
        <h2 class="section-title">Oferta implant dentar 250 euro</h2>
        
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2 text-center">
                <img class="img-responsive" src="/img/implant250.jpg" alt="Implant dentar pret 250 euro">
            </div>
            <br/><br/>
        </div>

        <div class="row">
            <br/><br/>

            <div class="col-sm-6">
                <h3>Oferta implant dentar</h3>
                <p>Sunt medic dentist cu experiență de peste 10 ani (dintre care 2 ani în Marea Britanie). Sunt printre primii dentisti din Bucuresti care au inceput sa promoveze tratamentul cu implanturi dentare de calitate la preturi accesibile. Am realizat ca reducand pretul manoperei voi reusi sa ofer acest tratament optim unui numar mai mare de pacienti. Acest lucru a fost apreciat imediat de pacienti deoarece alegand implantul dentar se evita clasica "pilire" a dintilor pentru realizarea unei punti dentare. Marturiile acestora le puteti citi si pe pagina de Facebook <a href="{{site.facebook}}/reviews" target="_blank">Dr Irina Alexandru</a></p>

            </div>
            <div class="col-sm-6">
                 <div class="media">
                    <div class="media-left">
                        <div class="boxed-icon">
                            <svg class="icon icon-heart"><use xlink:href="#icon-heart"></use></svg>
                        </div>
                    </div>
                    <div class="media-body">
                        <p>Ce este implantul dentar? - Implantul dentar este un surub din titan folosit pentru de a inlocui radacina unuia sau mai multor dinti lipsa. In cadrul ofertei folosim implanturi Alpha Bio.</p>
                    </div>
                </div>

                <div class="media">
                    <div class="media-left">
                        <div class="boxed-icon">
                            <svg class="icon icon-medkit"><use xlink:href="#icon-medkit"></use></svg>
                        </div>
                    </div>
                    <div class="media-body">
                        <p>Cat dureaza interventia? - Plasarea implantului dentar se efectueaza intr-o singura sedinta de aproximativ o ora. Procesul de osteointegrare dureaza in general 3 luni. Dupa 3 luni se pot finaliza si lucrarile dentare pe implant, tratament care dureaza in medie inca 10 zile.</p>
                    </div>
                </div>
                
                 <p>Ma puteti contacta telefonic <a href="tel:{{ site.contact.phone }}" style="color:#3dadb2"><svg class="icon icon-phone"><use xlink:href="#icon-phone"></use></svg></a><strong><a href="tel:{{site.contact.phone}}" style="color:#3dadb2">{{site.contact.phone}}</a></strong> sau pe <strong><a href="{{ site.facebook }}" target="_blank">Facebook</a></strong></p>
            </div>
        </div>
        
        <div class="row">
                <div class="col-lg-12 text-center">
                   <div class="fb-comments" data-href="https://www.dririnaalexandru.ro/oferte-implant-dentar/" data-numposts="15" data-colorscheme="light" data-order-by="reverse_time"></div>   
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
    
    
    
    
