$().ready(function(){
    // All'inizio gli elementi individuati non sono evidenziati:
    var highlight_active = false;
    
    // Funzione che viene eseguita quando l'utente clicca sul pulsante per attivare l'highlighting:
    $("#highlight-button").click(function(){
        if(highlight_active) { 
            // se al momento gli elementi codificati sono evidenziati, disattivo l'highlighting:
            highlight_active = false;
            // rimuovo la classe .active da tutti gli elementi che la hanno:
            $(".active").removeClass("active");
            // aggiorno il testo del pulsante:
            $(this).text("Note");
            // nascondo la legenda dei colori:
            $("#colors").css("display", "none");
        } else { 
            // se al momento gli elementi codificati non sono evidenziati, attivo l'highlighting:
            highlight_active = true;
            // aggiungo la classe active a tutti gli elementi codificati:
            $(".term, .date, .persName, .placeName, .orgName").addClass("active");
            // aggiorno il testo del pulsante:
            $(this).text("Note");
            // mostro la legenda dei colori:
            $("#colors").css("display", "block");
        }
    });

    // Funzione che colora le tei:zone sull'immagine (e il corrispettivo paragrafo) 
    // quando l'utente passa loro sopra con il mouse:
    $('rect').mouseover(function() {
        // ottengo l'id dell'elemento corrente e aggiungo all'elemento corrente la classe highlighted:
        var facs = $(this).attr('id');
        $(this).addClass("highlighted");
        // aggiungo la classe highlighted anche al paragrafo di testo codificato corrispondente:
        $('*[ data-facs= "#'+facs+'" ]').addClass("highlighted");
    });
    
    // Funzione che toglie il colore dalle tei:zone sull'immagine (e dal corrispettivo paragrafo) 
    // quando l'utente sposta il mouse:
    $('rect').mouseout(function(){ 
        // ottengo l'id dell'elemento corrente e rimuovo all'elemento corrente la classe highlighted:
        var facs = $(this).attr('id');
        $(this).removeClass("highlighted");
        // rimuovo la classe highlighted anche al paragrafo di testo codificato corrispondente:
        $('*[ data-facs= "#'+facs+'" ]').removeClass("highlighted");  
    });

    // Funzione che colora i paragrafi (e la tei:zone corrispondente) 
    // quando l'utente passa loro sopra con il mouse:
    $('*[data-facs]').mouseover(function() {
        // ottengo l'id della tei:zone prendendolo dall'attributo data-facs dell'elemento corrente:
        var facs = $(this).attr('data-facs').substring(1); // substring(1) rimuove il primo carattere, ossia '#'

        // se facs è vuoto allora non bisogna evidenziare niente:
        if(facs == '') return;

        // aggiungo all'elemento corrente e alla tei:zone corrispondente la classe highlighted:
        $(this).addClass("highlighted");
        $('*[ id="'+facs+'" ]').addClass("highlighted");
    });

    // Funzione che toglie il colore dai paragrafi (e dalla tei:zone corrispondente) 
    // quando l'utente sposta il mouse:
    $('*[data-facs]').mouseout(function(){ 
        // ottengo l'id della tei:zone prendendolo dall'attributo data-facs dell'elemento corrente:
        var facs = $(this).attr('data-facs').substring(1); // substring(1) rimuove il primo carattere, ossia '#'

        // se facs è vuoto allora non bisogna evidenziare niente:
        if(facs == '') return;
        
        // rimuovo dall'elemento corrente e dalla tei:zone corrispondente la classe highlighted:
        $(this).removeClass("highlighted");
        $('*[ id="'+facs+'" ]').removeClass("highlighted");  
    });

    // Funzione che mostra/nasconde il tasto per attivare/disattivare l'highlighting se siamo prima/dopo la sezione dei testi:
    $(window).scroll(function(){
        // se l'utente sta visualizzando i testi, mostra il tasto delle annotazioni:
        if($(window).scrollTop() > $("main").offset().top){
            $("#highlights").show();
        } else { // altrimenti lo nasconde:
            $("#highlights").hide();
        }
    });
});