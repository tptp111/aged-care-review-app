/* Populate Facility data */
truncate table public."Facilities";
truncate table public."Reviews";

/*Facility */

--Melbourne
INSERT INTO public."Facilities"
("FacilityName", "Street", "Postcode", "SuburbName", "Region", "Description", "Amenities", "FacilityClassification", "FacilityImagePath")
VALUES('Sunrise Aged Care Melbourne', '744 Swanston St', '3000', 'Melbourne', 'Victoria', 'The largest aged care facility in Australia known for their wide range of programs. Has a reputation for its care and welcoming atmosphere, at the hands of a team of dedicated staff. Residents are provided around the clock tailored nursing care, as well as a varied lifestyle program.', 'Staff', 'Private', '/images/facility/sunrises.png');

INSERT INTO public."Facilities"
("FacilityName", "Street", "Postcode", "SuburbName", "Region", "Description", "Amenities", "FacilityClassification", "FacilityImagePath")
VALUES('Dolce Aged Care Melbourne', '952 Bourke St', '3000', 'Melbourne', 'Victoria', 'An environmentally friendly aged care facility known for their wide range of programs. Has a reputation for its care and welcoming atmosphere, at the hands of a team of dedicated staff. Residents are provided around the clock tailored nursing care, as well as a varied lifestyle program.', 'Staff', 'Private', '/images/facility/dolce.png');

INSERT INTO public."Facilities"
("FacilityName", "Street", "Postcode", "SuburbName", "Region", "Description", "Amenities", "FacilityClassification", "FacilityImagePath")
VALUES('Flagstaff Aged Care Melbourne', '12 Elizabeth St', '3000', 'Melbourne', 'Victoria', 'A modern aged care facility known for their wide range of programs. Has a reputation for its care and welcoming atmosphere, at the hands of a team of dedicated staff. Residents are provided around the clock tailored nursing care, as well as a varied lifestyle program.', 'Staff', 'Private', '/images/facility/flagstaff.png');


-- Brunswick
INSERT INTO public."Facilities"
("FacilityName", "Street", "Postcode", "SuburbName", "Region", "Description", "Amenities", "FacilityClassification", "FacilityImagePath")
VALUES('Benevolent Aged Care Brunswick', '426 Care St', '3056', 'Brunswick', 'Victoria', 'A state of the art facility located in central Melbourne known for their wide range of programs. Has a reputation for its care and welcoming atmosphere, at the hands of a team of dedicated staff. Residents are provided around the clock tailored nursing care, as well as a varied lifestyle program.', 'Staff', 'Private', '/images/facility/benetas.png');

INSERT INTO public."Facilities"
("FacilityName", "Street", "Postcode", "SuburbName", "Region", "Description", "Amenities", "FacilityClassification", "FacilityImagePath")
VALUES('Argcare Aged Care Brunswick', '200 Respect Rd', '3056', 'Brunswick', 'Victoria', 'The oldest aged care facility in Melbourne known for their wide range of programs. Has a reputation for its care and welcoming atmosphere, at the hands of a team of dedicated staff. Residents are provided around the clock tailored nursing care, as well as a varied lifestyle program.', 'Staff', 'Private', '/images/facility/argcare.png');

INSERT INTO public."Facilities"
("FacilityName", "Street", "Postcode", "SuburbName", "Region", "Description", "Amenities", "FacilityClassification", "FacilityImagePath")
VALUES('Invictus Aged Care Brunswick', '123 Facility Rd', '3056', 'Brunswick', 'Victoria', 'The largest aged care facility in Australia known for their wide range of programs. Has a reputation for its care and welcoming atmosphere, at the hands of a team of dedicated staff. Residents are provided around the clock tailored nursing care, as well as a varied lifestyle program.', 'Staff', 'Private', '/images/facility/invictus.png');

INSERT INTO public."Facilities"
("FacilityName", "Street", "Postcode", "SuburbName", "Region", "Description", "Amenities", "FacilityClassification", "FacilityImagePath")
VALUES('Mercy Aged Care Brunswick', '513 Park Rd', '3056', 'Brunswick', 'Victoria', 'An environmentally friendly aged care facility known for their wide range of programs. Has a reputation for its care and welcoming atmosphere, at the hands of a team of dedicated staff. Residents are provided around the clock tailored nursing care, as well as a varied lifestyle program.', 'Staff', 'Private', '/images/facility/mercy.png');

