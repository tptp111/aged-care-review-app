using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace AgedCareReviewApp.Migrations
{
    /// <inheritdoc />
    public partial class baseClassNoConstructor : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Facilities",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    FacilityName = table.Column<string>(type: "text", nullable: false),
                    Street = table.Column<string>(type: "text", nullable: false),
                    Postcode = table.Column<string>(type: "text", nullable: false),
                    SuburbName = table.Column<string>(type: "text", nullable: false),
                    Region = table.Column<string>(type: "text", nullable: false),
                    Description = table.Column<string>(type: "text", nullable: false),
                    Amenities = table.Column<string>(type: "text", nullable: false),
                    FacilityClassification = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Facilities", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Reviews",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    InitialReviewDate = table.Column<string>(type: "text", nullable: false),
                    LastReviewDate = table.Column<string>(type: "text", nullable: false),
                    FeedbackComments = table.Column<string>(type: "text", nullable: false),
                    OverallScore = table.Column<int>(type: "integer", nullable: false),
                    QualityOfCareScore = table.Column<int>(type: "integer", nullable: false),
                    StaffScore = table.Column<int>(type: "integer", nullable: false),
                    FoodScore = table.Column<int>(type: "integer", nullable: false),
                    AmenitiesScore = table.Column<int>(type: "integer", nullable: false),
                    SafetyScore = table.Column<int>(type: "integer", nullable: false),
                    ActivityProgramsScore = table.Column<int>(type: "integer", nullable: false),
                    ReviewValidated = table.Column<bool>(type: "boolean", nullable: false),
                    FacilityName = table.Column<string>(type: "text", nullable: false),
                    UserEmail = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reviews", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Suburbs",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    SuburbName = table.Column<string>(type: "text", nullable: false),
                    RegionName = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Suburbs", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Email = table.Column<string>(type: "text", nullable: false),
                    FirstName = table.Column<string>(type: "text", nullable: false),
                    LastName = table.Column<string>(type: "text", nullable: false),
                    IsResident = table.Column<bool>(type: "boolean", nullable: false),
                    ValidationType = table.Column<string>(type: "text", nullable: false),
                    ValidationCode = table.Column<string>(type: "text", nullable: false),
                    IsValidated = table.Column<bool>(type: "boolean", nullable: false),
                    FacilityName = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Facilities");

            migrationBuilder.DropTable(
                name: "Reviews");

            migrationBuilder.DropTable(
                name: "Suburbs");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
