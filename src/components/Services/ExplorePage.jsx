import React from 'react';
import { useParams } from 'react-router-dom';
import './ExplorePage.css';

const courseData = {
  '9-10': [
    { subject: 'English', title: 'Foundational English Course' },
    { subject: 'Mathematics', title: 'Algebra & Geometry' },
    { subject: 'Science', title: 'Physics & Chemistry Basics' },
    { subject: 'Social Science', title: 'History & Civics Deep Dive' }
  ],
  '11-12': [
    { subject: 'English', title: 'Advanced English Skills' },
    { subject: 'Maths', title: 'Calculus & Vectors' },
    { subject: 'Physics', title: 'Mechanics & Thermodynamics' },
    { subject: 'Biology', title: 'Genetics & Human Physiology' }
  ],
  'jee': [
    { subject: 'Physics', title: 'Electrodynamics for JEE' },
    { subject: 'Chemistry', title: 'Organic Chemistry Mastery' },
    { subject: 'Maths', title: 'JEE Advanced Maths' }
  ],
  'neet': [
    { subject: 'Biology', title: 'Human Anatomy & Ecology' },
    { subject: 'Chemistry', title: 'Inorganic & Organic Combo' },
    { subject: 'Physics', title: 'NEET Physics Crash Course' }
  ],
  'upsc': [
    { subject: 'General Studies', title: 'GS Mains Full Prep' },
    { subject: 'Polity', title: 'Indian Constitution Insights' },
    { subject: 'History', title: 'Ancient to Modern India' }
  ],
  'nda': [
    { subject: 'Maths', title: 'NDA Quantitative Aptitude' },
    { subject: 'English', title: 'Grammar & Comprehension' },
    { subject: 'GK', title: 'World Affairs & Indian History' }
  ]
};

const ExplorePage = () => {
  const { course } = useParams();

  const segmentCourses = courseData[course] || [];

  return (
    <div className="explore-page">
      <h1 className="explore-heading">Courses for {course.toUpperCase()}</h1>

      <div className="course-grid">
        {segmentCourses.map((courseItem, index) => (
          <div className="course-card" key={index}>
            <h3>{courseItem.subject}</h3>
            <p>{courseItem.title}</p>
            <button>Start Learning</button>
          </div>
        ))}
        {segmentCourses.length === 0 && <p>No courses found for this segment.</p>}
      </div>
    </div>
  );
};

export default ExplorePage;
