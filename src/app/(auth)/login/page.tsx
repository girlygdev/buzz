import { Button } from '@/components/ui/Button';
import { login, signup } from './actions';

export default function LoginPage() {
	return (
		<div className='flex items-center justify-center w-full h-screen'>
			<form className='w-1/2'>
				<h1>Log in</h1>
				<div className='flex flex-col gap-2 mt-5'>
					<label htmlFor='email'>Email:</label>
					<input id='email' name='email' type='email' required />
				</div>

				<div className='flex flex-col gap-2'>
					<label htmlFor='password'>Password:</label>
					<input
						id='password'
						name='password'
						type='password'
						required
					/>
				</div>
				<div className='flex gap-2 mt-5'>
					<Button formAction={login}>Log in</Button>
					<Button formAction={signup}>Sign up</Button>
				</div>
			</form>
		</div>
	);
}
