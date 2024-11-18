package com.example.CourseManagement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CourseService {

    @Autowired
    private CourseRepository courseRepository;

    // Convert Course entity to CourseDto
    public CourseDto convertToDto(Course course) {
        List<LessonDto> lessonDtos = course.getLessons().stream()
                .map(lesson -> new LessonDto(
                        lesson.getLessonId(),
                        lesson.getCourse(),
                        lesson.getLessonTitle(),
                        lesson.getVideoUrl(),
                        lesson.getNotes(),
                        lesson.isCompleted(),
                        lesson.getCreatedAt()
                ))
                .collect(Collectors.toList());

        return new CourseDto(
                course.getId(),
                course.getTitle(),
                course.getPrice(),
                course.getReview(),
                course.getDescription(),
                course.getLesson(),
                course.getStudent(),
                course.getDuration(),
                course.getImage(),
                lessonDtos
        );
    }

    // Convert CourseDto to Course entity
    public Course convertToEntity(CourseDto courseDto) {
        List<Lesson> lessons = courseDto.getLessons().stream()
                .map(lessonDto -> {
                    Course course = new Course(courseDto.getId(), courseDto.getTitle(),
                            courseDto.getPrice(), courseDto.getReview(),
                            courseDto.getDescription(), courseDto.getLesson(),
                            courseDto.getStudent(), courseDto.getDuration(),
                            courseDto.getImage(), null);
                    return new Lesson(
                            lessonDto.getLessonId(),
                            course,
                            lessonDto.getLessonTitle(),
                            lessonDto.getVideoUrl(),
                            lessonDto.getNotes(),
                            lessonDto.isCompleted(),
                            lessonDto.getCreatedAt()
                    );
                })
                .collect(Collectors.toList());

        return new Course(
                courseDto.getId(),
                courseDto.getTitle(),
                courseDto.getPrice(),
                courseDto.getReview(),
                courseDto.getDescription(),
                courseDto.getLesson(),
                courseDto.getStudent(),
                courseDto.getDuration(),
                courseDto.getImage(),
                lessons
        );
    }

    // Get all courses and return them as DTOs
    public List<CourseDto> getAllCourses() {
        return courseRepository.findAll().stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    // Add a new course
    public Course addCourse(CourseDto courseDto) {
        Course course = convertToEntity(courseDto);
        return courseRepository.save(course);
    }

    // Delete a course by ID
    public void deleteCourse(int courseId) {
        courseRepository.deleteById(courseId);
    }

    // Update an existing course
    public Course updateCourse(int id, CourseDto courseDto) {
        Optional<Course> optionalCourse = courseRepository.findById(id);

        if (optionalCourse.isPresent()) {
            Course existingCourse = optionalCourse.get();

            existingCourse.setTitle(courseDto.getTitle());
            existingCourse.setDescription(courseDto.getDescription());
            existingCourse.setPrice(courseDto.getPrice());
            existingCourse.setReview(courseDto.getReview());
            existingCourse.setLesson(courseDto.getLesson());
            existingCourse.setStudent(courseDto.getStudent());
            existingCourse.setDuration(courseDto.getDuration());
            existingCourse.setImage(courseDto.getImage());

            return courseRepository.save(existingCourse);
        } else {
            return null;
        }
    }
}
