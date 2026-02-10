using System.ComponentModel.DataAnnotations;

namespace QuizzTiengNhat.Models
{
    public class Lessons
    {
        [Key]
        public Guid LessonsID { get; set; }
        public Guid LevelID { get; set; } // Foreign Key từ JLPT_Level
        public string Title { get; set; }
        public string SkillType { get; set; } // Vocabulary, Grammar...
        public int Difficulty { get; set; }
        public int Priority { get; set; }

        // Navigation properties
        public virtual JLPT_Level Level { get; set; }
        public virtual ICollection<Progress> Progresses { get; set; }
        public virtual ICollection<Questions> Questions { get; set; }
    }
}
