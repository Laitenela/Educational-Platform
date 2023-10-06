const rootUrl = "http://127.0.0.1:3000/";
const routeLoader = {};

routeLoader.app = async ({ params }) => {
  const response = await fetch(`${rootUrl}api/user/info`);
  const userData = await response.json();

  return userData;
};

routeLoader.main = async ({ params }) => {
  const response = await fetch(`${rootUrl}api/course/stack`);
  const courses = await response.json();

  return courses;
};

routeLoader.profile = async ({ params }) => {
  const response = await fetch(`${rootUrl}api/user/info`);
  const userData = await response.json();

  return userData.settings;
};

routeLoader.profileEditor = async ({ params }) => {
  const response = await fetch(`${rootUrl}api/user/info`);
  const userData = await response.json();

  return userData;
};

routeLoader.course = async ({ params }) => {
  const fetchAndParseData = (url) => {
    return new Promise(async (resolve) => {
      const response = await fetch(url);
      const data = await response.json();
      resolve(data);
    })
  }

  const requestUrls = [
    `${rootUrl}api/course/info?id=${params.courseId}`,
    `${rootUrl}api/lesson/collection?course_id=${params.courseId}`,
  ];

  const [courseData, lessons] = await Promise.all([
    fetchAndParseData(requestUrls[0]),
    fetchAndParseData(requestUrls[1]),
  ]);

  courseData.lessons = lessons;
  return courseData;
};

routeLoader.courseEditor = async ({ params }) => {
  const response = await fetch(
    `${rootUrl}api/course/info?id=${params.courseId}`
  );
  const courseData = await response.json();
    
  return courseData;
};

export default routeLoader;
