package com.example.CourseManagement;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Lesson {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private int lessonId;

        @ManyToOne(fetch = FetchType.LAZY)
        @JoinColumn(name = "course_id", nullable = false)
        @JsonBackReference
        @JsonIgnore
        private Course course;

        private String lessonTitle;
        private String videoUrl;
        private String notes;
        private boolean isCompleted;
        private Timestamp createdAt;
}
