/* Populate Facility data */
truncate table public."Facilities";
truncate table public."Reviews";

/*
--Carlton
INSERT INTO public."Facilities"
("FacilityName", "Street", "Postcode", "SuburbName", "Region", "Description", "Amenities", "FacilityClassification", "FacilityImagePath")
VALUES('Benetas Aged Care Carlton', '426 Care ST', '3053', 'Carlton', 'Victoria', 'A state of the art facility located in central Melbourne known for their wide range of programs', 'Staff', 'Private', '/images/facility/benetas.png');

INSERT INTO public."Facilities"
("FacilityName", "Street", "Postcode", "SuburbName", "Region", "Description", "Amenities", "FacilityClassification", "FacilityImagePath")
VALUES('Argcare Aged Care Carlton', '200 Respect RD', '3053', 'Carlton', 'Victoria', 'The oldest aged care facility in Melbourne known for their wide range of programs', 'Staff', 'Private', '/images/facility/argcare.png');

INSERT INTO public."Facilities"
("FacilityName", "Street", "Postcode", "SuburbName", "Region", "Description", "Amenities", "FacilityClassification", "FacilityImagePath")
VALUES('Invictus Aged Care Carlton', '123 Facility RD', '3053', 'Carlton', 'Victoria', 'The largest aged care facility in Australia known for their wide range of programs', 'Staff', 'Private', '/images/facility/invictus.png');

INSERT INTO public."Facilities"
("FacilityName", "Street", "Postcode", "SuburbName", "Region", "Description", "Amenities", "FacilityClassification", "FacilityImagePath")
VALUES('Mercy Aged Care Carlton', '513 Park RD', '3053', 'Carlton', 'Victoria', 'An environmentally friendly aged care facility known for their wide range of programs', 'Staff', 'Private', '/images/facility/mercy.png');

INSERT INTO public."Facilities"
("FacilityName", "Street", "Postcode", "SuburbName", "Region", "Description", "Amenities", "FacilityClassification", "FacilityImagePath")
VALUES('Modern Aged Care Carlton', '132 Lygon RD', '3053', 'Carlton', 'Victoria', 'A modern aged care facility known for their wide range of programs', 'Staff', 'Private', '/images/facility/modern.png');
*/
-- Brunswick
INSERT INTO public."Facilities"
("FacilityName", "Street", "Postcode", "SuburbName", "Region", "Description", "Amenities", "FacilityClassification", "FacilityImagePath")
VALUES('Benetas Aged Care Brunswick', '426 Care ST', '3056', 'Brunswick', 'Victoria', 'A state of the art facility located in central Melbourne known for their wide range of programs', 'Staff', 'Private', '/images/facility/benetas.png');

INSERT INTO public."Facilities"
("FacilityName", "Street", "Postcode", "SuburbName", "Region", "Description", "Amenities", "FacilityClassification", "FacilityImagePath")
VALUES('Argcare Aged Care Brunswick', '200 Respect RD', '3056', 'Brunswick', 'Victoria', 'The oldest aged care facility in Melbourne known for their wide range of programs', 'Staff', 'Private', '/images/facility/argcare.png');

INSERT INTO public."Facilities"
("FacilityName", "Street", "Postcode", "SuburbName", "Region", "Description", "Amenities", "FacilityClassification", "FacilityImagePath")
VALUES('Invictus Aged Care Brunswick', '123 Facility RD', '3056', 'Brunswick', 'Victoria', 'The largest aged care facility in Australia known for their wide range of programs', 'Staff', 'Private', '/images/facility/invictus.png');

INSERT INTO public."Facilities"
("FacilityName", "Street", "Postcode", "SuburbName", "Region", "Description", "Amenities", "FacilityClassification", "FacilityImagePath")
VALUES('Mercy Aged Care Brunswick', '513 Park RD', '3056', 'Brunswick', 'Victoria', 'An environmentally friendly aged care facility known for their wide range of programs', 'Staff', 'Private', '/images/facility/mercy.png');

INSERT INTO public."Facilities"
("FacilityName", "Street", "Postcode", "SuburbName", "Region", "Description", "Amenities", "FacilityClassification", "FacilityImagePath")
VALUES('Modern Aged Care Brunswick', '132 Lygon RD', '3056', 'Brunswick', 'Victoria', 'A modern aged care facility known for their wide range of programs', 'Staff', 'Private', '/images/facility/modern.png');

