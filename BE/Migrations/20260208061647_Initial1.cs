using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace QuizzTiengNhat.Migrations
{
    /// <inheritdoc />
    public partial class Initial1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_JLPT_Levels_LevelID",
                table: "AspNetUsers");

            migrationBuilder.AlterColumn<Guid>(
                name: "LevelID",
                table: "AspNetUsers",
                type: "uuid",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "uuid");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_JLPT_Levels_LevelID",
                table: "AspNetUsers",
                column: "LevelID",
                principalTable: "JLPT_Levels",
                principalColumn: "LevelID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_JLPT_Levels_LevelID",
                table: "AspNetUsers");

            migrationBuilder.AlterColumn<Guid>(
                name: "LevelID",
                table: "AspNetUsers",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                oldClrType: typeof(Guid),
                oldType: "uuid",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_JLPT_Levels_LevelID",
                table: "AspNetUsers",
                column: "LevelID",
                principalTable: "JLPT_Levels",
                principalColumn: "LevelID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
