using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AgedCareReviewApp.Migrations
{
    /// <inheritdoc />
    public partial class addGovValidation : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsValidated",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "ValidationCode",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "UserEmail",
                table: "Reviews");

            migrationBuilder.RenameColumn(
                name: "ValidationType",
                table: "Users",
                newName: "MedicareCardNumber");

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "Reviews",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Reviews");

            migrationBuilder.RenameColumn(
                name: "MedicareCardNumber",
                table: "Users",
                newName: "ValidationType");

            migrationBuilder.AddColumn<bool>(
                name: "IsValidated",
                table: "Users",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "ValidationCode",
                table: "Users",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "UserEmail",
                table: "Reviews",
                type: "text",
                nullable: false,
                defaultValue: "");
        }
    }
}
