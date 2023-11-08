const studentData = [
  {
    id: 1,
    Name: "John Doe",
    status: "Active",
    gender: "Male",
    points: 85,
    IDNumber: "123456789",
    email: "john.doe@example.com",
    mobileNumber: "123-456-7890",
    dateOfBirth: "1999-05-15",
  },
  {
    id: 2,
    Name: "Jane Smith",
    status: "Inactive",
    gender: "Female",
    points: 72,
    IDNumber: "987654321",
    email: "jane.smith@example.com",
    mobileNumber: "987-654-3210",
    dateOfBirth: "2000-03-20",
  },
  {
    id: 3,
    Name: "Michael Johnson",
    status: "Active",
    gender: "Male",
    points: 94,
    IDNumber: "456789123",
    email: "michael.johnson@example.com",
    mobileNumber: "456-789-1230",
    dateOfBirth: "1998-09-10",
  },
  {
    id: 4,
    Name: "Emily Wilson",
    status: "Active",
    gender: "Female",
    points: 78,
    IDNumber: "789123456",
    email: "emily.wilson@example.com",
    mobileNumber: "789-123-4560",
    dateOfBirth: "1997-12-25",
  },
  {
    id: 5,
    Name: "David Brown",
    status: "Inactive",
    gender: "Male",
    points: 63,
    IDNumber: "234567890",
    email: "david.brown@example.com",
    mobileNumber: "234-567-8901",
    dateOfBirth: "2001-04-30",
  },
  {
    id: 6,
    Name: "Olivia Davis",
    status: "Active",
    gender: "Female",
    points: 88,
    IDNumber: "890123456",
    email: "olivia.davis@example.com",
    mobileNumber: "890-123-4561",
    dateOfBirth: "1996-08-05",
  },
  {
    id: 7,
    Name: "William Martinez",
    status: "Inactive",
    gender: "Male",
    points: 70,
    IDNumber: "345678901",
    email: "william.martinez@example.com",
    mobileNumber: "345-678-9012",
    dateOfBirth: "2002-02-12",
  },
  {
    id: 8,
    Name: "Sophia Garcia",
    status: "Active",
    gender: "Female",
    points: 91,
    IDNumber: "456789012",
    email: "sophia.garcia@example.com",
    mobileNumber: "456-789-0123",
    dateOfBirth: "1995-11-15",
  },
  {
    id: 9,
    Name: "James Anderson",
    status: "Active",
    gender: "Male",
    points: 75,
    IDNumber: "567890123",
    email: "james.anderson@example.com",
    mobileNumber: "567-890-1234",
    dateOfBirth: "1994-06-22",
  },
  {
    id: 10,
    Name: "Ava Perez",
    status: "Inactive",
    gender: "Female",
    points: 68,
    IDNumber: "678901234",
    email: "ava.perez@example.com",
    mobileNumber: "678-901-2345",
    dateOfBirth: "2003-07-18",
  },
  {
    id: 11,
    Name: "Benjamin Harris",
    status: "Active",
    gender: "Male",
    points: 82,
    IDNumber: "789012345",
    email: "benjamin.harris@example.com",
    mobileNumber: "789-012-3456",
    dateOfBirth: "1993-04-08",
  },
  {
    id: 12,
    Name: "Mia Lewis",
    status: "Active",
    gender: "Female",
    points: 77,
    IDNumber: "890123456",
    email: "mia.lewis@example.com",
    mobileNumber: "890-123-4567",
    dateOfBirth: "1992-01-19",
  },
  {
    id: 13,
    Name: "Ethan Miller",
    status: "Inactive",
    gender: "Male",
    points: 69,
    IDNumber: "901234567",
    email: "ethan.miller@example.com",
    mobileNumber: "901-234-5678",
    dateOfBirth: "2004-09-29",
  },
  {
    id: 14,
    Name: "Lily Taylor",
    status: "Active",
    gender: "Female",
    points: 83,
    IDNumber: "1234567890",
    email: "lily.taylor@example.com",
    mobileNumber: "123-456-7891",
    dateOfBirth: "1991-03-14",
  },
  {
    id: 15,
    Name: "Samuel Wright",
    status: "Active",
    gender: "Male",
    points: 73,
    IDNumber: "2345678901",
    email: "samuel.wright@example.com",
    mobileNumber: "234-567-8902",
    dateOfBirth: "1990-07-01",
  },
  {
    id: 16,
    Name: "Chloe Johnson",
    status: "Inactive",
    gender: "Female",
    points: 71,
    IDNumber: "3456789012",
    email: "chloe.johnson@example.com",
    mobileNumber: "345-678-9013",
    dateOfBirth: "2005-12-10",
  },
  {
    id: 17,
    Name: "Daniel Hernandez",
    status: "Active",
    gender: "Male",
    points: 89,
    IDNumber: "4567890123",
    email: "daniel.hernandez@example.com",
    mobileNumber: "456-789-0124",
    dateOfBirth: "1989-05-25",
  },
  {
    id: 18,
    Name: "Elijah Moore",
    status: "Active",
    gender: "Male",
    points: 79,
    IDNumber: "5678901234",
    email: "elijah.moore@example.com",
    mobileNumber: "567-890-1235",
    dateOfBirth: "1990-02-28",
  },
  {
    id: 19,
    Name: "Alexander Scott",
    status: "Active",
    gender: "Male",
    points: 80,
    IDNumber: "6789012344",
    email: "alexander.scott@example.com",
    mobileNumber: "678-901-2346",
    dateOfBirth: "1988-10-07",
  },
  {
    id: 20,
    Name: "Aria Williams",
    status: "Inactive",
    gender: "Female",
    points: 67,
    IDNumber: "7890123455",
    email: "aria.williams@example.com",
    mobileNumber: "789-012-3457",
    dateOfBirth: "2006-02-14",
  },

  {
    id: 21,
    Name: "Benjamin Harris",
    status: "Active",
    gender: "Male",
    points: 82,
    IDNumber: "789012345",
    email: "benjamin.harris@example.com",
    mobileNumber: "789-012-3456",
    dateOfBirth: "1993-04-08",
  },
  {
    id: 22,
    Name: "Mia Lewis",
    status: "Active",
    gender: "Female",
    points: 77,
    IDNumber: "890123456",
    email: "mia.lewis@example.com",
    mobileNumber: "890-123-4567",
    dateOfBirth: "1992-01-19",
  },
  {
    id: 23,
    Name: "Ethan Miller",
    status: "Inactive",
    gender: "Male",
    points: 69,
    IDNumber: "901234567",
    email: "ethan.miller@example.com",
    mobileNumber: "901-234-5678",
    dateOfBirth: "2004-09-29",
  },
  {
    id: 24,
    Name: "Lily Taylor",
    status: "Active",
    gender: "Female",
    points: 83,
    IDNumber: "1234567890",
    email: "lily.taylor@example.com",
    mobileNumber: "123-456-7891",
    dateOfBirth: "1991-03-14",
  },
  {
    id: 25,
    Name: "Samuel Wright",
    status: "Active",
    gender: "Male",
    points: 73,
    IDNumber: "2345678901",
    email: "samuel.wright@example.com",
    mobileNumber: "234-567-8902",
    dateOfBirth: "1990-07-01",
  },
  {
    id: 26,
    Name: "Chloe Johnson",
    status: "Inactive",
    gender: "Female",
    points: 71,
    IDNumber: "3456789012",
    email: "chloe.johnson@example.com",
    mobileNumber: "345-678-9013",
    dateOfBirth: "2005-12-10",
  },
  {
    id: 27,
    Name: "Daniel Hernandez",
    status: "Active",
    gender: "Male",
    points: 89,
    IDNumber: "4567890123",
    email: "daniel.hernandez@example.com",
    mobileNumber: "456-789-0124",
    dateOfBirth: "1989-05-25",
  },
  {
    id: 28,
    Name: "Elijah Moore",
    status: "Active",
    gender: "Male",
    points: 79,
    IDNumber: "5678901234",
    email: "elijah.moore@example.com",
    mobileNumber: "567-890-1235",
    dateOfBirth: "1990-02-28",
  },
  {
    id: 29,
    Name: "Alexander Scott",
    status: "Active",
    gender: "Male",
    points: 80,
    IDNumber: "6789012344",
    email: "alexander.scott@example.com",
    mobileNumber: "678-901-2346",
    dateOfBirth: "1988-10-07",
  },
  {
    id: 30,
    Name: "Aria Williams",
    status: "Inactive",
    gender: "Female",
    points: 67,
    IDNumber: "7890123455",
    email: "aria.williams@example.com",
    mobileNumber: "789-012-3457",
    dateOfBirth: "2006-02-14",
  },
  {
    id: 31,
    Name: "Liam Smith",
    status: "Active",
    gender: "Male",
    points: 80,
    IDNumber: "1234567896",
    email: "liam.smith@example.com",
    mobileNumber: "123-456-7892",
    dateOfBirth: "2002-08-10",
  },
  {
    id: 32,
    Name: "Olivia Johnson",
    status: "Inactive",
    gender: "Female",
    points: 72,
    IDNumber: "9876543217",
    email: "olivia.johnson@example.com",
    mobileNumber: "987-654-3211",
    dateOfBirth: "2004-03-15",
  },
  {
    id: 33,
    Name: "Noah Brown",
    status: "Active",
    gender: "Male",
    points: 88,
    IDNumber: "4567891238",
    email: "noah.brown@example.com",
    mobileNumber: "456-789-1233",
    dateOfBirth: "2003-11-20",
  },
  {
    id: 34,
    Name: "Emma Wilson",
    status: "Active",
    gender: "Female",
    points: 78,
    IDNumber: "7891234569",
    email: "emma.wilson@example.com",
    mobileNumber: "789-123-4564",
    dateOfBirth: "2000-04-25",
  },
  {
    id: 35,
    Name: "Liam Davis",
    status: "Inactive",
    gender: "Male",
    points: 63,
    IDNumber: "2345678907",
    email: "liam.davis@example.com",
    mobileNumber: "234-567-8905",
    dateOfBirth: "2005-09-30",
  },
  {
    id: 36,
    Name: "Sophia Martinez",
    status: "Active",
    gender: "Female",
    points: 94,
    IDNumber: "8901234568",
    email: "sophia.martinez@example.com",
    mobileNumber: "890-123-4566",
    dateOfBirth: "2001-12-12",
  },
  {
    id: 37,
    Name: "Mason Garcia",
    status: "Inactive",
    gender: "Male",
    points: 70,
    IDNumber: "3456789019",
    email: "mason.garcia@example.com",
    mobileNumber: "345-678-9018",
    dateOfBirth: "1999-06-22",
  },
  {
    id: 38,
    Name: "Olivia Anderson",
    status: "Active",
    gender: "Female",
    points: 85,
    IDNumber: "4567890120",
    email: "olivia.anderson@example.com",
    mobileNumber: "456-789-0129",
    dateOfBirth: "1998-07-18",
  },
  {
    id: 39,
    Name: "Ethan Harris",
    status: "Active",
    gender: "Male",
    points: 89,
    IDNumber: "5678901231",
    email: "ethan.harris@example.com",
    mobileNumber: "567-890-1230",
    dateOfBirth: "1997-03-08",
  },
  {
    id: 40,
    Name: "Ava Lewis",
    status: "Inactive",
    gender: "Female",
    points: 77,
    IDNumber: "6789012342",
    email: "ava.lewis@example.com",
    mobileNumber: "678-901-2341",
    dateOfBirth: "1996-01-19",
  },
  {
    id: 41,
    Name: "Elijah Clark",
    status: "Active",
    gender: "Male",
    points: 84,
    IDNumber: "7890123453",
    email: "elijah.clark@example.com",
    mobileNumber: "789-012-3452",
    dateOfBirth: "2005-05-15",
  },
  {
    id: 42,
    Name: "Mia Scott",
    status: "Active",
    gender: "Female",
    points: 79,
    IDNumber: "8901234564",
    email: "mia.scott@example.com",
    mobileNumber: "890-123-4563",
    dateOfBirth: "2004-02-28",
  },
  {
    id: 43,
    Name: "Lucas Miller",
    status: "Inactive",
    gender: "Male",
    points: 68,
    IDNumber: "9012345675",
    email: "lucas.miller@example.com",
    mobileNumber: "901-234-5674",
    dateOfBirth: "2003-10-07",
  },
  {
    id: 44,
    Name: "Aria Taylor",
    status: "Active",
    gender: "Female",
    points: 90,
    IDNumber: "1234567896",
    email: "aria.taylor@example.com",
    mobileNumber: "123-456-7895",
    dateOfBirth: "2002-12-14",
  },
  {
    id: 45,
    Name: "Liam Wright",
    status: "Active",
    gender: "Male",
    points: 76,
    IDNumber: "2345678907",
    email: "liam.wright@example.com",
    mobileNumber: "234-567-8906",
    dateOfBirth: "2001-07-01",
  },
  {
    id: 46,
    Name: "Sophia Johnson",
    status: "Inactive",
    gender: "Female",
    points: 70,
    IDNumber: "3456789018",
    email: "sophia.johnson@example.com",
    mobileNumber: "345-678-9017",
    dateOfBirth: "2000-12-10",
  },
  {
    id: 47,
    Name: "Noah Hernandez",
    status: "Active",
    gender: "Male",
    points: 88,
    IDNumber: "4567890129",
    email: "noah.hernandez@example.com",
    mobileNumber: "456-789-0128",
    dateOfBirth: "1999-05-25",
  },
  {
    id: 48,
    Name: "Emma Moore",
    status: "Active",
    gender: "Female",
    points: 75,
    IDNumber: "5678901230",
    email: "emma.moore@example.com",
    mobileNumber: "567-890-1239",
    dateOfBirth: "1998-02-28",
  },
  {
    id: 49,
    Name: "Mason Clark",
    status: "Inactive",
    gender: "Male",
    points: 71,
    IDNumber: "6789012341",
    email: "mason.clark@example.com",
    mobileNumber: "678-901-2340",
    dateOfBirth: "1997-10-15",
  },
  {
    id: 50,
    Name: "Olivia Adams",
    status: "Active",
    gender: "Female",
    points: 86,
    IDNumber: "7890123452",
    email: "olivia.adams@example.com",
    mobileNumber: "789-012-3451",
    dateOfBirth: "1996-06-20",
  },
];
