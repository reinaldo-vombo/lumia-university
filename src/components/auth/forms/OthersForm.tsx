import SubmitButton from "../../SubmitButton"
import { Input } from "../../ui/input"
import { motion } from "framer-motion"

const OthersForm = ({ isStudent }: any) => {
   return (
      <motion.form
         initial={false}
         animate={{
            y: isStudent ? 0 : '100%'
         }}
         transition={{ ease: 'easeInOut', duration: 0.5 }}
         className="space-y-5 absolute inset-0">
         <div>
            <label htmlFor="" className="block text-sm font-medium mb-2">Email</label>
            <Input />
         </div>
         <div>
            <label htmlFor="" className="block text-sm font-medium mb-2">Palavra-passe</label>
            <Input />
         </div>
         <SubmitButton title="Entart" />
      </motion.form>
   )
}

export default OthersForm
