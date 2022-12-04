using System.ComponentModel.DataAnnotations;

namespace AgedCareReviewApp.Models;

public class Review
{
    public int Id { get; set; }
    public string InitialReviewDate { get; set; }
    // public string LastReviewDate { get; set; }
    [Required]
    public string FeedbackComments { get; set; }
    [Required]
    public float OverallScore { get; set; }
    [Required]
    public int QualityOfCareScore { get; set; }
    [Required]
    public int FoodScore { get; set; } 
    [Required]
    public int AmenitiesScore { get; set; } 
    [Required]
    public int StaffScore { get; set; }
    [Required]
    public int ActivityProgramsScore { get; set; }
    [Required]
    public int SafetyScore { get; set; }
    public bool ReviewValidated { get; set; } = false;
    [Required]
    public string FacilityName  { get; set; }
    [Required]
    public string FirstName { get; set; }
    [Required]
    public string LastName { get; set; }
    [Required]
    public string UserEmail { get; set; }
    [Required]
    public string MedicareNumber { get; set; }
    [Required]
    public string UserType { get; set; }
}