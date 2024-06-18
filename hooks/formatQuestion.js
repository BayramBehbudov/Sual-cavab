const formatQuestion = (question) => {
    const answers = [
        question.Correct,
        question.WrongAnswer1,
        question.WrongAnswer2,
        question.WrongAnswer3,
    ];

    for (let i = answers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [answers[i], answers[j]] = [answers[j], answers[i]];
    }

    const formattedAnswers = answers.map((answer, index) => {
        const labels = ["A) ", "B) ", "C) ", "D) "];
        return `${labels[index]}${answer}`;
    });

    return formattedAnswers;
};

export {formatQuestion}