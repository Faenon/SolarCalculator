
$(document).ready(function() {
    let modul_400w = 400;
    let kosten_modul_400w = 249; //Quelle Ebay.de
  
    $("#table0").hide();
    $("#table30").hide();
    $("#table45").hide();
    $("#table60").hide();
    $("#table1").hide();
    $("#table2").hide();
    $("#table3").hide();
    $("#table4").hide();
    $("#button_Daten_uebernehmen2").hide();
   
	$("#buttonberechnen").mouseup(function() {
        let KWH = $("#kwh").val()*1;
        let kostenkwh = $("#kwh-Preis").val()*1;

        let Tagesverbrauch = KWH / 360;
        let kostenjahr = kostenkwh * KWH;

        // Berechnung mit einer Neigung von 60%
        let Anzahl_400w_module_0_Grad = Math.round(Tagesverbrauch / ((4*modul_400w)/ 1000)/0.87);

        // Berechnung mit einer Neigung von 30%
        let Anzahl_400w_module_nord_30 = Math.round(Tagesverbrauch / ((4*modul_400w)/ 1000)/0.61);
        let Anzahl_400w_module_west_30 = Math.round(Tagesverbrauch / ((4*modul_400w)/ 1000)/0.82);
        let Anzahl_400w_module_ost_30 = Math.round(Tagesverbrauch / ((4*modul_400w)/ 1000)/0.82);
        let Anzahl_400w_module_sued_30 = Math.round(Tagesverbrauch / ((4*modul_400w)/ 1000));


         // Berechnung mit einer Neigung von 45%
         let Anzahl_400w_module_nord_45 = Math.round(Tagesverbrauch / ((4*modul_400w)/ 1000)/0.475);
         let Anzahl_400w_module_west_45 = Math.round(Tagesverbrauch / ((4*modul_400w)/ 1000)/0.77);
         let Anzahl_400w_module_ost_45 = Math.round(Tagesverbrauch / ((4*modul_400w)/ 1000)/0.77);
         let Anzahl_400w_module_sued_45 = Math.round(Tagesverbrauch / ((4*modul_400w)/ 1000)/0.99);

        // Berechnung mit einer Neigung von 60%

        let Anzahl_400w_module_nord_60 = Math.round(Tagesverbrauch / ((4*modul_400w)/ 1000)/0.35);
        let Anzahl_400w_module_west_60 = Math.round(Tagesverbrauch / ((4*modul_400w)/ 1000)/0.70);
        let Anzahl_400w_module_ost_60 = Math.round(Tagesverbrauch / ((4*modul_400w)/ 1000)/0.70);
        let Anzahl_400w_module_sued_60 = Math.round(Tagesverbrauch / ((4*modul_400w)/ 1000)/0.94);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


        // Zuweisung bei Flachdach
        $("#Nord_0").html(Anzahl_400w_module_0_Grad );
        $("#West_0").html(Anzahl_400w_module_0_Grad);
        $("#Ost_0").html(Anzahl_400w_module_0_Grad);
        $("#Sued_0").html(Anzahl_400w_module_0_Grad);

        let kostenNord0 = Anzahl_400w_module_0_Grad*kosten_modul_400w;
        let kostenWest0 = Anzahl_400w_module_0_Grad*kosten_modul_400w;
        let kostenOst0 = Anzahl_400w_module_0_Grad*kosten_modul_400w;
        let kostenSued0 = Anzahl_400w_module_0_Grad*kosten_modul_400w;

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


        // Zuweisung Kosten bei Flachdach
        $("#kosten0Nord").html(kostenNord0+",- € <br> Rechnet sich nach ca "+JahreNord0+" Jahren und "+ MonatNord0+" Monate");
        $("#kosten0West").html(kostenWest0+",- € <br> Rechnet sich nach ca "+JahreWest0+" Jahren und " +MonatWest0 + " Monate");
        $("#kosten0Ost").html(kostenOst0+",- € <br> Rechnet sich nach ca "+JahreOst0+" Jahren und "+MonatOdt0+ " Monate");
        $("#kosten0Sued").html(kostenSued0+",- € <br> Rechnet sich nach ca "+JahreSued0+" Jahren und " + MonatSued0+ " Monate");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Zuweisung bei 30° Schräge
        $("#Nord30").html(Anzahl_400w_module_nord_30);
        $("#West30").html(Anzahl_400w_module_west_30);
        $("#Ost30").html(Anzahl_400w_module_ost_30);
        $("#Sued30").html(Anzahl_400w_module_sued_30);

        let kostenNord30 = Anzahl_400w_module_nord_30*kosten_modul_400w;
        let kostenWest30 = Anzahl_400w_module_west_30*kosten_modul_400w;
        let kostenOst30 = Anzahl_400w_module_ost_30*kosten_modul_400w;
        let kostenSued30 = Anzahl_400w_module_sued_30*kosten_modul_400w;

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


         // Zuweisung Kosten 30°
        $("#kosten30Nord").html(kostenNord30+",- € <br> Rechnet sich nach ca "+JahreNord30+ " Jahren und "+MonatNord30+" Monate");
        $("#kosten30West").html(kostenWest30+",- € <br> Rechnet sich nach ca "+JahreWest30+" Jahen und " + MonatWest30+ " Monate");
        $("#kosten30Ost").html(kostenOst30+",- € <br> Rechnet sich nach ca "+JahreOst30+" Jahren und "+MonatOst30+" Monate");
        $("#kosten30Sued").html(kostenSued30+",- € <br> Rechnet sich nach ca "+JahreSued30+" Jahren und "+ MonatSued30+ " Monate");
 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
         // Zuweisung bei 45° Schräge
         $("#Nord45").html(Anzahl_400w_module_nord_45);
         $("#West45").html(Anzahl_400w_module_west_45);
         $("#Ost45").html(Anzahl_400w_module_ost_45);
         $("#Sued45").html(Anzahl_400w_module_sued_45);

         let kostenNord45 = Anzahl_400w_module_nord_45*kosten_modul_400w;
         let kostenWest45 = Anzahl_400w_module_west_45*kosten_modul_400w;
         let kostenOst45 = Anzahl_400w_module_ost_45*kosten_modul_400w;
         let kostenSued45 = Anzahl_400w_module_sued_45*kosten_modul_400w;

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

         // Zuweisung Kosten 45° 
         $("#kosten45Nord").html(kostenNord45+",- € <br> Rechnet sich nach ca "+JahreNord45+" Jahren und "+MonatNord45+" Monate");
         $("#kosten45West").html(kostenWest45+",- € <br> Rechnet sich nach ca "+Jahrewest45+" Jahren und "+Monatwest45+ " Monate");
         $("#kosten45Ost").html(kostenOst45+",- € <br> Rechnet sich nach ca "+Jahreost45+" Jahren und " +Monatost45+ " Monate");
         $("#kosten45Sued").html(kostenSued45+",- € <br> Rechnet sich nach ca "+Jahresued45+" Jahren und "+Monatsued45 + " Monate");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Zuweisung bei 60° Schräge
        $("#Nord60").html(Anzahl_400w_module_nord_60);
        $("#West60").html(Anzahl_400w_module_west_60);
        $("#Ost60").html(Anzahl_400w_module_ost_60);
        $("#Sued60").html(Anzahl_400w_module_sued_60);

        let kostenNord60 = Anzahl_400w_module_nord_60*kosten_modul_400w;
         let kostenWest60 = Anzahl_400w_module_west_60*kosten_modul_400w;
         let kostenOst60 = Anzahl_400w_module_ost_60*kosten_modul_400w;
         let kostenSued60 = Anzahl_400w_module_sued_60*kosten_modul_400w;

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


         // Zuweisung bei 60° Schräge
         $("#kosten60Nord").html(kostenNord60+",- € <br> Rechnet sich nach ca "+JahreNord60+" Jahren und "+MonatNord60+ " Monate");
         $("#kosten60West").html(kostenWest60+",- € <br> Rechnet sich nach ca "+Jahrewest60+" Jahren und "+ Monatwest60+ " Monate");
         $("#kosten60Ost").html(kostenOst60+",- € <br> Rechnet sich nach ca "+Jahreost60+" Jahren und "+Monatost60+" Monate");
         $("#kosten60Sued").html(kostenSued60+",- € <br> Rechnet sich nach ca "+Jahresued60+" Jahren und "+Monatsued60+" Monate");

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

	
// Hier Login Logik

	//$("#Einloggen").mouseup(function() {
    //            let mail = $("#Email").val();
    //            let pwd = $("#Password").val();
    //            
    //            
    //            alert("mail und Passwort korrekt");
	//});
//////////////////////////////////////////////////////////
 // Hier die Lgig der Datenübernahme der Karte
 $("#button_Daten_uebernehmen").mouseup(function() {
        $("#button_Daten_uebernehmen2").show();

 });

 //$(".versenden_daten_Anbieter").mouseup(function() {
 //       alert("Ihre Daten wurden erfolgreich zum Anbieter versendet und er wird sich zeitnah mit Ihnen in Verbindung setzen");
 //
 //});


    //////////////////////////////////////////////////////////
    // Anmeldeseite
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


    //////////////////////////////////////////////////////////
    // Daten für Anbieter speichern
    $(".versenden_daten_Anbieter").on("click", function () {

        $.post("Nutzer/login",
            $.post("Vertrag/erstelleVertrag",
                {
                    AnbieterID: 3,
                    NutzerID: 9,
                    stromspeicher: false,
                    verpachtung: false,
                    gesamtkosten: 10000
                },
                function (data, status) {
                    $("#containerEingabe").hide();
                    $("#containerAusgabe").show();
                    alert("Ihre Daten wurden erfolgreich zum Anbieter versendet und er wird sich zeitnah mit Ihnen in Verbindung setzen");
                }
            )
        )
    });


});


