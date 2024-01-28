import { useEffect } from "react";
import useStore from "../store";
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
          {courses.map((courses) => (
            <div className="card-coures">
              <li key={courses._id} data-aos="fade-up">
                <h3>{courses.name}</h3>
                <p>{courses.description}</p>
                <Image src={courses.imageUrl} alt={courses.name} />
                <p>Price: ${courses.price}</p>
                <p>Duration: {courses.duration_week} weeks</p>
                <p>Instructor: {courses.instructor}</p>
              </li>
            </div>
          ))}
        </ul>
      </main>
    </section>
  );
}

export default Course;
