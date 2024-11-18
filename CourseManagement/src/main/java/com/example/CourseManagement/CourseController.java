package com.example.CourseManagement;

import com.example.CourseManagement.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/courses")
public class CourseController {

    @Autowired
    private CourseService courseService;

    @GetMapping
    public ResponseEntity<List<CourseDto>> getAllCourses() {
        List<CourseDto> courseDtos = courseService.getAllCourses();
        return new ResponseEntity<>(courseDtos, HttpStatus.OK);
    }

    @PostMapping("/create")
    public Course addCourse(@RequestBody CourseDto courseDto) {
        return courseService.addCourse(courseDto);
    }

    @DeleteMapping("/{id}")
    public void deleteCourse(@PathVariable int id) {
        courseService.deleteCourse(id);
    }

    @PutMapping("/{id}")
    public Course updateCourse(@PathVariable int id, @RequestBody CourseDto courseDto) {
        return courseService.updateCourse(id, courseDto);
    }
}
