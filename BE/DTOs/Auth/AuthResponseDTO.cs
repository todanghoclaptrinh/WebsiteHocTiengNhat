namespace QuizzTiengNhat.DTOs.Auth
{
    public class AuthResponseDTO
    {
        public string Token { get; set; }
        public string Email { get; set; }
        public IList<string> Roles { get; set; }
    }
}
