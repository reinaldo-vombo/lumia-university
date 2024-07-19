
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
// import { BookShellIcon, Buildingcon, CalendarIcon, HomeIcon, StaffIcon, StudentsIcon, UsersIcon } from '../constant/svgIcons';
// import Link from 'next/link';
// import { useProvider } from '../providers/AppProvider';
// type TDropdwon = {
//    item: {
//       id: number;
//       name: string;
//       icon: any;
//       route: string;
//       subItems: string[]
//    },
//    index: number
//    path: string
//    toggleSidebar: boolean
// }

// const DropdwonItems = ({ item, index, path, toggleSidebar }: TDropdwon) => {
//    return (
//       <Accordion type="single" collapsible>
//          <AccordionItem value={`item-${index}`} className='border-none'>
//             <AccordionTrigger className={toggleSidebar ? 'justify-center' : 'p-0'}>
//                <Link href={`/dashboard/admin/${item.route}`} className={`flex items-center gap-2 text-xs`}>
//                   {index === 0 ? <HomeIcon /> : index === 1 ? <CalendarIcon path={path} /> : index === 2 ? <UsersIcon path={path} /> : index === 3 ? <StudentsIcon path={path} /> : index === 4 ? <BookShellIcon path={path} /> : index === 5 ? <StaffIcon path={path} /> : <Buildingcon path={path} />}
//                   {!toggleSidebar && (
//                      <span>{item.name}</span>
//                   )}
//                </Link>
//             </AccordionTrigger>
//             <AccordionContent>
//                <ul className={toggleSidebar ? '' : 'pl-10'}>
//                   {item.subItems.map((subItem, index) => (
//                      <li key={index} className='text-xs mb-2'>
//                         <Link href={subItem}>
//                            {toggleSidebar ? (
//                               <div className='bg-indigo-800 size-8 rounded-full'></div>
//                            ) : (
//                               <span>{subItem}</span>
//                            )}
//                         </Link>
//                      </li>
//                   ))}
//                   <li></li>
//                </ul>
//             </AccordionContent>
//          </AccordionItem>
//       </Accordion>
//    )
// }

// export default DropdwonItems
