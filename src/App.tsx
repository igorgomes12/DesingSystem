import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { Envelope, Lock } from 'phosphor-react'



import { Logo } from './Logo';
import './styles/global.css';
import { TextInput } from './components/TextInput';
import { Checkbox } from './components/Checkbox';
import { Button } from './components/Button';

export function App() {


  return (
    <div className="h-screen w-screen bg-gray-900 flex flex-col justify-center items-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />
        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>
        <Text size="lg" className="text-gray-400 mt-1">
          Faça login e comece a usar!
        </Text>
      </header>
      <form className="flex flex-col items-stretch w-full max-w-sm mt-10">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">
            Endereço de e-mail
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input id="email" placeholder="Digite seu e-mail" />
          </TextInput.Root>
        </label>

        <label htmlFor="passoword" className="flex flex-col gap-3">
          <Text className="font-semibold">
            sua senha
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input type="passoword" id="passoword" placeholder="******" />
          </TextInput.Root>
        </label>
        <label htmlFor="remember" className="flex items-center gap-2 mt-4">
          <Checkbox />
          <Text size="sm" className="text-gray-200">Lembrar de mim por 30 dias</Text>

        </label>
        <Button>Entrar na Plataforma</Button>
      </form>
      <footer className="flex flex-col items-center gap-4 mt-8">
        <a href="" className="text-gray-400 underline">Esqueceu sua senha</a>
        <a href="" className="text-gray-400 underline">Não possui conta? criar uma agora!</a>
      </footer>
    </div>
  )
}

