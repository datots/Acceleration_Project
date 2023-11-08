import React, { useState } from "react";
import "./Form.css";
import Pagenation from "../Pagenation/Pagenation";
import Navbar from "./Navigation/Navbar";

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
];

const Form = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const [statusFilter, setStatusFilter] = useState("all");
  const [genderFilter, setGenderFilter] = useState("all");

  const filteredData = studentData.filter((student) => {
    const statusMatch =
      statusFilter === "all" || student.status === statusFilter;
    const genderMatch =
      genderFilter === "all" || student.gender === genderFilter;
    return statusMatch && genderMatch;
  });

  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handleStatusFilter = (value) => {
    setStatusFilter(value);
    setCurrentPage(1);
  };

  const handleGenderFilterChange = (value) => {
    setGenderFilter(value);
    setCurrentPage(1);
  };

  if (!Array.isArray(studentData)) {
    return <p>No data available</p>;
  }

  return (
    <div>
      <Navbar />
      <div className="filters">
        <label>
          Filter by Status:
          <select
            value={statusFilter}
            onChange={(event) => handleStatusFilter(event.target.value)}
          >
            <option value="all">All</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </label>

        <label>
          Filter by Gender:
          <select
            value={genderFilter}
            onChange={(event) => handleGenderFilterChange(event.target.value)}
          >
            <option value="all">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>სტუდენტის სახელი და გვარი</th>
            <th>სტატუსი</th>
            <th>სქესი</th>
            <th>ქულები</th>
            <th>პირადი ნომერი</th>
            <th>მაილი</th>
            <th>მობილურის ნომერი</th>
            <th>დაბადების თარიღ</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((student, index) => (
            <tr key={index}>
              <td> {student.Name} </td>
              <td> {student.status} </td>
              <td> {student.gender} </td>
              <td> {student.points} </td>
              <td> {student.IDNumber} </td>
              <td> {student.email} </td>
              <td> {student.mobileNumber} </td>
              <td> {student.dateOfBirth} </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagenation
        data={filteredData}
        itemsperPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Form;
