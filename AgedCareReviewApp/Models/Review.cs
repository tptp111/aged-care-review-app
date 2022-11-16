using System.ComponentModel.DataAnnotations;

namespace AgedCareReviewApp.Models;

public class Review
{
    public int Id { get; set; }
    public string InitialReviewDate { get; set; }
    public string LastReviewDate { get; set; }
    [Required]
    public string FeedbackComments { get; set; }
    [Required]
    public int OverallScore { get; set; } 
    [Required]
    public int QualityOfCareScore { get; set; }
    [Required]
    public int StaffScore { get; set; } 
    [Required]
    public int FoodScore { get; set; } 
    [Required]
    public int AmenitiesScore { get; set; } 
    [Required]
    public int SafetyScore { get; set; } 
    [Required]
    public int ActivityProgramsScore { get; set; }
    public bool ReviewValidated { get; set; } = false;
    [Required]
    public string FacilityName  { get; set; }
    [Required]
    public int UserId { get; set; }
}