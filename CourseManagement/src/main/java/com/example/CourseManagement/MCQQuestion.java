/*
package com.example.CourseManagement;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class MCQQuestion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int QuestionID;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "lessonId", nullable = false)
    @JsonBackReference
    @JsonManagedReference
    @JsonIgnore
    private Lesson lesson;

    private String QuestionText;
    private String OptionA;
    private String OptionB;
    private String OptionC;
    private String OptionD;
    private String CorrectOption  ;
    private Timestamp createdAt;
}
*/
