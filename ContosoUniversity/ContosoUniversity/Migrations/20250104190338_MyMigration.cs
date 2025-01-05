using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ContosoUniversity.Migrations
{
    /// <inheritdoc />
    public partial class MyMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CourseInstructor_Instructor_InstructorsId",
                table: "CourseInstructor");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "Instructor");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Instructor",
                newName: "ID");

            migrationBuilder.RenameColumn(
                name: "HirDate",
                table: "Instructor",
                newName: "HireDate");

            migrationBuilder.RenameColumn(
                name: "InstructorsId",
                table: "CourseInstructor",
                newName: "InstructorsID");

            migrationBuilder.RenameIndex(
                name: "IX_CourseInstructor_InstructorsId",
                table: "CourseInstructor",
                newName: "IX_CourseInstructor_InstructorsID");

            migrationBuilder.AlterColumn<string>(
                name: "FirstName",
                table: "Instructor",
                type: "nvarchar(50)",
                maxLength: 50,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AddColumn<string>(
                name: "LastName",
                table: "Instructor",
                type: "nvarchar(50)",
                maxLength: 50,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddForeignKey(
                name: "FK_CourseInstructor_Instructor_InstructorsID",
                table: "CourseInstructor",
                column: "InstructorsID",
                principalTable: "Instructor",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CourseInstructor_Instructor_InstructorsID",
                table: "CourseInstructor");

            migrationBuilder.DropColumn(
                name: "LastName",
                table: "Instructor");

            migrationBuilder.RenameColumn(
                name: "ID",
                table: "Instructor",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "HireDate",
                table: "Instructor",
                newName: "HirDate");

            migrationBuilder.RenameColumn(
                name: "InstructorsID",
                table: "CourseInstructor",
                newName: "InstructorsId");

            migrationBuilder.RenameIndex(
                name: "IX_CourseInstructor_InstructorsID",
                table: "CourseInstructor",
                newName: "IX_CourseInstructor_InstructorsId");

            migrationBuilder.AlterColumn<string>(
                name: "FirstName",
                table: "Instructor",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(50)",
                oldMaxLength: 50);

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Instructor",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddForeignKey(
                name: "FK_CourseInstructor_Instructor_InstructorsId",
                table: "CourseInstructor",
                column: "InstructorsId",
                principalTable: "Instructor",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
