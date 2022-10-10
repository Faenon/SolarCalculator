$(document).ready(function() {
    let modul_400w = 400;
    let kosten_modul_400w = 249; //Quelle Ebay.de
    let kostengesamt_in_Euro = (modul_400w * 2,5)*1500; // Quelle ( die Formel ist unten seperat benutzt worden) : https://www.solaranlagen-portal.de/photovoltaik/preis-solar-kosten.html
  
    $("#table0").hide();
    $("#table30").hide();
    $("#table45").hide();
    $("#table60").hide();
    $("#table1").hide();
    $("#table2").hide();
    $("#table3").hide();
    $("#table4").hide();
    $("#zurueck_zu_den_Anbietern").hide();
    $("#Text_verbergen_vor_Login_zu_Anbieter").hide();
    $("#button_Daten_uebernehmen2").hide();
   
	$("#buttonberechnen").mouseup(function() {
        let KWH = $("#kwh").val()*1;
        let kostenkwh = $("#kwh-Preis").val()*1;
        let Tagesverbrauch = KWH / 360;
        let kostenjahr = kostenkwh * KWH;
        let min_Tagesleistung = modul_400w*4;
       

       


        // Berechnung mit einer Neigung von 60%
        let Anzahl_400w_module_0_Grad = Math.round((Tagesverbrauch /((min_Tagesleistung)/ 1000) /0.87));
        

        // Berechnung mit einer Neigung von 30%
        let Anzahl_400w_module_nord_30 = Math.round(Tagesverbrauch / ((min_Tagesleistung)/ 1000)/0.61);
        let Anzahl_400w_module_west_30 = Math.round(Tagesverbrauch / ((min_Tagesleistung)/ 1000)/0.82);
        let Anzahl_400w_module_ost_30 = Math.round(Tagesverbrauch / ((min_Tagesleistung)/ 1000)/0.82);
        let Anzahl_400w_module_sued_30 = Math.round(Tagesverbrauch / ((min_Tagesleistung)/ 1000));


         // Berechnung mit einer Neigung von 45%
         let Anzahl_400w_module_nord_45 = Math.round(Tagesverbrauch / ((min_Tagesleistung)/ 1000)/0.475);
         let Anzahl_400w_module_west_45 = Math.round(Tagesverbrauch / ((min_Tagesleistung)/ 1000)/0.77);
         let Anzahl_400w_module_ost_45 = Math.round(Tagesverbrauch / ((min_Tagesleistung)/ 1000)/0.77);
         let Anzahl_400w_module_sued_45 = Math.round(Tagesverbrauch / ((min_Tagesleistung)/ 1000)/0.99);

        // Berechnung mit einer Neigung von 60%

        let Anzahl_400w_module_nord_60 = Math.round(Tagesverbrauch / ((min_Tagesleistung)/ 1000)/0.35);
        let Anzahl_400w_module_west_60 = Math.round(Tagesverbrauch / ((min_Tagesleistung)/ 1000)/0.70);
        let Anzahl_400w_module_ost_60 = Math.round(Tagesverbrauch / ((min_Tagesleistung)/ 1000)/0.70);
        let Anzahl_400w_module_sued_60 = Math.round(Tagesverbrauch / ((min_Tagesleistung)/ 1000)/0.94);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


        // Zuweisung bei Flachdach
        $("#Nord_0").html(Anzahl_400w_module_0_Grad );
        $("#West_0").html(Anzahl_400w_module_0_Grad);
        $("#Ost_0").html(Anzahl_400w_module_0_Grad);
        $("#Sued_0").html(Anzahl_400w_module_0_Grad);

        let kostenNord0 = Math.floor((Anzahl_400w_module_0_Grad/2.5)*1500);
        let kostenWest0 = Math.floor((Anzahl_400w_module_0_Grad/2.5)*1500);
        let kostenOst0 = Math.floor((Anzahl_400w_module_0_Grad/2.5)*1500);
        let kostenSued0 = Math.floor((Anzahl_400w_module_0_Grad/2.5)*1500);

/*

    Rechnung für die Amortisierung

        let JahrenNord0 = Math.round( (kostenNord0 /  kostenjahr)* 12 );
                let MonatNord0 = JahrenNord0%12;
                let JahreNord0 = Math.floor(JahrenNord0/12);
        let Jahrenwest0 = Math.round((kostenWest0  / kostenjahr)*12 );
                let MonatWest0 = Jahrenwest0%12;
                let JahreWest0 = Math.round(Jahrenwest0/12);
        let JahrenOst0 = Math.round(  (kostenOst0 / kostenjahr)*12);
                let MonatOdt0 = JahrenOst0%12;
                let JahreOst0 = Math.round(JahrenOst0/12);
        let Jahrensued0 = Math.round(  (kostenSued0 /kostenjahr) * 12 );
                let MonatSued0 = Jahrensued0%12;
                let JahreSued0 = Math.round(Jahrensued0/12);
*/

        // Zuweisung Kosten bei Flachdach
        $("#kosten0Nord").html(kostenNord0+",- € ");
        $("#kosten0West").html(kostenWest0+",- € ");
        $("#kosten0Ost").html(kostenOst0+",- € ");
        $("#kosten0Sued").html(kostenSued0+",- € ");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Zuweisung bei 30° Schräge
        $("#Nord30").html(Anzahl_400w_module_nord_30);
        $("#West30").html(Anzahl_400w_module_west_30);
        $("#Ost30").html(Anzahl_400w_module_ost_30);
        $("#Sued30").html(Anzahl_400w_module_sued_30);

        let kostenNord30 = Math.floor(( Anzahl_400w_module_nord_30/2.5)*1500);
        let kostenWest30 = Math.floor((Anzahl_400w_module_west_30 /2.5)*1500);
        let kostenOst30 = Math.floor(( Anzahl_400w_module_ost_30/2.5)*1500);
        let kostenSued30 = Math.floor((Anzahl_400w_module_sued_30 /2.5)*1500);

/*

    Rechnung für die Amortisierung

        let JahrenNord30 = Math.round( (kostenNord30 /  kostenjahr)*12 );
                let MonatNord30 = JahrenNord30%12;
                let JahreNord30 = Math.floor(JahrenNord30/12);
        let Jahrenwest30 = Math.round( (kostenWest30  / kostenjahr) * 12 );
                let MonatWest30 = Jahrenwest30%12;
                let JahreWest30 = Math.floor(Jahrenwest30/12);
        let JahrenOst30 = Math.round(  (kostenOst30 / kostenjahr)*12);
                let MonatOst30 = JahrenOst30%12;
                let JahreOst30 = Math.floor(JahrenOst30/12);
        let Jahrensued30 = Math.round(  (kostenSued30 /kostenjahr)*12 );
                let MonatSued30 = Jahrensued30%12;
                let JahreSued30 = Math.floor(Jahrensued30/12);

*/
         // Zuweisung Kosten 30°
        $("#kosten30Nord").html(kostenNord30+",- € ");
        $("#kosten30West").html(kostenWest30+",- € ");
        $("#kosten30Ost").html(kostenOst30+",- € ");
        $("#kosten30Sued").html(kostenSued30+",- € ");
 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
         // Zuweisung bei 45° Schräge
         $("#Nord45").html(Anzahl_400w_module_nord_45);
         $("#West45").html(Anzahl_400w_module_west_45);
         $("#Ost45").html(Anzahl_400w_module_ost_45);
         $("#Sued45").html(Anzahl_400w_module_sued_45);

         let kostenNord45 = Math.floor((Anzahl_400w_module_nord_45 /2.5)*1500);
         let kostenWest45 = Math.floor((Anzahl_400w_module_west_45 /2.5)*1500);
         let kostenOst45 = Math.floor((Anzahl_400w_module_ost_45 /2.5)*1500);
         let kostenSued45 = Math.floor((Anzahl_400w_module_sued_45 /2.5)*1500);


 /*

    Rechnung für die Amortisierung        
         let JahrenNord45 = Math.round( (kostenNord45 /  kostenjahr)*12 );
                let MonatNord45 = JahrenNord45%12;
                let JahreNord45 = Math.floor(JahrenNord45/12);
         let Jahrenwest45 = Math.round( (kostenWest45  / kostenjahr)*12 );
                let Monatwest45 = Jahrenwest45%12;
                let Jahrewest45 = Math.floor(Jahrenwest45/12);
         let JahrenOst45 = Math.round(  (kostenOst45 / kostenjahr)*12);
                let Monatost45 = JahrenOst45%12;
                let Jahreost45 = Math.floor(JahrenOst45/12);
         let Jahrensued45 = Math.round(  (kostenSued45 /kostenjahr)*12 );
                let Monatsued45 = Jahrensued45%12;
                let Jahresued45 = Math.floor(Jahrensued45/12);
*/
         // Zuweisung Kosten 45° 
         $("#kosten45Nord").html(kostenNord45+",- € ");
         $("#kosten45West").html(kostenWest45+",- € ");
         $("#kosten45Ost").html(kostenOst45+",- € ");
         $("#kosten45Sued").html(kostenSued45+",- € ");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Zuweisung bei 60° Schräge
        $("#Nord60").html(Anzahl_400w_module_nord_60);
        $("#West60").html(Anzahl_400w_module_west_60);
        $("#Ost60").html(Anzahl_400w_module_ost_60);
        $("#Sued60").html(Anzahl_400w_module_sued_60);

        let kostenNord60 = Math.floor((Anzahl_400w_module_nord_60/2.5)*1500);
         let kostenWest60 = Math.floor((Anzahl_400w_module_west_60/2.5)*1500);
         let kostenOst60 = Math.floor((Anzahl_400w_module_ost_60/2.5)*1500);
         let kostenSued60 = Math.floor((Anzahl_400w_module_sued_60/2.5)*1500);
/*

    Rechnung für die Amortisierung
         let JahrenNord60 = Math.round( (kostenNord60 /  kostenjahr)*12 );
                let MonatNord60 = JahrenNord60%12;
                let JahreNord60 = Math.floor(JahrenNord60/12);
         let Jahrenwest60 = Math.round((kostenWest60  / kostenjahr)*12 );
                let Monatwest60 = Jahrenwest60%12;
                let Jahrewest60 = Math.floor(Jahrenwest60/12);
         let JahrenOst60 = Math.round( ( kostenOst60 / kostenjahr)*12);
                let Monatost60 = JahrenOst60%12;
                let Jahreost60 = Math.floor(JahrenOst60/12);
         let Jahrensued60 = Math.round(  (kostenSued60 /kostenjahr)*12 );
                let Monatsued60 = Jahrensued60%12;
                let Jahresued60 = Math.floor(Jahrensued60/12);
*/

         // Zuweisung bei 60° Schräge
         $("#kosten60Nord").html(kostenNord60+",- € ");
         $("#kosten60West").html(kostenWest60+",- € ");
         $("#kosten60Ost").html(kostenOst60+",- € ");
         $("#kosten60Sued").html(kostenSued60+",- € ");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////      

//////////////Karte////////////////////////////////////////////////////////////////////////////////////////////////


        
       // Tabellen einblenden 
       $("#table30").show();
       $("#table45").show();
       $("#table60").show();
       $("#table1").show();
       $("#table2").show();
       $("#table3").show();
       $("#table4").show();

	});

//////////////////////////////////////////////////////////
 // Hier die Lgig der Datenübernahme der Karte
 $("#button_Daten_uebernehmen").mouseup(function() {
        $("#button_Daten_uebernehmen2").show();
      
 });

 /*$(".versenden_daten_Anbieter").mouseup(function() {
       
        $(".versenden_daten_Anbieter").hide();
        $("#formLogin").hide();
        alert("Ihre Daten werden zum Anbieter versendet, sobald Sie sich angemeldet haben." );
        $("#zurueck_zu_den_Anbietern").show();
        $("#Text_verbergen_vor_Login_zu_Anbieter").show();

 });*/

 $(".zum_Anbieter_ohne_Anmeldung").mouseup(function() {
       alert("Jetzt werden Sie zum Anbieter weitergeleitet");

 });
    //////////////////////////////////////////////////////////
    // Anmeldeseite
    $(".versenden_daten_Anbieter").on("click", function () {
        let email = $("#Email").val();
        let passwort = $("#Password").val();

        $.post("Nutzer/login",
            {
                email: email,
                passwort: passwort
            },
            function (data, status) {
                if (data == true) {
                    $.post("Vertrag/erstelleVertrag",
                        {
                            AnbieterID: 3,
                            NutzerID: 9,
                            stromspeicher: false,
                            verpachtung: false,
                            gesamtkosten: 10000
                        },
                        function (data, status) {
                            $("#formLogin").hide();
                            alert("Der Login war erfolgreich und Ihre Daten wurden zum Anbieter versendet. Er wird sich zeitnah mit Ihnen in Verbindung setzen!");
                            $("#zurueck_zu_den_Anbietern").show();
                            $("#Text_verbergen_vor_Login_zu_Anbieter").show();
                        }
                    )
                } else {
                    alert("Der Login war nicht erfolgreich!");
                }
            }
        )
    });

    $("#Einloggen").on("click", function () {
        let email = $("#Email").val();
        let passwort = $("#Password").val();

        $.post("Nutzer/login",
            {
                email: email,
                passwort: passwort
            },
            function (data, status) {
                if (data == true) {
                    location.href = "Kartenhtml/Karteleaflet.html";
                } else {
                    alert("Der Login war nicht erfolgreich!");
                }
            }
        )
    });


});
