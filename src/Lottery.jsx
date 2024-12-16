import { useState } from "react";
import { genTicket, sum } from "./helper";

export default function Lottery() {
  let [ticket, setTicket] = useState(genTicket(3));
  let isWinning = sum(ticket) === 15;
  let buyTicket = () => {
    setTicket(genTicket(3));
  };
  return (
    <div>
      <h2>Lottery Game!</h2>
      <p>
        If the sum of all digits is 15, you will win the lottery and get the
        price
      </p>
      <span>{ticket[0]}</span>
      <span>{ticket[1]}</span>
      <span>{ticket[2]}</span>
      <br />
      <button onClick={buyTicket}>Generate new Ticket</button>
      <br />
      <h2> {isWinning && "Congratulation, You won!!"}</h2>
    </div>
  );
}
