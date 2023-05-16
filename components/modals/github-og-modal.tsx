import { useGitHubForm } from '@/hooks/github/form';
import { BaseModal } from '@/components/modals/base-modal';

export function GitHubOgModal() {
  const {
    form,
    showing,
    handleDismiss,
    handleShow,
    handleSubmit,
    handleChange,
  } = useGitHubForm({
    generateLink(username) {
      return `/github/og/${username}`;
    },
  });

  return (
    <>
      <button
        onClick={handleShow}
        className='group text-left rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'>
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Image Generation{' '}
          <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          View image generation demo.
        </p>
      </button>

      {showing && (
        <BaseModal onDismiss={handleDismiss}>
          <div className='flex flex-col justify-center items-center h-80 bg-white text-black w-full max-w-lg mx-auto p-6 rounded-lg'>
            <h1 className='text-3xl text-center font-bold mb-10'>
              Enter your GitHub username to generate an OG image.
            </h1>

            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
              <input
                type='text'
                name='username'
                value={form.username}
                onChange={handleChange}
                placeholder='e.g devhammed'
                className='p-2 border border-gray-300 rounded-lg w-full h-12'
              />

              <button
                type='submit'
                className='p-2 bg-indigo-600 hover:bg-indigo-400 text-white h-12 rounded-lg w-full'>
                Submit
              </button>
            </form>
          </div>
        </BaseModal>
      )}
    </>
  );
}
