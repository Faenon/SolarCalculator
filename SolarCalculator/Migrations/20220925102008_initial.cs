using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SolarCalculator.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Anbieter",
                columns: table => new
                {
                    AnbieterId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    firmenbezeichnung = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    preism = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    stromspeicher = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    verpachtung = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    weitereVorteile = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    text = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    passwort = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    strasse = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    hausnummer = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    plz = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ort = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Anbieter", x => x.AnbieterId);
                });

            migrationBuilder.CreateTable(
                name: "Nutzer",
                columns: table => new
                {
                    NutzerId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    vorname = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    passwort = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    strasse = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    hausnummer = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    plz = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ort = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Nutzer", x => x.NutzerId);
                });

            migrationBuilder.CreateTable(
                name: "Vertraege",
                columns: table => new
                {
                    VertragId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    datum = table.Column<DateTime>(type: "datetime2", nullable: false),
                    status = table.Column<int>(type: "int", nullable: false),
                    stromspeicher = table.Column<bool>(type: "bit", nullable: false),
                    verpachtung = table.Column<bool>(type: "bit", nullable: false),
                    provision = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    praemie = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    gesamtkosten = table.Column<decimal>(type: "decimal(18,2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vertraege", x => x.VertragId);
                });

            migrationBuilder.CreateTable(
                name: "Haeuser",
                columns: table => new
                {
                    HausId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    dachfaeche = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    dachausrichtung = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    dachwinkel = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    plz = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    stromverbrauch = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    stomkosten = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    datum = table.Column<DateTime>(type: "datetime2", nullable: false),
                    NutzerId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Haeuser", x => x.HausId);
                    table.ForeignKey(
                        name: "FK_Haeuser_Nutzer_NutzerId",
                        column: x => x.NutzerId,
                        principalTable: "Nutzer",
                        principalColumn: "NutzerId");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Haeuser_NutzerId",
                table: "Haeuser",
                column: "NutzerId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Anbieter");

            migrationBuilder.DropTable(
                name: "Haeuser");

            migrationBuilder.DropTable(
                name: "Vertraege");

            migrationBuilder.DropTable(
                name: "Nutzer");
        }
    }
}