INSERT INTO public."Facilities"
("FacilityName", "Street", "Postcode", "SuburbName", "Region", "Description", "Amenities", "FacilityClassification", "FacilityImagePath")
VALUES('Modern Aged Care Brunswick', '132 Lygon Rd', '3056', 'Brunswick', 'Victoria', 'A modern aged care facility known for their wide range of programs. Has a reputation for its care and welcoming atmosphere, at the hands of a team of dedicated staff. Residents are provided around the clock tailored nursing care, as well as a varied lifestyle program.', 'Staff', 'Private', '/images/facility/modern.png');


-- Northcote

INSERT INTO public."Facilities"
("FacilityName", "Street", "Postcode", "SuburbName", "Region", "Description", "Amenities", "FacilityClassification", "FacilityImagePath")
VALUES('Empowerment Aged Care Northcote', '123 Facility Rd', '3070', 'Northcote', 'Victoria', 'The largest aged care facility in Australia known for their wide range of programs. Has a reputation for its care and welcoming atmosphere, at the hands of a team of dedicated staff. Residents are provided around the clock tailored nursing care, as well as a varied lifestyle program.', 'Staff', 'Private', '/images/facility/empowerment.png');

INSERT INTO public."Facilities"
("FacilityName", "Street", "Postcode", "SuburbName", "Region", "Description", "Amenities", "FacilityClassification", "FacilityImagePath")
VALUES('Wisdom Aged Care Northcote', '513 Park Rd', '3070', 'Northcote', 'Victoria', 'An environmentally friendly aged care facility known for their wide range of programs. Has a reputation for its care and welcoming atmosphere, at the hands of a team of dedicated staff. Residents are provided around the clock tailored nursing care, as well as a varied lifestyle program.', 'Staff', 'Private', '/images/facility/wisdom.png');



/*REVIEWS*/


/*    MELBOURNE REVIEWS */

------------Sunrise Melbourne reviews


INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'My dad loved it here and I would highly recommend it', 8, 8, 8, 8, 8, 8, 8, true, 'Sunrise Aged Care Melbourne', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');

INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'The staff are friendly and the location is great', 7, 7, 7, 7, 7, 7, 7, true, 'Sunrise Aged Care Melbourne', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');

INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'My Mum loved it here and I would highly recommend it', 8, 8, 8, 8, 8, 8, 8, true, 'Sunrise Aged Care Melbourne', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');

INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'The staff are friendly and the location is great', 9, 9, 9, 9, 9, 9, 9, true, 'Sunrise Aged Care Melbourne', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');


------------Dolce Melbourne reviews
INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'My dad loved it here and I would highly recommend it', 8, 8, 8, 8, 8, 8, 8, true, 'Dolce Aged Care Melbourne', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');

INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'The staff are friendly and the location is great', 3, 3, 3, 3, 3, 3, 3, true, 'Dolce Aged Care Melbourne', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');

INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'My Mum loved it here and I would highly recommend it', 8, 8, 8, 8, 8, 8, 8, true, 'Dolce Aged Care Melbourne', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');

INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'The staff are friendly and the location is great', 9, 9, 9, 9, 9, 9, 9, true, 'Dolce Aged Care Melbourne', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');


------------Flagstaff Melbourne reviews
INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'My dad loved it here and I would highly recommend it', 8, 8, 8, 8, 8, 8, 8, true, 'Flagstaff Aged Care Melbourne', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');

INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'The staff are friendly and the location is great', 6, 8, 7, 6, 5, 5, 3, true, 'Flagstaff Aged Care Melbourne', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');

INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'My Mum loved it here and I would highly recommend it', 8, 8, 8, 8, 8, 8, 8, true, 'Flagstaff Aged Care Melbourne', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');

INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'The staff are friendly and the location is great', 9, 9, 9, 9, 9, 9, 9, true, 'Flagstaff Aged Care Melbourne', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');





/*Brunswick Reviews */
----------benetas brunswick reviews
INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'My dad loved it here and I would highly recommend it', 8, 8, 8, 8, 8, 8, 8, true, 'Benevolent Aged Care Brunswick', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');

INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'The staff are friendly and the location is great', 7, 7, 7, 7, 7, 7, 7, true, 'Benevolent Aged Care Brunswick', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');

------------invictus brunswick reviews


INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'My dad loved it here and I would highly recommend it', 8, 8, 8, 8, 8, 8, 8, true, 'Invictus Aged Care Brunswick', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');

INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'The staff are friendly and the location is great', 7, 7, 7, 7, 7, 7, 7, true, 'Invictus Aged Care Brunswick', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');

INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'My Mum loved it here and I would highly recommend it', 8, 8, 8, 8, 8, 8, 8, true, 'Invictus Aged Care Brunswick', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');

INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'The staff are friendly and the location is great', 9, 9, 9, 9, 9, 9, 9, true, 'Invictus Aged Care Brunswick', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');


------------argcare brunswick reviews
INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'My dad loved it here and I would highly recommend it', 8, 8, 8, 8, 8, 8, 8, true, 'Argcare Aged Care Brunswick', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');

INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'The staff are friendly and the location is great', 7, 7, 7, 7, 7, 7, 7, true, 'Argcare Aged Care Brunswick', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');

INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'My Mum loved it here and I would highly recommend it', 8, 8, 8, 8, 8, 8, 8, true, 'Argcare Aged Care Brunswick', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');

INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'The staff are friendly and the location is great', 6, 6, 6, 6, 6, 6, 6, true, 'Argcare Aged Care Brunswick', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');


------------mercy brunswick reviews
INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'My dad loved it here and I would highly recommend it', 8, 8, 8, 8, 8, 8, 8, true, 'Mercy Aged Care Brunswick', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');

INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'The staff are friendly and the location is great', 3, 3, 3, 3, 3, 3, 3, true, 'Mercy Aged Care Brunswick', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');

INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'My Mum loved it here and I would highly recommend it', 8, 8, 8, 8, 8, 8, 8, true, 'Mercy Aged Care Brunswick', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');

INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'The staff are friendly and the location is great', 9, 9, 9, 9, 9, 9, 9, true, 'Mercy Aged Care Brunswick', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');


------------modern brunswick reviews
INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'My dad loved it here and I would highly recommend it', 8, 8, 8, 8, 8, 8, 8, true, 'Modern Aged Care Brunswick', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');

INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'The staff are friendly and the location is great', 6, 8, 7, 6, 5, 5, 3, true, 'Modern Aged Care Brunswick', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');

INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'My Mum loved it here and I would highly recommend it', 8, 8, 8, 8, 8, 8, 8, true, 'Modern Aged Care Brunswick', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');

INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'The staff are friendly and the location is great', 9, 9, 9, 9, 9, 9, 9, true, 'Modern Aged Care Brunswick', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');




/*    Northcote REVIEWS */

------------Empowerment Northcote reviews


INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'My dad loved it here and I would highly recommend it', 8, 8, 8, 8, 8, 8, 8, true, 'Empowerment Aged Care Northcote', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');

INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'The staff are friendly and the location is great', 7, 7, 7, 7, 7, 7, 7, true, 'Empowerment Aged Care Northcote', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');

INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'My Mum loved it here and I would highly recommend it', 8, 8, 8, 8, 8, 8, 8, true, 'Empowerment Aged Care Northcote', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');

INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'The staff are friendly and the location is great', 9, 9, 9, 9, 9, 9, 9, true, 'Empowerment Aged Care Northcote', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');


------------Wisdom Northcote reviews
INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'My dad loved it here and I would highly recommend it', 8, 8, 8, 8, 8, 8, 8, true, 'Wisdom Aged Care Northcote', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');

INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'The staff are friendly and the location is great', 3, 3, 3, 3, 3, 3, 3, true, 'Wisdom Aged Care Northcote', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');

INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'My Mum loved it here and I would highly recommend it', 8, 8, 8, 8, 8, 8, 8, true, 'Wisdom Aged Care Northcote', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');

INSERT INTO public."Reviews"
("InitialReviewDate", "FeedbackComments", "OverallScore", "QualityOfCareScore", "StaffScore", "FoodScore", "AmenitiesScore", "SafetyScore", "ActivityProgramsScore", "ReviewValidated", "FacilityName", "UserEmail", "FirstName", "LastName", "MedicareNumber", "UserType")
VALUES('2021-01-01', 'The staff are friendly and the location is great', 9, 9, 9, 9, 9, 9, 9, true, 'Wisdom Aged Care Northcote', 'test@mail.com', 'John', 'Smith', '0123901290', 'I am a current / past resident at this facility');











