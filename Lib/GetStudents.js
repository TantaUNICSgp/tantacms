export default async function GetStudents(key) {
  const response = await fetch("http://127.0.0.1:8000/students/", {
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });
  return response.json();
}
