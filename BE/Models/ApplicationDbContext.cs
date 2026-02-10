using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using QuizzTiengNhat.Models;
namespace QuizzTiengNhat.Models
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) :base(options)
        {

        }
        public DbSet<JLPT_Level> JLPT_Levels { get; set; }
        public DbSet<Lessons> Lessons { get; set; }
        public DbSet<Questions> Questions { get; set; }
        public DbSet<Progress> Progresses { get; set; }
        public DbSet<Exam_Results> Exam_Results { get; set; }
    }
}
