using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace AgedCareReviewApp.Models;

public class User : IdentityUser
{
    public string FirstName { get; set; } = "";
    public string LastName { get; set; } = "";
    public bool IsResident { get; set; } = true;
    public string MedicareNumber { get; set; } = "";
    public string FacilityName { get; set; } = "";
}
