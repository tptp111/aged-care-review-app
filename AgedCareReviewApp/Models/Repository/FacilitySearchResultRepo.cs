using Npgsql;

namespace AgedCareReviewApp.Models;

public static class FacilitySearchResultRepo
{
    //todo configurable connString for prod
    public static string connectionString = "Host=localhost:5432;Username=;Password=;Database=aged-care-review;";

    public static List<FacilitySearchResultView> GetFacilitySearchResults()
    {
        string query = @"SELECT * FROM public.""FacilitySearchResultView"" order by ""AverageOverallScore"" desc;";

        List<FacilitySearchResultView> facilitySearchResultViewList = new List<FacilitySearchResultView>();
        try
        {
            using (var conn = new NpgsqlConnection(connectionString))
            {
                conn.Open();
                using (var command = new NpgsqlCommand(query, conn))
                {
                    var reader = command.ExecuteReader();
                    while (reader.Read())
                    {
                        FacilitySearchResultView facilitySearchResultView = mapFacilitySearchResult(reader);
                        facilitySearchResultViewList.Add(facilitySearchResultView);
                    }

                    reader.Close();
                }
            }
        }
        catch (Exception exception)
        {
            Console.WriteLine("Unable to process reading table due to error= {}", exception);
        }

        return facilitySearchResultViewList;
    }


    public static List<FacilitySearchResultView> GetFacilitySearchResults(string postcode)
    {
        string query = @$"SELECT * FROM public.""FacilitySearchResultView"" where ""Postcode"" = '{postcode}' order by ""AverageOverallScore"" desc;";

        List<FacilitySearchResultView> facilitySearchResultViewList = new List<FacilitySearchResultView>();
        try
        {
            using (var conn = new NpgsqlConnection(connectionString))
            {
                conn.Open();
                using (var command = new NpgsqlCommand(query, conn))
                {
                    var reader = command.ExecuteReader();
                    while (reader.Read())
                    {
                        FacilitySearchResultView facilitySearchResultView = mapFacilitySearchResult(reader);
                        facilitySearchResultViewList.Add(facilitySearchResultView);
                    }

                    reader.Close();
                }
            }
        }
        catch (Exception exception)
        {
            Console.WriteLine("Unable to process reading table due to error= {}", exception);
        }

        return facilitySearchResultViewList;
    }
    
    public static FacilitySearchResultView GetSingleFacilityProfileView(string facilityName)
    {
        string query = @$"SELECT * FROM public.""FacilitySearchResultView"" where ""FacilityName"" = '{facilityName}';";

        FacilitySearchResultView facilitySearchResultView = new FacilitySearchResultView();
        try
        {
            using (var conn = new NpgsqlConnection(connectionString))
            {
                conn.Open();
                using (var command = new NpgsqlCommand(query, conn))
                {
                    var reader = command.ExecuteReader();
                    while (reader.Read())
                    {
                       return mapFacilitySearchResult(reader);
                    }
                    reader.Close();
                }
            }
        }
        catch (Exception exception)
        {
            Console.WriteLine("Unable to process reading table due to error= {}", exception);
        }
        return facilitySearchResultView;
    }

    private static FacilitySearchResultView mapFacilitySearchResult(NpgsqlDataReader reader)
    {
        FacilitySearchResultView facilitySearchResult = new FacilitySearchResultView();
        facilitySearchResult.Id = reader.GetInt32(0);
        facilitySearchResult.FacilityName = reader.GetString(1);
        facilitySearchResult.Street = reader.GetString(2);
        facilitySearchResult.Postcode = reader.GetString(3);
        facilitySearchResult.SuburbName = reader.GetString(4);
        facilitySearchResult.Region = reader.GetString(5);
        facilitySearchResult.Description = reader.GetString(6);
        facilitySearchResult.Amenities = reader.GetString(7);
        facilitySearchResult.FacilityClassification = reader.GetString(8);
        facilitySearchResult.FacilityImagePath = reader.GetString(9);
        facilitySearchResult.OverallScore = Math.Round(reader.GetDouble(10), 1);
        facilitySearchResult.QualityOfCareScore = Math.Round(reader.GetDouble(11), 1);
        facilitySearchResult.StaffScore = Math.Round(reader.GetDouble(12), 1);
        facilitySearchResult.FoodScore = Math.Round(reader.GetDouble(13), 1);
        facilitySearchResult.SafetyScore = Math.Round(reader.GetDouble(14), 1);
        facilitySearchResult.ActivityProgramsScore = Math.Round(reader.GetDouble(15), 1);
        facilitySearchResult.AmenitiesScore = Math.Round(reader.GetDouble(16), 1);
        facilitySearchResult.TotalNumberOfReviews = reader.GetInt32(17);
        return facilitySearchResult;
    }
}