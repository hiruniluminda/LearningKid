package com.example.CourseManagement;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.FetchType;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LessonDto {

    private int lessonId;
    
    @ManyToOne(fetch = FetchType.EAGER)
    @JsonIgnore
    private Course course; // Assuming this is the Course object
    private String lessonTitle;
    private String videoUrl;
    private String notes;
    private boolean completed;
    private Timestamp createdAt;
}
