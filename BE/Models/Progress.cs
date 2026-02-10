using System.ComponentModel.DataAnnotations;

namespace QuizzTiengNhat.Models
{
    public class Progress
    {
        [Key]
        public Guid ProgressID { get; set; }
        public string UserID { get; set; } // Khóa ngoại trỏ đến AspNetUsers
        public Guid LevelID { get; set; }
        public Guid LessonsID { get; set; }
        public string Status { get; set; } // Dùng string để lưu Enum ProgressStatus
        public DateTime LastAccessed { get; set; }
        public DateTime CompletedAt { get; set; }

        // Navigation properties
        public virtual ApplicationUser User { get; set; }
        public virtual Lessons Lesson { get; set; }
    }
}
