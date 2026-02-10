using System.ComponentModel.DataAnnotations;

namespace QuizzTiengNhat.Models
{
    public class Questions
    {
        [Key]
        public Guid QuestionID { get; set; }
        public Guid LevelID { get; set; }
        public Guid LessonID { get; set; }
        public string Content { get; set; }
        public string QuestionType { get; set; } // MultipleChoice, TrueFalse...
        public string AudioURL { get; set; }
        public int Difficulty { get; set; }
        public string Explanation { get; set; }

        // Navigation properties
        public virtual Lessons Lesson { get; set; }
        //public virtual ICollection<Answers> Answers { get; set; }
    }
}
