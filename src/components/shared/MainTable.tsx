'use client'
import React, { useState } from 'react';
import {
   Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "../ui/table";
import { Input } from '../ui/input';
import { Search } from 'lucide-react';
import MainPagination from './MainPagination';

const users = [
   { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
   { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
   { id: 3, name: 'Alice Johnson', email: 'alice@example.com', role: 'User' },
   { id: 4, name: 'Bob Brown', email: 'bob@example.com', role: 'User' },
   { id: 5, name: 'Charlie Davis', email: 'charlie@example.com', role: 'User' },
   { id: 6, name: 'Diana Evans', email: 'diana@example.com', role: 'User' },
   { id: 7, name: 'Evan Foster', email: 'evan@example.com', role: 'User' },
   { id: 8, name: 'Fiona Green', email: 'fiona@example.com', role: 'User' },
   { id: 9, name: 'George Harris', email: 'george@example.com', role: 'User' },
   { id: 10, name: 'Hannah Lee', email: 'hannah@example.com', role: 'User' },
   { id: 11, name: 'Ian Martinez', email: 'ian@example.com', role: 'User' },
   { id: 12, name: 'Jasmine Nelson', email: 'jasmine@example.com', role: 'User' },
   { id: 13, name: 'Kevin O\'Connor', email: 'kevin@example.com', role: 'User' },
   { id: 14, name: 'Laura Perez', email: 'laura@example.com', role: 'User' },
   { id: 15, name: 'Michael Quinn', email: 'michael@example.com', role: 'User' },
   { id: 16, name: 'Nina Roberts', email: 'nina@example.com', role: 'User' },
];
const ITEMS_PER_PAGE = 5;
export default function MainTable() {
   const [currentPage, setCurrentPage] = useState(1);
   const [searchQuery, setSearchQuery] = useState('');
   const handlePageChange = (newPage: number) => {
      setCurrentPage(newPage);
   };

   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value);
      setCurrentPage(1); // Reset to first page on search
   };

   const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.role.toLowerCase().includes(searchQuery.toLowerCase())
   );
   const paginatedUsers = filteredUsers.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
   const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);

   return (
      <div className="relative sm:p-4">
         <div className='grid grid-cols-12 gap-2'>
            <div className='col-span-8'>
               <h2 className="p-4">All Users</h2>
            </div>
            <div className='col-span-4 relative'>
               <Input className='px-9' placeholder="Pesquisar..." value={searchQuery} onChange={handleSearchChange} />
               <Search className='absolute left-[7px] top-[9px]' />
            </div>
         </div>
         <div className="rounded-md sm:border">
            <Table>
               <TableHeader>
                  <TableRow>
                     <TableHead className="font-medium">Image</TableHead>
                     <TableHead className="font-medium">Name</TableHead>
                     <TableHead className="font-medium">Email</TableHead>
                     <TableHead className="font-medium">Role</TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  {paginatedUsers.map((user) => (
                     <TableRow key={user.id}>
                        <TableCell><img src='/avatar.jpg' alt={user.name} className="w-12 h-12 rounded-full" /></TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.role}</TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </div>
         <div className="flex justify-center mt-4">
            <MainPagination
               currentPage={currentPage}
               totalPages={totalPages}
               onPageChange={handlePageChange} />
         </div>
      </div>
   );
}
