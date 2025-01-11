import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "@/components/ui/pagination";
import { paginationRange } from "@/features/utils/helpers";
import { useState } from "react";

export function PaginationX() {
  const [page, setPage] = useState<number>(10);
  const [currPage, setCurrPage] = useState<number>(1);



  const range = paginationRange(page,currPage);
  function handlePrevious() {
    if (currPage > 1) setCurrPage((page) => page - 1);
  }
  function handleNext() {
    setCurrPage((page) => page + 1);
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={handlePrevious} />
        </PaginationItem>
        {range.map((item, i) => {
          if (item === "...") {
            return (
              <PaginationItem key={item}>
                <PaginationLink onClick={() => setPage(i)}>...</PaginationLink>
              </PaginationItem>
            );
          }

            return (
              <PaginationItem key={item}>
                <PaginationLink  onClick={() => setPage(i)} isActive={i===page&&true} >{i+1}</PaginationLink>
              </PaginationItem>
            );
          
        })}

        <PaginationItem>
          <PaginationNext onClick={handleNext} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
