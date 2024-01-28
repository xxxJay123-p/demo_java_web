import { useEffect } from "react";
import useStore from "../../store";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";

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

  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="section__style">
      <main>
        <h2>Courses</h2>

        <ul className="list__section courses-list__section">
          {courses.map((course) => (
            <div className="card-coures">
              <li key={course._id} data-aos="fade-up">
                <h3>{course.name}</h3>
                <p>{course.description}</p>
                <Image src={course.imageUrl} alt={course.name} />
                <p>Price: ${course.price}</p>
                <p>Duration: {course.duration_week} weeks</p>
                <p>Instructor: {course.instructor}</p>
              </li>
            </div>
          ))}
        </ul>
      </main>
    </section>
  );
}

export default Course;