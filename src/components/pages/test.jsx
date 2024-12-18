import React from 'react';
import questions from '../questions/questions';

import { useNavigate } from 'react-router-dom';

const Test = () => {
    const [correct, setCorrect] = React.useState(0)
    const [answers, setAnswers] = React.useState({})
    const [displayanswer, setDisplayAnswer] = React.useState(false)
    const navigate = useNavigate();

    const handleAnswer = () => {
        let initial = 0;
        setCorrect(initial)
        questions.forEach((question) => {
            if (answers[question.id] == question.answer) {
                initial += 1;
            }
        });

        setCorrect(initial);
        alert(`You got ${initial} correct answers`);
        setDisplayAnswer(true)


    }

    const handleRetake = () => {
        setDisplayAnswer(false)
        setAnswers({})

        document.querySelectorAll('input[type="radio"]').forEach((el) => el.checked = false)
    }
    return (
        <div className='flex justify-center items-center my-20 p-5 sm:mx-5 flex-col'>
            <h1 className='text-3xl mb-5 flex justify-center '>Model Questions, Math</h1>
            <ul>
                {questions.map((question, index) => (
                    <li key={question.id} className='flex flex-col gap-3 mt-5'>
                        <p className='text-xl'>{question.id}. {question.question}</p>
                        <ul className='' >
                            {Object.entries(question.options).map(([key, value]) => (
                                <li key={key} className='flex gap-2'>
                                    <input type="radio" name={question.id} value={value}
                                        onChange={(e) => setAnswers({ ...answers, [question.id]: key })}

                                    />
                                    <label>{value}</label>
                                </li>
                            ))}

                        </ul>
                    </li>

                ))}
            </ul>

            <button className='bg-purple-700 p-2 rounded-md mt-10 text-white text-2xl' onClick={handleAnswer}>Submit</button>


            {displayanswer ? (
                <div className='flex flex-col  p-5'>
                    <h1 className='text-2xl p-2 underline text-red-700'>Correct Answers Key</h1>
                    {questions.map((question, index) => (
                        <p> {question.id} : {question.answer}</p>
                    ))}

                    <button className=' w-fit  mt-2 p-1 rounded-md text-blue-600 underline text-xl' onClick={handleRetake}>Retake?</button>
                </div>
            ) : ""}


        </div>
    );
};

export default Test;