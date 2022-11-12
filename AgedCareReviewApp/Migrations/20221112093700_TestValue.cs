using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AgedCareReviewApp.Migrations
{
    /// <inheritdoc />
    public partial class TestValue : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "TestValue",
                table: "WeatherForecasts",
                type: "text",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TestValue",
                table: "WeatherForecasts");
        }
    }
}
