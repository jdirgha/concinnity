import type { PageServerLoad } from './$types'

export const load: PageServerLoad = () => {
  return {
    title: 'Forgot Password - concinnity',
    image: '/favicon.png',
    description:
      'Forgot your concinnity password? No worries! Enter your email address and we will send you a link to reset your password.',
  }
}
