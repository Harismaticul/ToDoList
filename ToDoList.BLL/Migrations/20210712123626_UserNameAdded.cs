using Microsoft.EntityFrameworkCore.Migrations;

namespace ToDoList.BLL.Migrations
{
    public partial class UserNameAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UserName",
                table: "ToDoItemsData",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserName",
                table: "ToDoItemsData");
        }
    }
}
