import { useEffect } from "react";
import useStore from "../store";
import styled from "styled-components";

const Image = styled.img`
  width: 300px;
`;

function Course() {
  const courses = useStore((store) => store.courses) || [];
  const fetchCourses = useStore((store) => store.fetchCourses);

  useEffect(() => {
    fetchCourses();
    console.log("I am fetching coffees..");
  }, [fetchCourses]);

  console.log("Courses in CoursePage: ", courses);

  return (
    <section className="section__style">
      <main>
        <h2>Courses</h2>

        <ul className="list__section courses-list__section">
          {courses.map((courses) => (
            <li key={courses._id}>
              <h3>{courses.name}</h3>
              <p>{courses.description}</p>
              <Image src={courses.imageUrl} alt={courses.name} />
              <p>Price: ${courses.price}</p>
              <p>Duration: {courses.duration_week} weeks</p>
              <p>Instructor: {courses.instructor}</p>
            </li>
          ))}
        </ul>
      </main>
    </section>
  );
}

export default Course;
