import { redirect } from 'next/navigation'

async function NotFound() {
    redirect('/')
}

export default NotFound;