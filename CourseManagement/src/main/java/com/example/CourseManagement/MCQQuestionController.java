/*
package com.example.CourseManagement;

import com.example.CourseManagement.Course;
import com.example.CourseManagement.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/apiy/MCQQuestion")
public class MCQQuestionController {

    @Autowired
    private MCQQuestionService mcqQuestionService;

    @GetMapping
    public List<MCQQuestion> getAllMCQQuestion() {
        return mcqQuestionService.getAllMCQQuestion();
    }

    @PostMapping("/create")
    public MCQQuestion addLesson(@RequestBody MCQQuestionDto mcqQuestion) {
        return mcqQuestionService.addMCQQuestion(mcqQuestion);
    }

    @DeleteMapping("/{mcqQuestionId}")
    public void deleteMCQQuestion(@PathVariable int mcqQuestionId) {
        mcqQuestionService.deleteMCQQuestion(mcqQuestionId);
    }

    @PutMapping("/{mcqQuestionId}")
    public MCQQuestion updateMCQQuestion(@PathVariable int mcqQuestionId, @RequestBody MCQQuestionDto mcqQuestionDto) {
        return mcqQuestionService.updateMCQQuestion(mcqQuestionId, mcqQuestionDto);
    }
}
*/
