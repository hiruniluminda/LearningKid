/*
package com.example.CourseManagement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MCQQuestionService {

    @Autowired
    private MCQQuestionRepository mcquestionRepository;

    @Autowired
    private LessonRepository lessonRepository;

    public List<MCQQuestion> getAllMCQQuestion() {
        return mcquestionRepository.findAll();
    }

    public MCQQuestion addMCQQuestion(MCQQuestionDto mcquestionDto) {
        Lesson lesson = lessonRepository.findById(mcquestionDto.getQuestionID())
                .orElseThrow(() -> new IllegalArgumentException("Lesson not found"));

        MCQQuestion newMCQQuestion = new MCQQuestion(
                0,
                lesson,
                mcquestionDto.getQuestionText(),
                mcquestionDto.getOptionA(),
                mcquestionDto.getOptionB(),
                mcquestionDto.getOptionC(),
                mcquestionDto.getOptionD(),
                mcquestionDto.getCorrectOption(),
                mcquestionDto.getCreatedAt()
        );
        return mcquestionRepository.save(newMCQQuestion);
    }

    public void deleteMCQQuestion(int mcquestionId) {
        mcquestionRepository.deleteById(mcquestionId);
    }

    public MCQQuestion updateMCQQuestion(int mcquestionId, MCQQuestionDto mcquestionDto) {
        MCQQuestion existingMCQQuestion = mcquestionRepository.findById(mcquestionId)
                .orElseThrow(() -> new IllegalArgumentException("MCQQuestion not found"));

        existingMCQQuestion.setQuestionText(mcquestionDto.getQuestionText());
        existingMCQQuestion.setOptionA(mcquestionDto.getOptionA());
        existingMCQQuestion.setOptionB(mcquestionDto.getOptionB());
        existingMCQQuestion.setOptionC(mcquestionDto.getOptionC());
        existingMCQQuestion.setOptionD(mcquestionDto.getOptionD());
        existingMCQQuestion.setCorrectOption(mcquestionDto.getCorrectOption());

        return mcquestionRepository.save(existingMCQQuestion);
    }
}
*/
