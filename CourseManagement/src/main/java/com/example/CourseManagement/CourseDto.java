package com.example.CourseManagement;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Collections;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CourseDto {
    private int id;
    private String title;
    private double price;
    private String review;
    private String description;
    private String lesson;
    private String student;
    private String duration;
    private String image;
    private List<LessonDto> lessons;

    public List<LessonDto> getLessons() {
        return lessons != null ? lessons : Collections.emptyList();
    }

    public void setLessons(List<LessonDto> lessons) {
        this.lessons = lessons;
    }
}
