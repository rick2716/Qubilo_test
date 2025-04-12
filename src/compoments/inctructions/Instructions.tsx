import { Link } from "react-router-dom";
import "./instructionsStyle.css";

const Instructions = () => {
    return (
        <div>
            <div className='bg-slate-200 flex flex-col items-center w-screen h-screen p-10 text-xl'>
                <h1 className='font-bold text-4xl mb-4'>Technical Interview</h1>
                <p className='text-2xl mb-4'>
                    Welcome to the technical interview. The objective of this challenge is
                    to assess your abilities using React and FE technologies. API{' '}
                    <a
                        className='underline text-blue-600'
                        target='_blank'
                        href='https://rickandmortyapi.com/documentation/#introduction'
                    >
                        link
                    </a>
                </p>
                <h2 className='text-3xl font-bold'>Instructions</h2>
                <ul>
                    <li>1 .Create a Rick and Morty Card using the API.</li>
                    <li>2. Display 9 cards in a 3x3 grid with spacing between each one.</li>
                    <li>
                        3. Create a dropdown that will filter by gender, possible values are
                        found in this link:{' '}
                        <a
                            className='underline text-blue-600'
                            target='_blank'
                            href='https://rickandmortyapi.com/documentation/#character-schema'
                        >
                            https://rickandmortyapi.com/documentation/#character-schema
                        </a>
                    </li>
                    <li>
                        4. Create two buttons that will fetch the previous and next set of 9 characters.
                    </li>
                    <li>
                        5. Create data persistency between refreshes, meaning that when i
                        refresh the page i should see the last characters that i saw.
                    </li>
                    <li>
                        6. Performance: do not code, answer verbally. If we where to render 1
                        million of these cards what impact would it cause? what can we do to
                        render them with out performance issues?
                    </li>
                    <li>
                        <p>
                            <b>ANS:</b> Rendering a million of these cards would significantly impact the performance
                            of the web app. The UI would render slowly, user interactions would lag, and the overall 
                            user experience would be bad and slower. Additionally, memory consumption would 
                            increase, and in the worst case, the browser could crash.
                        </p>
                        <p>
                            A solution is to implement "lazy loading" to progressively rendering cards as the user scrolls. 
                            This can be done using the useRef hook to track the position of elements on screen to load more 
                            cards when needed. Also, useMemo can be used to memorize already rendered components and 
                            avoid re-renders, improving performance.
                        </p>
                    </li>
                </ul>
                <Link to="/home" className="btn-portal">
                    <span>Enter the App</span>
                </Link>
            </div>
        </div>
    );
}

export default Instructions;