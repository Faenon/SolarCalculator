using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using SolarCalculator.Data;
using System;
using System.Linq;

namespace SolarCalculator.Models
{
    public class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = serviceProvider.GetRequiredService<SolarCalculatorContext>())
            {
                if (context.Nutzer.Any())
                {
                    return; // DB has been seeded.
                }

                //Nutzer erstellen
                Nutzer nutzer1 = new Nutzer
                {
                    vorname = "Peter",
                    name = "Parker",
                    email = "peter.parker@gmx.de",
                    passwort = "123",
                    strasse = "Spinnenweg",
                    hausnummer = "12",
                    ort = "New York",
                    plz = "12345"
                };

                Haus haus1 = new Haus
                {
                    dachfaeche = 10.5M,
                    dachausrichtung = "nord",
                    dachwinkel = 20,
                    plz = "12345",
                    stomkosten = 3.4M,
                    stromverbrauch = 2000,
                    datum = DateTime.Now
                };

                nutzer1.haeuser.Add(haus1);

                Nutzer nutzer2 = new Nutzer
                {
                    vorname = "Natasha",
                    name = "Romanoff",
                    email = "blackwidow@gmail.com",
                    passwort = "456",
                    strasse = "Am Waldrand",
                    hausnummer = "6",
                    ort = "Pampa",
                    plz = "12345"
                };

                Haus haus21 = new Haus
                {
                    dachfaeche = 22.5M,
                    dachausrichtung = "Süd",
                    dachwinkel = 15,
                    plz = "12345",
                    stomkosten = 2.4M,
                    stromverbrauch = 1500,
                    datum = DateTime.Now
                };

                Haus haus22 = new Haus
                {
                    dachfaeche = 15.0M,
                    dachausrichtung = "west",
                    dachwinkel = 25,
                    plz = "12345",
                    stomkosten = 0.7M,
                    stromverbrauch = 3000,
                    datum = DateTime.Now
                };

                nutzer2.haeuser.Add(haus21);
                nutzer2.haeuser.Add(haus22);

                Nutzer nutzer3 = new Nutzer
                {
                    vorname = "Tony",
                    name = "Stark",
                    email = "stark@starkindustries.com",
                    passwort = "000",
                    strasse = "Berlinerstr",
                    hausnummer = "32",
                    ort = "Berlin",
                    plz = "54321"
                };

                Haus haus3 = new Haus
                {
                    dachfaeche = 50.0M,
                    dachausrichtung = "west",
                    dachwinkel = 0,
                    plz = "12345",
                    stomkosten = 1.7M,
                    stromverbrauch = 5000,
                    datum = DateTime.Now
                };

                nutzer3.haeuser.Add(haus3);

                context.Nutzer.Add(nutzer1);
                context.Nutzer.Add(nutzer2);
                context.Nutzer.Add(nutzer3);

                //Anbieter erstellen

                Anbieter anbieter1 = new Anbieter
                {
                    passwort = "456",
                    strasse = "Am Kraftwerk",
                    hausnummer = "1",
                    ort = "Orania City",
                    plz = "12345",
                    firmenbezeichnung = "RWE",
                    email = "rwe@rwe.com",
                    preism = 10M,
                    stromspeicher = 500M,
                    verpachtung = 25M,
                    weitereVorteile = "keine",
                    text = "bla"
                };

                Anbieter anbieter2 = new Anbieter
                {
                    passwort = "456",
                    strasse = "Am Kraftwerk",
                    hausnummer = "1",
                    ort = "Orania City",
                    plz = "12345",
                    firmenbezeichnung = "EWR",
                    email = "ewr@ewr.com",
                    preism = 9.9M,
                    stromspeicher = 350M,
                    verpachtung = 0M,
                    weitereVorteile = "keine",
                    text = "bla"
                };

                Anbieter anbieter3 = new Anbieter
                {
                    passwort = "456",
                    strasse = "Am Kraftwerk",
                    hausnummer = "1",
                    ort = "Orania City",
                    plz = "12345",
                    firmenbezeichnung = "WRE",
                    email = "wre@wre.com",
                    preism = 12.3M,
                    stromspeicher = 0M,
                    verpachtung = 50M,
                    weitereVorteile = "keine",
                    text = "bla"
                };

                Anbieter anbieter4 = new Anbieter
                {
                    passwort = "456",
                    strasse = "Am Kraftwerk",
                    hausnummer = "1",
                    ort = "Orania City",
                    plz = "54321",
                    firmenbezeichnung = "RWE",
                    email = "rwe@rwe.com",
                    preism = 10M,
                    stromspeicher = 500M,
                    verpachtung = 25M,
                    weitereVorteile = "keine",
                    text = "bla"
                };

                Anbieter anbieter5 = new Anbieter
                {
                    passwort = "456",
                    strasse = "Am Kraftwerk",
                    hausnummer = "1",
                    ort = "Orania City",
                    plz = "54321",
                    firmenbezeichnung = "EWR",
                    email = "ewr@ewr.com",
                    preism = 9.9M,
                    stromspeicher = 350M,
                    verpachtung = 0M,
                    weitereVorteile = "keine",
                    text = "bla"
                };

                context.Anbieter.Add(anbieter1);
                context.Anbieter.Add(anbieter2);
                context.Anbieter.Add(anbieter3);
                context.Anbieter.Add(anbieter4);
                context.Anbieter.Add(anbieter5);

                //Vertrag hinzufügen

                Vertrag vertrag1 = new Vertrag
                {
                    AnbieterId = 2,
                    NutzerID = 1,
                    datum = DateTime.Now,
                    status = 2,
                    stromspeicher = true,
                    verpachtung = false,
                    gesamtkosten = 7500M,
                    praemie = 2M,
                    provision = 5M
                };

                context.Vertraege.Add(vertrag1);

                context.SaveChanges();

        

            }
        }

    }
}