/*
-- Coburg
INSERT INTO public."Facilities"
("FacilityName", "Street", "Postcode", "SuburbName", "Region", "Description", "Amenities", "FacilityClassification", "FacilityImagePath")
VALUES('Benetas Aged Care Coburg', '426 Care ST', '3058', 'Coburg', 'Victoria', 'A state of the art facility located in central Melbourne known for their wide range of programs', 'Staff', 'Private', '/images/facility/benetas.png');

INSERT INTO public."Facilities"
("FacilityName", "Street", "Postcode", "SuburbName", "Region", "Description", "Amenities", "FacilityClassification", "FacilityImagePath")
VALUES('Argcare Aged Care Coburg', '200 Respect RD', '3058', 'Coburg', 'Victoria', 'The oldest aged care facility in Melbourne known for their wide range of programs', 'Staff', 'Private', '/images/facility/argcare.png');

INSERT INTO public."Facilities"
("FacilityName", "Street", "Postcode", "SuburbName", "Region", "Description", "Amenities", "FacilityClassification", "FacilityImagePath")
VALUES('Invictus Aged Care Coburg', '123 Facility RD', '3058', 'Coburg', 'Victoria', 'The largest aged care facility in Australia known for their wide range of programs', 'Staff', 'Private', '/images/facility/invictus.png');

INSERT INTO public."Facilities"
("FacilityName", "Street", "Postcode", "SuburbName", "Region", "Description", "Amenities", "FacilityClassification", "FacilityImagePath")
VALUES('Mercy Aged Care Coburg', '513 Park RD', '3058', 'Coburg', 'Victoria', 'An environmentally friendly aged care facility known for their wide range of programs', 'Staff', 'Private', '/images/facility/mercy.png');

INSERT INTO public."Facilities"
("FacilityName", "Street", "Postcode", "SuburbName", "Region", "Description", "Amenities", "FacilityClassification", "FacilityImagePath")
VALUES('Modern Aged Care Coburg', '132 Lygon RD', '3058', 'Coburg', 'Victoria', 'A modern aged care facility known for their wide range of programs', 'Staff', 'Private', '/images/facility/modern.png');

*/

/*REVIEWS*/

----------benetas brunswick reviews
INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'My dad loved it here and I would highly recommend it', 5, 8, 8, 8, 8, 8, 8, false, 'Benetas Aged Care Brunswick', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');

INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'The staff are friendly and the location is great', 4, 7, 7, 7, 7, 7, 7, false, 'Benetas Aged Care Brunswick', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');

------------invictus brunswick reviews


INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'My dad loved it here and I would highly recommend it', 5, 8, 8, 8, 8, 8, 8, false, 'Invictus Aged Care Brunswick', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');

INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'The staff are friendly and the location is great', 4, 7, 7, 7, 7, 7, 7, false, 'Invictus Aged Care Brunswick', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');

INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'My Mum loved it here and I would highly recommend it', 5, 8, 8, 8, 8, 8, 8, false, 'Invictus Aged Care Brunswick', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');

INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'The staff are friendly and the location is great', 5, 9, 9, 9, 9, 9, 9, false, 'Invictus Aged Care Brunswick', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');


------------argcare brunswick reviews
INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'My dad loved it here and I would highly recommend it', 5, 8, 8, 8, 8, 8, 8, false, 'Argcare Aged Care Brunswick', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');

INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'The staff are friendly and the location is great', 4, 7, 7, 7, 7, 7, 7, false, 'Argcare Aged Care Brunswick', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');

INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'My Mum loved it here and I would highly recommend it', 5, 8, 8, 8, 8, 8, 8, false, 'Argcare Aged Care Brunswick', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');

INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'The staff are friendly and the location is great', 3, 6, 6, 6, 6, 6, 6, false, 'Argcare Aged Care Brunswick', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');


------------mercy brunswick reviews
INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'My dad loved it here and I would highly recommend it', 5, 8, 8, 8, 8, 8, 8, false, 'Mercy Aged Care Brunswick', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');

INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'The staff are friendly and the location is great', 2, 3, 3, 3, 3, 3, 3, false, 'Mercy Aged Care Brunswick', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');

INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'My Mum loved it here and I would highly recommend it', 5, 8, 8, 8, 8, 8, 8, false, 'Mercy Aged Care Brunswick', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');

INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'The staff are friendly and the location is great', 5, 9, 9, 9, 9, 9, 9, false, 'Mercy Aged Care Brunswick', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');


------------modern brunswick reviews
INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'My dad loved it here and I would highly recommend it', 4, 8, 8, 8, 8, 8, 8, false, 'Modern Aged Care Brunswick', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');

INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'The staff are friendly and the location is great', 2, 8, 7, 6, 5, 5, 3, false, 'Modern Aged Care Brunswick', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');

INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'My Mum loved it here and I would highly recommend it', 4, 8, 8, 8, 8, 8, 8, false, 'Modern Aged Care Brunswick', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');

INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'The staff are friendly and the location is great', 4, 9, 9, 9, 9, 9, 9, false, 'Modern Aged Care Brunswick', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');















