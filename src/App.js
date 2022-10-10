import logo from './logo.svg';
import soke from '../src/soke3.png'
import './App.css';

function App() {
  return (
    <div className="w-screen h-screen bg-[#F3A6BE]">
      <div className='flex flex-col'>
        <img className='lg:w-[500px] h-[500px] mx-auto' src={soke} alt=""></img>
        <p className='text-[#017C8C] mx-auto text-center text-3xl mb-2 mt-8 font-soke font-bold'>A Fresh Tasty Swig</p>
        <p className='text-[#017C8C] mx-auto text-center text-2xl font-soke'>That You Can Only Find In The Tropics</p>
      </div>
      <footer>
        <p className='text-[#017C8C] mx-auto text-center text-large font-soke mt-[130px] lg:mt-[25px]'>Copyright Soke's Swig LLC 2022</p>
      </footer>
    </div>
  );
}

export default App;
