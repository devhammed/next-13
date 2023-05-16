import { GitHubForm, GitHubFormSchema } from '@/contracts/github/form';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';

export interface GitHubFormHookProps {
  generateLink: (username: string) => string;
}

export function useGitHubForm({ generateLink }: GitHubFormHookProps) {
  const router = useRouter();

  const [showing, setShowing] = useState<boolean>(false);

  const [form, setForm] = useState<GitHubForm>({
    username: '',
  });

  const handleDismiss = useCallback(() => {
    setShowing(false);
  }, []);

  const handleShow = useCallback(() => {
    setShowing(true);
  }, []);

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const result = GitHubFormSchema.safeParse(form);

      if (result.success) {
        router.push(generateLink(form.username));
        return;
      }

      alert('Invalid username!');
    },
    [form]
  );

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setForm((form) => ({
        ...form,
        [event.target.name]: event.target.value,
      }));
    },
    []
  );

  return {
    showing,
    form,
    handleDismiss,
    handleShow,
    handleSubmit,
    handleChange,
  };
}
