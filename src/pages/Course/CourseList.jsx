import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CourseCard from '../../components/CourseCard';
import HomeLayout from '../../layouts/HomeLayout';
import { getAllCourses } from '../../redux/courseSlice';

function CourseList() {
  const dispatch = useDispatch();

  const { courseList } = useSelector((state) => state?.course);

  // console.log(courseList);

  async function loadCourses() {
    await dispatch(getAllCourses());
  }

  useEffect(() => {
    loadCourses();
  }, []);

  return (
    <HomeLayout>
      <div className='min-h-[90vh] pt-20 px-10 flex flex-col gap-10 text-white'>
        <h1 className='text-center text-4xl font-semibold mb-5'>
          Explore courses made by{' '}
          <span className='font-bold text-yellow-500'>Industry experts</span>
        </h1>
        <div className='mb-10 flex flex-wrap gap-14'>
          {courseList?.map((element) => {
            return <CourseCard key={element._id} data={element} />;
          })}
        </div>
      </div>
    </HomeLayout>
  );
}

export default CourseList;
