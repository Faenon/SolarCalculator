using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SolarCalculator.Migrations
{
    public partial class vertrag : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "AnbieterId",
                table: "Vertraege",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "NutzerID",
                table: "Vertraege",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AnbieterId",
                table: "Vertraege");

            migrationBuilder.DropColumn(
                name: "NutzerID",
                table: "Vertraege");
        }
    }
}
