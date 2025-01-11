import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useGallery } from "@/features/utils/hooks";
import { getGalleryResponse, mediaType } from "@/services/apiServices";
import { useState } from "react";

export function PaginationX() {
  const [page, setPage] = useState<number>(1);

  const { isLoading, data } = useGallery(page, 12);
  if (isLoading) return <>loading</>;
  const { media } = data as getGalleryResponse;
  function handlePrevious() {
    if (page > 1) setPage((page) => page - 1);
  }
  function handleNext() {
    setPage((page) => page + 1);
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={handlePrevious} />
        </PaginationItem>
        {media.map((item: mediaType, i: number) => {
          return (
            <PaginationItem key={item._id}>
              <PaginationLink onClick={()=>setPage(i) } className={`${i==page? "isActive":null}`} >{i}</PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext onClick={handleNext} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
