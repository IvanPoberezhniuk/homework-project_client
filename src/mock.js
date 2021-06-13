const createDataUsers = (name, role, projects) => {
  return { name, role, projects };
};

const rowsUsers = [
  createDataUsers('myPRojecst', '05.11.2009', '05.11.2009'),
  createDataUsers('Busines PRoject', '11.01.2001', '05.11.2009'),
  createDataUsers('NOt a project', '11.01.2001', '01.11.2019'),
  createDataUsers('Fake Project', '11.01.2001', '05.11.2019'),
  createDataUsers('ua project', '01.01.2201', '05.11.20-8'),
  createDataUsers('by project', '11.01.2001', '05.12.2009'),
  createDataUsers('react project', '11.01.2001', '05.11.2009'),
  createDataUsers('project', '11.01.2001', '05.11.2009'),
  createDataUsers('bitcoin project', '11.11.2001', '05.11.2009'),
  createDataUsers('lokk like a project', '11.01.2001', '05.11.2019'),
];

const createDataProjects = (projectName, startDate, endDate, status, team) => {
  return { projectName, startDate, endDate, status, team };
};

const rowsProjects = [
  createDataProjects('myPRojecst', '05.11.2009', '05.11.2009', 67, 4.3),
  createDataProjects('Busines PRoject', '11.01.2001', '05.11.2009', 51, 4.9),
  createDataProjects('NOt a project', '11.01.2001', '01.11.2019', 24, 6.0),
  createDataProjects('Fake Project', '11.01.2001', '05.11.2019', 24, 4.0),
  createDataProjects('ua project', '01.01.2201', '05.11.20-8', 49, 3.9),
  createDataProjects('by project', '11.01.2001', '05.12.2009', 87, 6.5),
  createDataProjects('react project', '11.01.2001', '05.11.2009', 4.3),
  createDataProjects('project', '11.01.2001', '05.11.2009', 0.0),
  createDataProjects('bitcoin project', '11.11.2001', '05.11.2009', 65, 7.0),
  createDataProjects('like a project', '11.01.2001', '05.11.2019', 98, 0.0),
  createDataProjects('Marshmallow ', '11.01.2001', '05.11.2001', 81, 2.0),
  createDataProjects('cars project', '11.04.2301', '07.11.2003', 9, 37.0),
  createDataProjects('alalalal', '10.01.2001', '11.11.2009', 63, 4.0),
];

export { rowsUsers, rowsProjects };
