import { Button } from "./ui/button"
type TSubmitButton = {
   title: string
}

const SubmitButton = ({ title }: TSubmitButton) => {
   return (
      <Button className="w-full">
         {title}
      </Button>
   )
}

export default SubmitButton
