'use client'

import Image from "next/image"
import { motion } from 'framer-motion'
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react"
import { Button } from "../ui/button"
import { Loader2Icon } from "lucide-react"
interface ILoginForm {
   isStudent: boolean
   setIsStudent: Dispatch<SetStateAction<boolean>>
}

const Login = ({ isStudent, setIsStudent }: ILoginForm) => {
   const [loading, setLoading] = useState(false)
   const [showModal, setShowModal] = useState(false)
   const [formData, setFormData] = useState({
      name: '',
      password: '',
      subject: '',
      message: ''
   })
   const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({
         ...formData,
         [event.target.name]: event.target.value
      });
   };
   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      setLoading(true)

      setTimeout(() => {
         setLoading(false)
         setShowModal(true)
         setFormData({ name: '', password: '', subject: '', message: '' }) // reset the values
      }, 2000)
   }
   return (
      <>
         <div className="mb-[3.75rem] space-y-5">
            <div className="flex items-center gap-1">
               <Image src='/logo.png' className="size-[2.5rem]" width={40} height={40} alt="logo" />
               <h2 className="font-semibold text-[1.50rem] text-background-main">Lumia</h2>
            </div>
            <h2 className="text-secondary-action text-2xl font-semibold">Hello ther and wellcome back</h2>
            <div className="space-y-4">
               <h3 className="font-semibold text-secondary-action">Eu sou ...</h3>
               <div className="border-[1px] relative rounded border-white overflow-hidden font-medium w-fit">
                  <motion.div
                     initial={false}
                     animate={{
                        left: isStudent ? '50%' : '0%',
                        width: isStudent ? '51%' : '51%',
                     }}
                     transition={{ duration: 0.75 }}
                     className="absolute inset-0 bg-white z-0" />
                  <button className="text-black w-40 text-sm px-3 py-1.5 transition-colors duration-[750ms] relative" onClick={() => setIsStudent(false)}>
                     <span className="relative z-10">Um aluno</span>
                  </button>
                  <button className="text-black w-40 text-sm px-3 py-1.5 transition-colors duration-[750ms] relative" onClick={() => setIsStudent(true)}>
                     <span className="relative z-10">Uma fucionari</span>
                  </button>
               </div>
            </div>
         </div>

         <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center gap-3">
               <div className="relative z-0 w-full mb-6 group">
                  <input
                     type="text"
                     name="name"
                     id="name"
                     value={formData.name}
                     onChange={handleInputChange}
                     className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-background-main focus:outline-none focus:ring-0 focus:border-background-main peer" placeholder=" " required />
                  <label htmlFor="name" className="peer-focus:font-medium text-secondary-action absolute text-sm duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-background-main peer-focus:dark:text-background-main peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Numero do estudante</label>
               </div>
               <div className="relative z-0 w-full mb-6 group">
                  <input
                     type="password"
                     name="password"
                     id="password"
                     value={formData.password}
                     onChange={handleInputChange}
                     className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-background-main focus:outline-none focus:ring-0 focus:border-background-main peer" placeholder=" " required />
                  <label htmlFor="password" className="peer-focus:font-medium text-secondary-action absolute text-sm duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-background-main peer-focus:dark:text-background-main peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Palavra-passe</label>
               </div>
            </div>

            <Button type="submit" className="focus:outline-none bg-background-main font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center text-primary-text disabled:bg-secondary-action hover:bg-slate-200 transition-colors" disabled={loading}>
               {loading ? <div className='flex justify-center text-background-main'><Loader2Icon className='animate-spin text-background-main' /></div> : 'Submeter'}
            </Button>
         </form>
      </>
   )
}

export default Login
