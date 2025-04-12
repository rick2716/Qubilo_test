import './App.css';
import Home from './compoments/home/Home';

function App() {
  return (
    // <div className='bg-slate-200 flex flex-col items-center w-screen h-screen p-10 text-xl'>
    //   <h1 className='font-bold text-4xl mb-4'>Technical Interview</h1>
    //   <p className='text-2xl mb-4'>
    //     Welcome to the technical interview. The objective of this challenge is
    //     to assess your abilities using React and FE technologies. API{' '}
    //     <a
    //       className='underline text-blue-600'
    //       target='_blank'
    //       href='https://rickandmortyapi.com/documentation/#introduction'
    //     >
    //       link
    //     </a>
    //   </p>
    //   <h2 className='text-3xl font-bold'>Instructions</h2>
    //   <ul>
    //     <li>1 .Create a Rick and Morty Card using the API.</li>
    //     <li>2. Display 9 cards in a 3x3 grid with spacing between each one.</li>
    //     <li>
    //       3. Create a dropdown that will filter by gender, possible values are
    //       found in this link:{' '}
    //       <a
    //         className='underline text-blue-600'
    //         target='_blank'
    //         href='https://rickandmortyapi.com/documentation/#character-schema'
    //       >
    //         https://rickandmortyapi.com/documentation/#character-schema
    //       </a>
    //     </li>
    //     <li>
    //       4. Create two buttons that will fetch the previous and next set of 9 characters.
    //     </li>
    //     <li>
    //       5. Create data persistency between refreshes, meaning that when i
    //       refresh the page i should see the last characters that i saw.
    //     </li>
    //     <li>
    //       6. Performance: do not code, answer verbally. If we where to render 1
    //       million of these cards what impact would it cause? what can we do to
    //       render them with out performance issues?
    //     </li>
    //   </ul>
      
    // </div>
    <Home />
  );
}

export default App;
