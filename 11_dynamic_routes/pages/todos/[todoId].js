import Link from 'next/link';
import { useRouter } from 'next/router';


export default function Todo() {

  const router = useRouter();
  const todoId = router.query.todoId;

  return(
    <>
      <Link href="/"><span>Voltar</span></Link>

      <h1>Exibindo o Todo Id : {todoId}</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eos id est incidunt fugiat. Consectetur, aperiam? Veniam inventore rem incidunt quisquam, fuga recusandae porro voluptatibus aperiam repudiandae neque voluptatum fugit? 

        <Link href={`/todos/${todoId}/comments/1`}><span>Detalhes</span></Link>
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eos id est incidunt fugiat. Consectetur, aperiam? Veniam inventore rem incidunt quisquam, fuga recusandae porro voluptatibus aperiam repudiandae neque voluptatum fugit? 

        <Link href={`/todos/${todoId}/comments/2`}><span>Detalhes</span></Link>
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eos id est incidunt fugiat. Consectetur, aperiam? Veniam inventore rem incidunt quisquam, fuga recusandae porro voluptatibus aperiam repudiandae neque voluptatum fugit? 

        <Link href={`/todos/${todoId}/comments/3`}><span>Detalhes</span></Link>
      </p>
    </>
  )

}