package com.example.CourseManagement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class LessonService {

    @Autowired
    private LessonRepository lessonRepository;

    public List<LessonDto> getLessonsByCourseId(int courseId) {
        List<Lesson> lessons = lessonRepository.findByCourseId(courseId);
        return lessons.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }


    private LessonDto convertToDTO(Lesson lesson) {
        return new LessonDto(lesson.getLessonId(), lesson.getCourse(), lesson.getLessonTitle(),
                lesson.getVideoUrl(), lesson.getNotes(), lesson.isCompleted(), lesson.getCreatedAt());
    }
}
