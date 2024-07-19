import {
   Pagination,
   PaginationContent,
   PaginationEllipsis,
   PaginationItem,
   PaginationLink,
   PaginationNext,
   PaginationPrevious,
} from "../ui/pagination"


const MainPagination = ({ currentPage, totalPages, onPageChange }: any) => {
   const pages = [];
   for (let i = 1; i <= totalPages; i++) {
      pages.push(
         <PaginationItem key={i}>
            <PaginationLink
               href="#"
               onClick={(e) => {
                  e.preventDefault();
                  onPageChange(i);
               }}
               className={currentPage === i ? 'bg-blue-500 text-white' : 'bg-gray-200'}
            >
               {i}
            </PaginationLink>
         </PaginationItem>
      );
   }
   return (
      <Pagination>
         <PaginationContent>
            <PaginationItem>
               <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                     e.preventDefault();
                     if (currentPage > 1) onPageChange(currentPage - 1);
                  }}
               />
            </PaginationItem>
            {pages}
            <PaginationItem>
               <PaginationNext
                  href="#"
                  onClick={(e) => {
                     e.preventDefault();
                     if (currentPage < totalPages) onPageChange(currentPage + 1);
                  }}
               />
            </PaginationItem>
         </PaginationContent>
      </Pagination>

   )
}

export default MainPagination
