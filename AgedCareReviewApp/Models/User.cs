using System.ComponentModel.DataAnnotations;

namespace AgedCareReviewApp.Models;

public class User
{
    public int Id { get; set; }
    [Required]
    public string Email { get; set; }
    [Required]
    public string FirstName { get; set; }
    [Required]
    public string LastName { get; set; }
    public bool IsResident { get; set; } = true;
    [Required]
    public string MedicareCardNumber { get; set; }
    [Required]
    public string FacilityName  { get; set; }
}
