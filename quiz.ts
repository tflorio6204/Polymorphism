/*
# 1) Quizzes

This file needs to define some functions that work with quizzes, which are collections of QuizQuestions.
The `QuizQuestion` type is defined in the `src/utilities/question.ts` file, and is largely the same as
the one in the previous assignment. One key difference is that the `QuizQuestion` class is now abstract,
so it cannot be instantiated directly. Instead, you should use one of the subclasses `TrueFalseQuestion`,
`ShortAnswerQuestion`, or `MultipleChoiceQuestion`. There is also now an abstract `ask` method that
subclasses must implement (which they already did, in fact).

1. Currently, the function `makeQuiz` is poorly designed. The function takes three arrays of questions
    and returns a string that represents the entire quiz. The function should be refactored to use the
    `QuizQuestion` type instead of the three specific question types. This will allow the function to work
    with any type of question, not just the three specific types, and allow the questions to be in any order. 
2. Next, define a function `gradeQuiz` that takes an array of QuizQuestion objects and an array of student
    answers (a string array), and returns a number that represents the student's grade. The grade is the
    number of questions that the student answered correctly. The function should work with any type of
    question, polymorphically dispatching the appropriate `check` method.
    **NOTE**: You can assume that the student answers array will have the same length and order as the
        questions array.
*/

import { QuizQuestion } from "./utilities/question";

export function makeQuiz(abstractQuestion: QuizQuestion[]): string {
    let quiz: string[] = [];
    for (let q of abstractQuestion) {
        quiz.push(q.ask());
    }
    return quiz.join("\n");
}

export function gradeQuiz(
    questions: QuizQuestion[],
    answers: string[],
): number {
    let count: number = 0;
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].check(answers[i])) {
            count++;
        }
    }
    return count;
}
