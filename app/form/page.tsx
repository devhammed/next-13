import { handleSubmit } from './actions';

export default async function Page() {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-slate-500'>
      <h1 className='text-3xl font-bold mb-10'>Get In Touch</h1>
      <form action={handleSubmit} className='w-full max-w-sm'>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          name='name'
          placeholder='e.g Hammed'
          className='block w-full mb-4 rounded-lg text-slate-600'
        />

        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          name='email'
          placeholder='e.g hammed@example.com'
          className='block w-full mb-4 rounded-lg text-slate-600'
        />

        <label htmlFor='message'>Message</label>
        <textarea
          id='message'
          rows={5}
          name='message'
          className='block w-full mb-4 rounded-lg text-slate-600'
          placeholder='e.g Hello, I am Hammed, I am a software engineer and I am interested in working with you.'
        />

        <button
          type='submit'
          className='w-full h-12 bg-indigo-600 hover:bg-indigo-500 rounded-lg'>
          Submit
        </button>
      </form>
    </div>
  );
}
