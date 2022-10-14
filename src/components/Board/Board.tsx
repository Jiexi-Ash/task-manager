import { Board } from "@prisma/client";
import React, { useState } from "react";
import { trpc } from "../../utils/trpc";

function Board() {
  const [boards, setBoards] = useState<Board[]>([]);

  const { data: boardData, isLoading } = trpc.board.getBoards.useQuery(
    {},
    {
      onSuccess: (data) => {
        setBoards(data);
        console.log(data);
      },
    }
  );
  return (
    <div className="flex h-full flex-col  items-center justify-center">
      <div className="mb-6 max-w-xs">
        <p className=" text-center text-lg font-bold text-mediumGray">
          This board is empty. Create a new column to get started.
        </p>
      </div>

      <button className="btn-sm rounded-full capitalize ">
        + add new column
      </button>
    </div>
  );
}

export default Board;
