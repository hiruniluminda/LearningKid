package com.example.CourseManagement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/lessons")
public class LessonController {

    @Autowired
    private LessonService lessonService;

    @GetMapping("/course/{courseId}")
    public List<LessonDto> getLessonsByCourseId(@PathVariable int courseId) {
        return lessonService.getLessonsByCourseId(courseId);
    }

}
