using System.ComponentModel.DataAnnotations;

namespace QuizzTiengNhat.Models
{
    public class Exam_Results
    {
        [Key]
        public Guid ResultID { get; set; }
        public string UserID { get; set; }
        public Guid ExamID { get; set; }
        public float Score { get; set; }
        public int TimeSpent { get; set; }
        public DateTime CreatedAt { get; set; }

        // Navigation properties
        public virtual ApplicationUser User { get; set; }
    }
}
