using QuizzTiengNhat.Models;

namespace QuizzTiengNhat.Services
{
    public interface ITokenService
    {
        Task<String> CreateToken(ApplicationUser user);
    }
}
