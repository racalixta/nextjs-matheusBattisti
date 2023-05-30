import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Comment() {
  const router = useRouter();

  const todoId = router.query.todoId;
  const commentId = router.query.commentId;


  return (
    <>
      <Link href={`/todos/${todoId}`}><span>Voltar</span></Link>
      <h1>Exibindo o comentário: {commentId}</h1>
    </>
  )
}