using System.ComponentModel.DataAnnotations;

namespace AgedCareReviewApp.Models;

public class GovernmentValidation
{
    public int Id { get; set; }
    [Required]
    public string MedicareCardNumber { get; set; }
    [Required]
    public string FirstName { get; set; }
    [Required]
    public string LastName { get; set; }
    [Required]
    public string CurrentFacility { get; set; }
}