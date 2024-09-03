import './QuestionAnswerCard.css'

function QuestionAnswerCard() {
    const answer_click1 = () => {
        const answer = document.getElementById('first_answer')
        const question = document.getElementById('question_1')
        question.classList.toggle('orange_question')
        answer.classList.toggle('show_answer')
    }
    const answer_click2 = () => {
        const answer = document.getElementById('second_answer')
        const question = document.getElementById('question_2')
        question.classList.toggle('orange_question')
        answer.classList.toggle('show_answer')
    }
    const answer_click3 = () => {
        const answer = document.getElementById('third_answer')
        const question = document.getElementById('question_3')
        question.classList.toggle('orange_question')
        answer.classList.toggle('show_answer')
    }
    return (
        <div className='best_card'>

            <p onClick={answer_click1} id='question_1'>Best useful links ?</p>
            <li id='first_answer'>Get <span>the best villa </span>website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the <span> best free CSS templates </span>in the world. Please tell your friends about it.  </li>

            <p onClick={answer_click2} id='question_2'>How does this work ?</p>
            <li id='second_answer'>Get <span>the best villa </span>website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the <span> best free CSS templates </span>in the world. Please tell your friends about it.  </li>
            <p onClick={answer_click3} id='question_3'>  Why is Villa Agency the best ?
            </p >
            <li id='third_answer'>Get <span>the best villa </span>website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the <span> best free CSS templates </span>in the world. Please tell your friends about it.  </li>


        </div>
    )
}

export default QuestionAnswerCard