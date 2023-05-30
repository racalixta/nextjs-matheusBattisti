import Link from 'next/link';

export async function getStaticProps(context) {
  const {params} = context;

  const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.todoId}`);

  const todo = await data.json();

  return {
    props: { todo },
  }
}

export async function getStaticPaths() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/');

  const data = await response.json();

  const paths = data.map((todo) => {
    return {
      params: {
        todoId: `${todo.id}`,
      },
    }
  });

  return { paths, fallback: false }
}

export default function Todo({ todo}) {


  return(
    <>
      <Link href="/todos"><span>Voltar</span></Link>

      <h1>Exibindo o Todo Id : {todo.id}</h1>

      <h3>Texto { todo.title }</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eos id est incidunt fugiat. Consectetur, aperiam? Veniam inventore rem incidunt quisquam, fuga recusandae porro voluptatibus aperiam repudiandae neque voluptatum fugit? 

        <Link href={`/todos/${todo.id}/comments/1`}><span>Detalhes</span></Link>
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eos id est incidunt fugiat. Consectetur, aperiam? Veniam inventore rem incidunt quisquam, fuga recusandae porro voluptatibus aperiam repudiandae neque voluptatum fugit? 

        <Link href={`/todos/${todo.id}/comments/2`}><span>Detalhes</span></Link>
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eos id est incidunt fugiat. Consectetur, aperiam? Veniam inventore rem incidunt quisquam, fuga recusandae porro voluptatibus aperiam repudiandae neque voluptatum fugit? 

        <Link href={`/todos/${todo.id}/comments/3`}><span>Detalhes</span></Link>
      </p>
    </>
  )

}