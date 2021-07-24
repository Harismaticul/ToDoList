using Microsoft.EntityFrameworkCore.Migrations;

namespace ToDoList.BLL.Migrations
{
    public partial class UserNameRemoved : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserName",
                table: "ToDoItemsData");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UserName",
                table: "ToDoItemsData",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
